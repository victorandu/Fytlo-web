# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fytlo marketing website + waitlist. This repo handles:
- Marketing landing page UI
- Waitlist flow (email capture → SMTP delivery via API route)
- Static policy pages (`/privacy`, `/terms`)

**Not in scope:** VTO/ML models, auth, payments, analytics.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- pnpm as package manager
- nodemailer (waitlist SMTP)

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm lint             # Run ESLint
```

## Local Environment

Copy `.env.example` → `.env.local` and fill in SMTP credentials before running the waitlist form locally:

```
WAITLIST_TO_EMAIL=   # Where signups are sent
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=           # Optional, defaults to SMTP_USER
```

## Architecture

Allowed pages only:
- `/` — Landing page
- `/privacy` — Privacy policy
- `/terms` — Terms of service

Footer on all pages must link to `/privacy` and `/terms`.

### API Routes

- `POST /api/waitlist` — validates email, sends admin notification + user confirmation via nodemailer. All SMTP config is read from env vars. Structured for easy provider swap (replace transporter in `app/api/waitlist/route.ts`).

## Landing Page Structure (Fixed Order)

1. Hero
2. Early Fit Preview
3. How Fytlo Works
4. Fit Is the Problem
5. Built for Realism
6. Early, Honest, and in Progress
7. Final CTA

## Design System: Dark Liquid Glass

### CSS Design Tokens

All colors and glass properties are CSS custom properties defined in `app/globals.css`. Always use these variables — never hardcode hex values:

| Token | Purpose |
|---|---|
| `--color-accent` | Primary CTA background |
| `--color-accent-text` | Text on accent background |
| `--color-muted` | Secondary/helper text |
| `--color-surface` | Input/card backgrounds |
| `--glass-border` | Border on glass surfaces |
| `--glass-bg` | Glass panel background |
| `--glass-blur` | Blur amount (16px) |

### GlassCard Component

`<GlassCard variant="default|subtle|strong" as="div|section|article|aside">`

Maps to CSS classes `glass-card`, `glass-card-subtle`, `glass-card-strong` defined in `globals.css`. Use `subtle` for grid items, `default` for feature cards, `strong` for high-emphasis panels.

### Core Rules
- Dark gradient background defined on `html` element in `globals.css` (fixed attachment)
- Glass panels: `backdrop-filter` with blur/saturation
- Always provide non-blur fallback for unsupported browsers
- Gate blur with `@supports (backdrop-filter: blur(1px))`
- Never animate blur values
- Respect `prefers-reduced-motion`

### Responsive Requirements
- Mobile-first layout
- No horizontal scrolling
- Touch targets ≥ 44px
- Avoid `100vh` pitfalls (use `min-h-dvh`)
- Must work on phones, tablets, and desktops

## Copy Constraints

**Hero headline:** "Fit, Not Filters. Virtual Try-On That Matches You."
**Subheadline:** "Upload a photo and see how clothes fit your body — realistically."
**Primary CTA:** "Join Early Access"
**Microtext:** "Limited rollout while we refine fit accuracy."

**Prohibited phrases:** "Perfect fit", "Exact measurements", "Revolutionary", "Future of fashion"

## Constraints

- No analytics/tracking SDKs
- No heavy animation or state management libraries
- No new pages beyond `/`, `/privacy`, `/terms` without approval
- No auth logic
- Keep dependencies minimal
- Do not add new dependencies unless explicitly requested; prefer using existing utilities and platform features

## Workflow Requirements

- Prefer minimal, diff-scoped changes over full-file rewrites unless explicitly requested

If requirements are ambiguous, STOP and ask clarifying questions before implementing.
Do not infer product, UX, or growth intent.

## Testing

No test framework is currently installed. Until one is added:
- Run `pnpm lint` after every code change and include results
- Manually verify form submission and success/error states when touching `WaitlistForm` or `app/api/waitlist/route.ts`

## Output Requirements

Every task must report:
- Files created/modified
- What changed and why
- Build/lint results
- Any risks or TODOs

If anything is ambiguous → ask before proceeding.
