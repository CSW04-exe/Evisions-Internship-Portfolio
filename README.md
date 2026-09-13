# Carter Ward | Evisions Internship Portfolio

A static personal website documenting my Summer 2026 internship with [Evisions](https://www.evisions.com/), a company that has spent over 25 years building software exclusively for higher education (Argos, IntelliCheck, FormFusion) and now supports 900+ institutions. The site is live at:

**https://csw04-exe.github.io/Evisions-Internship-Portfolio/**

This README walks through the project in five parts: purpose, the problem and approach, the structure and technologies behind it, how the build actually went, and what I got out of it.

## 1. Purpose

The internship program itself required a capstone portfolio, but I wanted mine to do more than satisfy that requirement. My goal was to build something that could genuinely represent me to a future employer: a real, deployed website (not a slide deck or a Word doc) that shows I can plan an information architecture, write clearly about my own work, and ship a polished front end on my own.

Concretely, the site exists to:

- Document seven weeks of department rotations at Evisions (Product/UX through Customer Success & Sales), plus four bonus "Friday course" sessions and a set of shadow days with the Marketing team.
- Showcase the two throughline projects that tie the whole summer together: a fictional mock product (SEA, the Social Engagement Accelerator) that every rotation contributed to, and a closing capstone presentation.
- Give me a single, linkable artifact for my resume, LinkedIn, and job applications, backed by a real GitHub repository rather than a PDF.
- Serve as my own first solo front-end build, distinct from my day job as a QA tester and my earlier technical-writing internship, where I consumed and tested software rather than designed and shipped it.

## 2. Problem and Approach

**The problem** was mostly self-defined: Evisions' internship structure gave me a set of weekly deliverables (write-ups, decks, wireframes, PDFs) but no prescribed way to present them. Turning a summer's worth of disconnected assignments, PDFs, and PowerPoint decks into one coherent, navigable, non-generic-looking narrative was the actual challenge, on top of learning the departments themselves.

**My approach:**

1. **Plan the architecture before writing any content.** The `source-material/` folder in this repo still holds the original planning artifact, `Structure.pdf`, plus a folder of raw notes and deliverables organized by page (`About/`, `Home/`, `Reflection/`, `Resume/`, `Contact/`, and `Projects/` with sub-folders per department week and bonus course). I drafted the site's structure and per-page content as source material first, separately from the HTML, so the writing could be revised without touching markup.
2. **Design around one continuous narrative, not a list of assignments.** Rather than treating each week as an isolated write-up, I anchored everything to the SEA mock product: a fictional "Social Engagement Accelerator" dashboard that every department rotation added a layer to (Product defined the concept, Marketing built its brand, Engineering/Support shaped its constraints, Sales and Finance shaped how it would actually be sold and sustained). That gave the site a spine instead of seven disconnected folders.
3. **Build it as a real static site, not a template.** I hand-built the HTML/CSS/JS rather than using a portfolio builder or theme, specifically so the repository itself would demonstrate front-end skill, not just writing.
4. **Preserve URLs on top of a cleaner file layout.** Partway through, I moved the Projects section from the repo root into a `projects/` subfolder to match the site's own sidebar-navigated information architecture. Rather than break old links, I kept 18 "legacy redirect stub" files at their original root-level paths (`week-1.html`–`week-7.html`, `capstone.html`, `mock-product.html`, the four `bonus-*.html` pages, etc.), each one a minimal HTML page that meta-refreshes to its new home under `projects/` and sets a `<link rel="canonical">` back to the real page. This was a deliberate reuse-and-redirect approach instead of a destructive move.
5. **Automate what could break silently.** Because the site leans on a lot of internal cross-links (breadcrumbs, a Previous/Next pager between the seven week pages, a sidebar, redirect stubs, PDF downloads), I added a CI link checker so a typo or a moved file would fail a pull request instead of surfacing as a dead link after deployment.

## 3. Structure and Methodologies

**Core stack:** plain HTML, CSS, and JavaScript — no framework, no build tool, no package manager. This was a deliberate choice: the goal was a genuinely static, dependency-free site that's fast, easy to audit, and trivial to host.

- **`assets/css/style.css`** — a single stylesheet for the entire site (design tokens, layout, responsive rules, the modal, the sidebar, card/grid components used across dozens of pages).
- **`assets/js/main.js`** — a small script handling exactly two behaviors: the mobile navigation toggle and the "site help" modal (the "?" button in the top nav that explains site navigation and clarifies that SEA and the Argos screenshots are fictional/training data, not real Evisions customer data).
- **Structured data / SEO:** `schema.org` `Person` JSON-LD embedded on key pages, Open Graph and Twitter Card meta tags, a `robots.txt`, and a generated `sitemap.xml`.
- **Repository-as-information-architecture:** the file tree mirrors the site's navigation on purpose. Root-level HTML files are the five primary sections reachable from the top nav (Home, About, Projects, Reflection, Resume & Contact); everything reachable only through the Projects sidebar (department weeks, mock product, capstone, bonus courses, shadow days) lives under `projects/`.
- **Content/asset separation:** `assets/documents/` holds every PDF, Word doc, and plain-text deliverable actually referenced by the live site (resume in PDF/DOCX/TXT, the SEA wireframe PDF, the capstone deck as PDF, and per-week deliverable PDFs prefixed by week number), while `assets/img/` holds all images, again organized by the page that uses them (`img/about/`, `img/weeks/`, `img/shadow-days/`).
- **`source-material/`** — the raw, un-deployed inputs (original PDFs, the `.pptx` capstone deck, planning notes) kept alongside the finished site so the published content can be traced back to its source. It is explicitly excluded from what gets deployed.
- **CI/CD:**
  - GitHub Actions workflow (`.github/workflows/link-check.yml`) running [lychee](https://github.com/lycheeverse/lychee-action) against every `.html` file on every push and pull request to `main`, plus a weekly scheduled run, failing the build on any broken internal or external link (LinkedIn excluded, since it blocks automated checkers).
  - **GitHub Pages**, deploying automatically from `main` on every push — the simplest possible CD pipeline for a static site.
- **No external runtime dependencies:** everything ships as first-party code, so there's nothing to keep patched or update for security advisories.

## 4. Process

The build went roughly in this order:

1. **Scope and outline.** Before writing HTML, I worked out the site's structure and content in `source-material/`, mapped against `Structure.pdf`, an early outline of every page the site would need and how they'd connect.
2. **Root-level build.** I built the five primary pages first — Home, About, Reflection, Resume/Contact, and an initial flat Projects section — as plain HTML/CSS files at the repository root, styled from a single shared stylesheet and a shared top-nav/footer/help-modal pattern so every page felt consistent from the start.
3. **Fill in Projects content week by week.** As each department rotation finished during the internship, I added that week's page (summary, "what I worked on," linked PDF deliverables, a short reflection, and a tagged skills list), plus a Previous/Next pager so the seven weeks read in order. The two throughline projects — the SEA mock product and the capstone — were built the same way but with more custom sections (brand assets, an embedded wireframe/deck PDF preview).
4. **Restructure for scale.** Once the Projects section grew past a handful of flat files, I refactored it into its own `projects/` directory with a persistent sidebar and breadcrumbs, matching the site's real information architecture instead of leaving everything in the repo root. This is the point where the legacy redirect stubs were introduced, so the refactor wouldn't break any link I'd already shared or that a search engine had indexed.
5. **Add the finishing/production-readiness layer.** Toward the end I layered in the pieces that make a site feel finished rather than just "done": Open Graph/Twitter meta tags and a generated share image, JSON-LD structured data, `robots.txt`/`sitemap.xml`, a custom `404.html` (required for GitHub Pages), accessibility passes (skip links, `aria` attributes on the modal and nav), and the automated link-checking workflow to catch regressions going forward.
6. **Extend the scope mid-stream.** The internship itself grew while the site was being built: I picked up three extra shadow days with the Marketing team's Senior Developer and Analytics group partway through, and I documented that as its own page and its own `source-material/` folder rather than folding it into an existing week.
7. **Continuous polish.** The README in this repository documents intentional conventions (redirect stubs must stay at their exact paths, `source-material/` is not deployed, etc.), which reflects going back through the repo at least once to formalize rules that had accumulated informally during the build.

## 5. Outcome

**Measurable result:** a fully deployed, 25+ page static website with automated CI (link-checking on every push and weekly on a schedule) and zero build-time dependencies, live at csw04-exe.github.io/Evisions-Internship-Portfolio. It replaced what would otherwise have been a folder of loose PDFs and a slide deck with one coherent, navigable, professionally presented deliverable — and it did so while preserving every legacy URL through a mid-project directory restructure, with no dead links.

**Skills this demonstrates:**

- **Information architecture:** designing a file/URL structure that mirrors the site's navigation, and being willing to refactor it (root → `projects/`) once the content outgrew the original layout, without breaking anything already pointing at the old paths.
- **Front-end fundamentals without a crutch:** building a multi-page, responsive, accessible site in hand-written HTML/CSS/JS, including a reusable component system (cards, sidebars, breadcrumbs, a modal, a document pager) driven by one stylesheet.
- **Content strategy and technical writing:** turning seven weeks of disconnected internship assignments into one narrative organized around a single throughline product, and writing clearly about both the fictional product and my own reflections.
- **Production-mindedness:** treating a personal portfolio with the same care as a real product — CI for link integrity, SEO/social metadata, a 404 page, and accessibility considerations — rather than shipping a bare HTML file.
- **Backward compatibility under refactoring:** the redirect-stub pattern is a small but deliberate demonstration of not breaking existing links when the underlying structure changes, a habit that matters far beyond a portfolio site.

**What I learned:** the biggest lesson was that a portfolio is itself a product decision, not just a formatting exercise. Deciding to anchor every department's work to one continuous fictional product (SEA) made the site far more compelling than a flat list of assignments would have been, and it forced me to think about how the pieces of a large project connect rather than treating each deliverable in isolation. Restructuring the Projects section mid-build also reinforced a lesson that showed up elsewhere in the internship (in Engineering and Data Engineering rotations, where a lot of complexity lives behind something that looks simple from outside): it's worth designing for the shape content will eventually take, and it's worth doing the extra work to change direction cleanly instead of leaving broken paths behind.
