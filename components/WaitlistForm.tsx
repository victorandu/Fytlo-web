'use client'

import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

async function submitToWaitlist(
  email: string,
  honeypot: string
): Promise<{ ok: boolean; error?: string }> {
  const response = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, website: honeypot }),
  })
  return response.json()
}

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!email || status === 'submitting') return

    setStatus('submitting')

    try {
      const result = await submitToWaitlist(email, honeypot)
      if (result.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="font-medium text-white">You&apos;re on the list!</p>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          We&apos;ll be in touch when early access opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
      {/* Honeypot — hidden from real users, bots fill it in */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ display: 'none' }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'submitting'}
        className="min-h-[44px] flex-1 rounded-full border border-[var(--glass-border)] bg-[var(--color-surface)] px-4 py-3 text-white placeholder:text-[var(--color-muted)] focus:border-[var(--color-secondary)] focus:outline-none disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="min-h-[44px] rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-[var(--color-accent-text)] transition-colors hover:bg-[var(--color-accent-hover)] active:opacity-80 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Joining...' : 'Join Early Access'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-400 sm:absolute sm:top-full sm:mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
