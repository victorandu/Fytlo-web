import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple email format validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: Request) {
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
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      WAITLIST_TO_EMAIL,
      SMTP_FROM,
    } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !WAITLIST_TO_EMAIL) {
      console.error('Missing required SMTP environment variables')
      return NextResponse.json(
        { ok: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Send email
    const timestamp = new Date().toISOString()
    await transporter.sendMail({
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

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}
