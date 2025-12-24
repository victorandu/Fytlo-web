# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fytlo marketing website + waitlist. This repo handles:
- Marketing landing page UI
- Waitlist flow (frontend-only)
- Static policy pages (`/privacy`, `/terms`)

**Not in scope:** VTO/ML models, backend APIs, auth, payments, analytics.

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- pnpm as package manager

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm lint             # Run ESLint
```

## Architecture

Allowed pages only:
- `/` — Landing page
- `/privacy` — Privacy policy
- `/terms` — Terms of service

Footer on all pages must link to `/privacy` and `/terms`.

## Landing Page Structure (Fixed Order)

1. Hero
2. Early Fit Preview
3. How Fytlo Works
4. Fit Is the Problem
5. Built for Realism
6. Early, Honest, and in Progress
7. Final CTA

## Design System: Dark Liquid Glass

### Core Rules
- Dark gradient background (near-black base)
- Glass panels: `backdrop-filter` with blur/saturation
- Always provide non-blur fallback for unsupported browsers
- Gate blur with `@supports (backdrop-filter: blur(1px))`
- Never animate blur values
- Respect `prefers-reduced-motion`

### Responsive Requirements
- Mobile-first layout
- No horizontal scrolling
- Touch targets ≥ 44px
- Avoid `100vh` pitfalls (use safe viewport units)
- Must work on phones, tablets, and desktops

## Copy Constraints

**Hero headline:** "Fit, Not Filters. Virtual Try-On That Matches You."
**Subheadline:** "Upload a photo and see how clothes fit your body — realistically."
**Primary CTA:** "Join Early Access"
**Microtext:** "Limited rollout while we refine fit accuracy."

**Prohibited phrases:** "Perfect fit", "Exact measurements", "Revolutionary", "Future of fashion"

## Waitlist (v1)

- Email input + submit button
- Client-side success state only (no backend integration yet)
- Structure code for easy provider swap later

## Constraints

- No analytics/tracking SDKs
- No heavy animation or state management libraries
- No new pages beyond `/`, `/privacy`, `/terms` without approval
- No auth or backend logic
- Keep dependencies minimal

## Output Requirements

Every task must report:
- Files created/modified
- What changed and why
- Build/lint results
- Any risks or TODOs

If anything is ambiguous → ask before proceeding.
