import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple email format validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, WAITLIST_TO_EMAIL, SMTP_FROM } = process.env

  // Debug: Log env vars presence (not values)
  console.log('[waitlist] Environment check:', {
    SMTP_HOST: !!SMTP_HOST,
    SMTP_PORT: !!SMTP_PORT,
    SMTP_USER: !!SMTP_USER,
    SMTP_PASS: !!SMTP_PASS,
    WAITLIST_TO_EMAIL: !!WAITLIST_TO_EMAIL,
    SMTP_FROM: !!SMTP_FROM,
  })

  try {
    const body = await request.json()
    const { email } = body

    // Validate email presence
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const trimmedEmail = email.trim().toLowerCase()
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check required environment variables
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !WAITLIST_TO_EMAIL) {
      console.error('[waitlist] Missing required SMTP environment variables')
      return NextResponse.json(
        { ok: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const port = parseInt(SMTP_PORT, 10)
    console.log(`[waitlist] SMTP config: host=${SMTP_HOST}, port=${port}`)

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Send email
    const timestamp = new Date().toISOString()
    console.log(`[waitlist] Sending email for signup: ${trimmedEmail}`)

    let result
    try {
      result = await transporter.sendMail({
        from: SMTP_FROM || SMTP_USER,
        to: WAITLIST_TO_EMAIL,
        subject: 'Fytlo waitlist signup',
        text: `New waitlist signup:\n\nEmail: ${trimmedEmail}\nTimestamp: ${timestamp}`,
        html: `
          <h2>New Fytlo Waitlist Signup</h2>
          <p><strong>Email:</strong> ${trimmedEmail}</p>
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

    console.log(`[waitlist] Email sent successfully, messageId=${result.messageId}`)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[waitlist] Request processing error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}
