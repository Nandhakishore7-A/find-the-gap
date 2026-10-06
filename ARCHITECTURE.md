# Architecture

## Application flow

The React workspace in `app/page.tsx` provides discovery, company examples, opportunity hypotheses, a planning worksheet, a device-local watchlist, and Review Me.

The standalone `/review` route presents the same review component for shareable mentor/reviewer access. Review checklists and notes persist in browser storage and export as text. They are not submitted to the owner.

## Discovery

`GET /api/discover` fetches the 24 newest Show HN posts from Algolia. It returns normalized announcements, original discussion links, product links, source timestamps, title-based categories, and explicit unknown locations. HTTP(S) product links are permitted; other schemes fall back to the original discussion.

The client fetches on opening and every five minutes while open. Responses advertise a two-minute cache duration. This does not guarantee discovery within five minutes of company formation or full worldwide coverage. Announcements can include hobby projects and established-company products.

## Planning and AI

The browser-generated worksheet uses the idea, location, and budget as input to a fixed validation framework. It is explicitly labeled a template.

`POST /api/analyze` validates input and requires the server-side `OPENAI_API_KEY` binding. Without that binding it returns HTTP 503. When configured, it requests OpenAI Responses with required web search and extracts output text plus source annotations. No working-key integration test has been performed.

The current public deployment does not have an AI key. Before enabling public AI, add authentication, durable rate limits, spending limits, and misuse monitoring. The key must never be sent to the browser.

## Evidence and storage

Existing-company profiles are curated examples. Gap cards are research hypotheses, not claims of validated demand. Watchlists and review notes are device-local. There is no database, historical ingestion archive, notification service, or cross-device sync.

## Deployment

Vinext and Vite emit a Cloudflare Worker and client assets. Sites owns deployment and public access. `.openai/hosting.json` identifies the live Site; do not reuse that identity for a fork. Dependencies, build outputs, local tools, and secrets are excluded from source control.
