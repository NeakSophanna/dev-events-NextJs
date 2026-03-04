# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your DevEvent Next.js App Router project.

## Changes made

- **`instrumentation-client.ts`** (new) — Initializes PostHog client-side using the Next.js 15.3+ instrumentation pattern. Configured with a reverse proxy (`/ingest`), automatic exception capture, and debug mode in development.
- **`next.config.ts`** — Added reverse proxy rewrites for PostHog ingestion (`/ingest/*` → `https://us.i.posthog.com`) and enabled `skipTrailingSlashRedirect` to support PostHog's trailing-slash API requests.
- **`components/ExploreBtn.tsx`** — Added `explore_events_clicked` capture when the CTA button is clicked.
- **`components/EventCard.tsx`** — Converted to a client component; added `event_card_clicked` capture with properties (`event_title`, `event_slug`, `event_location`, `event_date`) when a card is clicked.
- **`components/Navbar.tsx`** — Converted to a client component; added `nav_link_clicked` capture with a `label` property on each navigation link.
- **`.env.local`** — Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (gitignore-covered).

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' CTA button on the homepage hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details, indicating interest in a specific event | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the top navbar | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/330824/dashboard/1328918)
- [Explore Events button clicks](https://us.posthog.com/project/330824/insights/23M1TrLT) — Daily trend of CTA clicks
- [Event card clicks over time](https://us.posthog.com/project/330824/insights/0WAAQDli) — Daily trend of event card interactions
- [Discovery funnel: Explore → Event card](https://us.posthog.com/project/330824/insights/EjIwcAur) — Conversion funnel from CTA to event card click
- [Nav link clicks by label](https://us.posthog.com/project/330824/insights/gUVK2YKo) — Which nav links users click most
- [Most clicked events](https://us.posthog.com/project/330824/insights/P2tgpjOl) — Which dev events attract the most interest

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
