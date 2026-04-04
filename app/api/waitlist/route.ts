import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Prevent HTML injection in email bodies
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// In-memory rate limiter — 5 requests per IP per minute
// Resets on cold starts; effective against naive bots on persistent deployments
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, WAITLIST_TO_EMAIL, SMTP_FROM } = process.env

  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests' },
      { status: 429 }
    )
  }

  // Request size cap (1 KB is more than enough for an email address)
  const contentLength = request.headers.get('content-length')
  if (contentLength && parseInt(contentLength, 10) > 1024) {
    return NextResponse.json(
      { ok: false, error: 'Request too large' },
      { status: 413 }
    )
  }

  try {
    const body = await request.json()
    const { email, website } = body

    // Honeypot — bots fill hidden fields, real users don't
    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    const trimmedEmail = email.trim().toLowerCase()
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !WAITLIST_TO_EMAIL) {
      console.error('[waitlist] Missing required SMTP environment variables')
      return NextResponse.json(
        { ok: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const port = parseInt(SMTP_PORT, 10)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const timestamp = new Date().toISOString()
    const safeEmail = escapeHtml(trimmedEmail)

    let result
    try {
      result = await transporter.sendMail({
        from: SMTP_FROM || SMTP_USER,
        to: WAITLIST_TO_EMAIL,
        subject: 'Fytlo waitlist signup',
        text: `New waitlist signup:\n\nEmail: ${trimmedEmail}\nTimestamp: ${timestamp}`,
        html: `
          <h2>New Fytlo Waitlist Signup</h2>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        `,
      })
    } catch (sendError) {
      console.error('[waitlist] SMTP send failed:', sendError)
      return NextResponse.json(
        { ok: false, error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log(`[waitlist] Admin email sent, messageId=${result.messageId}`)

    try {
      const userResult = await transporter.sendMail({
        from: SMTP_FROM || SMTP_USER,
        to: trimmedEmail,
        subject: "You're on the Fytlo waitlist",
        text: `Thanks for joining the Fytlo waitlist.

We're refining fit accuracy and inviting early users in small batches.

You'll hear from us when early access opens.

— Fytlo`,
      })
      console.log(`[waitlist] User confirmation sent, messageId=${userResult.messageId}`)
    } catch (userEmailError) {
      console.error('[waitlist] Failed to send user confirmation email:', userEmailError)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[waitlist] Request processing error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}
