# LEAD ENGLISH — Smart Lesson Planner

High-performance, lightweight PWA for Jordan Team Together English lesson preparation, Grades 1–6.

## Main flow
Grade → Semester → Unit → Lesson → paper-style lesson planner → Print / Save PDF

## Design goals
- A4 lesson-plan sheets preserved from the supplied grade planner pages.
- 5E lesson structure and Siraj integration.
- Local curriculum manifest so dropdowns do not depend on missing external source data.
- No CDN, no framework, no npm, no server-side code.
- PWA/offline cache support through `sw.js`.
- Mobile-first and GitHub Pages friendly.

## GitHub Pages
Publish the `main` branch from the repository root. `index.html` must remain at the root of the publishing source.
