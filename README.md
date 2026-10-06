# Find the Gap

Startup opportunity research app built with React, Vinext, and Cloudflare Workers.

## Implemented
- Recent Show HN product announcements via Algolia, refreshed on opening and every five minutes while open.
- Original discussion and product links, publication timestamps, automatic topic classification, explicit unknown locations.
- Curated existing company profiles, search, industry and country filters.
- Device-local watchlist with remove and persistence.
- Clearly labeled opportunity hypotheses with validation experiments and sources.
- Downloadable planning worksheets using the submitted idea, location, and budget.
- Server-side OpenAI Responses integration with required web search and citation links, disabled until OPENAI_API_KEY is configured as a hosted secret.
- Responsive navigation, accessible controls, source detail panels, error and empty states.

## Current limits
This is a first working version, not a complete global company database. Show HN contains product announcements, including side projects, and does not establish company formation dates. Existing profiles are curated examples. Industry labels are title-based inferences. Company locations require independent verification. No unattended ingestion, historical archive, accounts, server-persisted watchlists, or proactive notifications are enabled. AI research has not been tested with a live key. Opportunity hypotheses are not verified market demand.

## Development
Run npm install and npm run dev. Typecheck with node node_modules/typescript/bin/tsc --noEmit. Build with npm run build. Hosted identity is stored in .openai/hosting.json.

Configure OPENAI_API_KEY through Sites environment secrets, never through client code. Current integration uses gpt-4.1-mini and the web_search tool. Private site access provides the initial audience boundary. Before public access, add durable rate limits, usage budgets, and app-owned account controls.

## Verification
Root route returned HTTP 200 with brand markup; launch endpoint returned real source-linked announcements; missing AI configuration returned intentional HTTP 503; TypeScript check passed. Interactive browser and WebMCP validation were unavailable because the app preview panel was queued and exposed no browser tab.
