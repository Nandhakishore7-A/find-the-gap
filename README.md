# Find the Gap

Discover public product launches, inspect existing companies, and explore startup opportunities with visible evidence and assumptions.

**[Live app](https://find-the-gap.airy-ridge-0495.chatgpt.site)** · **[Review Me](https://find-the-gap.airy-ridge-0495.chatgpt.site/review)**

## What works today

- Real Show HN announcements with source links and publication timestamps.
- Search, industry/country filters, and curated existing-company profiles.
- Device-local watchlists and company source panels.
- Clearly labeled opportunity hypotheses with validation experiments.
- Downloadable planning worksheets using an idea, location, and budget.
- Review Me: guided walkthrough, local checklist, notes, and downloadable feedback.
- Prepared server-side AI research integration; currently disabled until an AI service is connected.

## Run locally

Use Node.js 22.13+ and npm.

```sh
npm ci
npm run dev
```

```sh
npx tsc --noEmit
npm run build
```

The GitHub Actions workflow runs typecheck and build after pushing. Its remote status has not yet been verified.

## Project review

Read [REVIEW.md](REVIEW.md), [ARCHITECTURE.md](ARCHITECTURE.md), and [CONTRIBUTING.md](CONTRIBUTING.md). The project is a portfolio artifact that can support a discussion with GSoC mentors, not an official GSoC project or an application submission service.

The owner supplied the idea and direction. Codex assisted with implementation. Applicants should disclose significant AI assistance and explain and maintain the code themselves, following their target organization's policy.

## Honest limitations

Discovery currently covers one public announcement source, not every startup worldwide. Announcements can describe side projects and do not verify company formation. Refresh happens every five minutes while open; there is no unattended ingestion or history archive. Locations remain unknown when undisclosed; categories are title-based inferences. Gap cards are hypotheses, not validated market demand. Existing companies are curated examples.

Watchlists and review notes stay on the current device. There are no accounts, proactive notifications, or cross-device sync. Reviewer notes are not sent to the owner.

AI research has not been tested with a live key. Configure OPENAI_API_KEY as a server secret through Sites. Before enabling AI on the public deployment, add durable rate limits, spend caps, and authentication. Never commit or expose keys.

## Licensing

The owner has not selected an open-source license for original project code yet. Public source access alone does not grant reuse rights. Third-party code retains its own licenses and notices.
