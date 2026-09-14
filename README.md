# Evisions Internship Portfolio

**Type:** Individual project
**Contributor:** Carter Ward
**For:** Evisions Summer 2026 internship (not a class assignment)
**Completed:** 08/23/2026

**Live site:** https://csw04-exe.github.io/Evisions-Internship-Portfolio/

## Purpose

This repo is the source for a static site documenting my Summer 2026 internship at Evisions, a
company that's spent 25+ years building higher-ed software (Argos, IntelliCheck, FormFusion). It
serves two purposes: a portfolio piece I can point employers to, and an internship deliverable in
its own right — the site is part of what I produced.

## Problem and Approach

Seven weekly department rotations plus a capstone, a mock product, four bonus courses, and three
shadow days produce dozens of artifacts across totally different disciplines — dumped in a folder
that's an unreadable pile of PDFs. I set out to present all of it as one cohesive, navigable site
instead, with an information architecture built around Home, About, a sidebar-navigated Projects
section (Department Weeks, Mock Product, Capstone, Bonus Courses, Shadow Days), Reflection, and
Resume & Contact — plus a site-help modal clarifying that SEA is a fictional mock product and any
Argos screenshots come from training data, not real students.

## Structure and Methodologies

- Plain HTML/CSS/vanilla JS — no frameworks, no build step, no npm install
- Hand-written pages sharing common header/nav/site-help-modal/footer markup, each with its own
  title, meta description, Open Graph/Twitter tags, and schema.org JSON-LD
- Single `assets/css/style.css` (~875 lines) using CSS custom properties for color, spacing, and
  type scale; no Bootstrap/Tailwind/Google Fonts
- `assets/js/main.js` for mobile nav, accessible modal (focus trap), scroll reveal, click-to-copy
- `assets/documents/` and `assets/img/` organized by project/week (`capstone/`, `mock-product/`,
  `resume/`, `weeks/`)
- `projects/` mirrors the Projects sidebar (week-1–7, mock-product, capstone, bonus, shadow-days);
  legacy redirect stubs at the repo root preserve old links
- Deployed via GitHub Pages; `.github/workflows/link-check.yml` runs lychee on every push/PR and
  weekly to catch broken links
- `source-material/` holds raw drafts/notes, excluded from the deployed site

## Process

1. **Week 1 — Product & UX:** SDLC basics, roadmap and target-market analysis, kicked off the SEA
   mock product
2. **Week 2 — Engineering & QA:** exploratory testing charter, hands-on with Argos
3. **Week 3 — Professional Services:** Argos workshop, earned Argos Training Certificate
4. **Week 4 — Marketing:** buyer persona, case study, ad concepts, launch/webinar emails and
   social copy
5. **Week 5 — Support/DevOps/Cybersecurity:** phishing-awareness email, support org chart and SLA
   plan
6. **Week 6 — Finance & HR:** 30-60-90 day plan, AI-driven financial model, total-comp exercise
7. **Week 7 — Customer Success & Sales:** customer persona ("Amanda") tying feedback and sales
   thinking back into SEA

Alongside these, I attended Friday bonus courses (Philanthropy, Communications, Connections,
Business) and shadowed Marketing for three extra days. Everything fed into the capstone
presentation synthesizing all seven rotations.

## Outcome

The result is a complete, deployed multi-page site covering all seven rotations plus the mock
product, capstone, bonus courses, and shadow days, backed by the original PDFs and screenshots.
Building it gave me applied practice with front-end development (semantic HTML, a CSS design
system, accessible JS), technical/marketing writing, and shipping something end-to-end — SEO
metadata, asset organization, and CI to catch broken links. It demonstrates I can turn a messy,
cross-disciplinary set of deliverables into something coherent and maintainable.

## How to View Locally

No build step or dependencies required. Clone the repo and open `index.html` in a browser, or
serve it with `python3 -m http.server` and visit `http://localhost:8000/`.
