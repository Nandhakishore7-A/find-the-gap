# Review Find the Gap

**Live demo:** https://find-the-gap.airy-ridge-0495.chatgpt.site  
**Review Me:** https://find-the-gap.airy-ridge-0495.chatgpt.site/review

## Walkthrough

1. Inspect a recent announcement and open its original source.
2. Search existing companies and test category/country filters.
3. Save a company, reload, and inspect the watchlist.
4. Enter an idea, location, and budget; create and download a planning worksheet.
5. Open Review Me, record observations, and download the review notes.

## Questions for a technical review

- How are company formation and announcement timestamps distinguished?
- How should malformed source responses and source outages be handled?
- Which data belongs in browser storage versus a durable database?
- How would ingestion deduplicate the same company across sources?
- How would AI spend and usage be controlled for a public deployment?
- What evidence would establish an opportunity instead of merely suggesting one?

## Current verification

The initial app returned HTTP 200 for its root and discovery routes; discovery returned source-linked announcements. The unconfigured AI path returned HTTP 503. TypeScript and production build checks passed. Browser interaction and WebMCP checks were not completed in the initial build. Reviewer-added code receives a new typecheck/build before publication.

The GitHub Actions workflow provides typecheck and build automation once the repository is pushed. Adding a workflow is not evidence that remote CI has already passed.

## Authorship and GSoC context

The project owner supplied the idea and product direction; Codex assisted with implementation. This portfolio should not be presented as wholly independently authored code. An applicant should be able to explain, debug, and extend it personally.

This is an independent portfolio project, not an officially accepted Google Summer of Code project. GSoC participation requires applying to a participating organization under its requirements, communicating with mentors, and demonstrating contributions relevant to that organization.

Official references:
- https://developers.google.com/open-source/gsoc/help/student-advice
- https://developers.google.com/open-source/gsoc/resources/guide

## Roadmap

Prioritize robust source validation and tests, broader permitted coverage, durable history, verified company matching, accessibility QA, and cost-controlled AI. The original-code license remains an owner decision before this can be represented as an open-source contribution project.
