# Contributing to Find the Gap

Start by running the app and reading [ARCHITECTURE.md](ARCHITECTURE.md) and [REVIEW.md](REVIEW.md). The live demo is https://find-the-gap.airy-ridge-0495.chatgpt.site.

## Local setup

Use Node.js 22.13 or newer and npm. Run `npm ci`, then `npm run dev`. No AI key is necessary for the discovery feed or planning worksheet. Never commit credentials. Hosted runtime secrets belong in Sites environment configuration.

## Useful first contributions

- Improve announcement topic classification with fixtures and explicit uncertainty.
- Add a permitted public source with provenance and graceful failure handling.
- Improve keyboard navigation and mobile layouts with reproducible before/after evidence.
- Add meaningful tests for malformed source responses, duplicate handling, and unsafe URLs.

Larger proposals include durable ingestion, verified company matching, account-backed watchlists, and cost-controlled AI research.

## Before proposing a change

Describe the user problem, expected behavior, scope, evidence, and risks. Check whether the work is already underway. A source connector must document permissions, refresh behavior, rate limits, and coverage limits.

## Verification

Run `npx tsc --noEmit` and `npm run build`. For UI changes, test the real flow on desktop and mobile, including keyboard use and empty/error states. Do not label an untested behavior as verified. Avoid tests that only repeat the implementation.

Use a focused branch and pull request. Explain the resulting behavior and relevant validation. Never fabricate market evidence, company launch dates, funding figures, or demand signals.

## AI assistance and licensing

Disclose significant AI assistance and understand every submitted change. The initial application implementation was created with Codex assistance. Follow a mentoring organization's AI policy for any GSoC work.

An open-source license for the project's original code has not yet been selected by the owner. Do not assume public availability grants permission to reuse it. Third-party components retain their own licenses and notices.
