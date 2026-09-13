# Carter Ward | Evisions Internship Portfolio

**Live site:** https://csw04-exe.github.io/Evisions-Internship-Portfolio/

This is my personal portfolio site, and this README is written from my own perspective as the
person who built it and lived the internship it documents.

## 1. Purpose

This repository is the source for a static website I built to document and showcase my Summer
2026 internship at Evisions, a company that's spent over 25 years building software exclusively
for higher education (Argos, IntelliCheck, FormFusion, and more). Rather than summarizing the
internship in a paragraph on a resume, I wanted a real, navigable artifact: a site that walks
through my background, every week of the rotation, the two big projects that tied the summer
together, and an honest reflection on what I took away from it.

It exists for two overlapping reasons. First, it's a job-search and portfolio piece — something I
can point employers, recruiters, and connections to that shows both what I did at Evisions and
that I can plan, build, and ship a complete multi-page website on my own. Second, it's an
internship deliverable in its own right: the site itself, and everything documented on it, is
part of what I produced during the internship.

## 2. Problem and Approach

The problem was structural before it was technical: an internship like this doesn't produce one
deliverable, it produces dozens, spread across completely different disciplines. Over the
summer I rotated through Product & UX, Engineering & QA, Professional Services, Marketing,
Support/DevOps/Cybersecurity, Finance & HR, and Customer Success & Sales — seven departments in
seven weeks, each with its own artifacts (roadmaps, test charters, buyer personas, case studies,
ad creative, a phishing-awareness email, a support org chart and SLA targets, a 30-60-90 plan, a
financial model). On top of that there were four Friday "bonus" courses (Philanthropy,
Communications, Connections, Business), three extra shadow days with the Marketing team, a mock
product every rotation contributed to, and a capstone presentation synthesizing all of it. Dumped
into a folder, that's an unreadable pile of PDFs. The assignment I set for myself was to present
all of it as one cohesive, easily navigable site instead.

My approach was to design the site's information architecture around how a visitor would actually
want to explore it, not around the chronological order I produced things in:

- A **Home** page that orients a first-time visitor and points at the two throughline projects.
- An **About** page covering my background, education (B.S. in Computer Science, AI & Data Science
  concentration, University of Alabama in Huntsville), how I found the internship, and what
  Evisions does.
- A **Projects** section, its own sidebar-navigated sub-site, covering Department Weeks (all
  seven rotations), the Mock Product, the Capstone, the Bonus Courses, and Shadow Days.
- A **Reflection** page for the honest, retrospective take — challenges, insights from Evisions
  employees, and advice for anyone starting something similar.
- A **Resume & Contact** page with the resume itself (PDF, Word, and plain text) and ways to
  reach me.

I also added a small site-help modal (the "?" button in the nav, on every page) explaining
navigation and, importantly, clarifying that **SEA is a fictional product** and that any
screenshots come from Argos' standard training database — fictional data Evisions uses to teach
new users, not real students or institutions.

## 3. Structure and Methodologies

This is a deliberately plain, dependency-free static site: HTML, CSS, and vanilla JavaScript, no
frameworks, no build step, no npm install. Everything renders straight from the files in this
repo.

- **Pages** are hand-written HTML, one file per page, sharing the same header/nav, site-help
  modal, and footer markup. Every page carries its own `<title>`, meta description, Open Graph /
  Twitter card tags, and a `schema.org` Person JSON-LD block, plus a canonical URL — I wanted the
  site to hold up as a real, crawlable, shareable web page, not just a personal notebook.
- **`assets/css/style.css`** is the single stylesheet for the whole site (~875 lines), built
  around CSS custom properties: a blue/purple/teal/azure color palette, a spacing scale, a type
  scale set in Calibri (with system-font fallbacks), and consistent radius/shadow tokens. No
  Bootstrap, Tailwind, or Google Fonts — the whole look is hand-rolled and loads with zero
  external requests.
- **`assets/js/main.js`** is a small vanilla-JS file handling the mobile nav toggle, the
  accessible site-help modal (focus trap, Escape to close), a "back to top" button, scroll-reveal
  animations via `IntersectionObserver`, and click-to-copy on the email link. No jQuery, no
  external JS libraries.
- **`assets/documents/`** holds the actual deliverable PDFs, organized by project:
  `capstone/`, `mock-product/`, `resume/` (PDF, `.docx`, and `.txt`), and `weeks/` (every
  department week's artifacts, filenames prefixed by week — e.g.
  `week4-buyer-persona.pdf`, `week5-support-sla-measurements.pdf`,
  `week6-ai-financial-model.pdf`, `week7-amanda-persona.pdf`).
- **`assets/img/`** holds site imagery, split the same way: `about/` (grad photo, Birmingham
  skyline, UAH/Fintegrate/Evisions logos), `weeks/` (screenshots like
  `week2-argos-dashboard.png` and the Week 3 Argos training screenshots), `shadow-days/`
  (`wp-attempt.png`, from a WordPress/Divi practice build), plus root-level site-wide images
  (Open Graph cover, the SEA logo and brand-color swatch, my profile photo).
- **`projects/`** mirrors the Projects sidebar one-to-one: `index.html` and `weeks.html` as
  landing pages, `week-1.html` through `week-7.html`, `mock-product.html`, `capstone.html`,
  `bonus.html` plus the four individual bonus pages, and `shadow-days.html`.
- **Legacy redirect stubs** at the repo root (`week-1.html`–`week-7.html`,
  `mock-product.html`, `capstone.html`, `contact.html`, and the rest) exist only to forward old
  URLs — from when the Projects section lived at the root — into their new home under
  `projects/`. They're small, commented, and intentionally kept in place so old links don't
  break.
- **Deployment** is GitHub Pages, served from this repo (no custom domain / no `CNAME` file, so
  it's on the default `csw04-exe.github.io` domain). `.github/workflows/link-check.yml` runs
  [lychee](https://github.com/lycheeverse/lychee-action) on every push and pull request (plus a
  weekly schedule) to catch broken internal and external links across every HTML file.
- **`source-material/`** holds the raw notes, drafts, and planning docs I used while writing the
  site's content. It isn't part of the deployed site — see `source-material/README.md`.

## 4. Process

I built and populated this site in step with the internship itself, so the site's structure
follows the same order the work actually happened in:

1. **Week 1 — Product & UX.** Learned the software development life cycle and started the SEA
   mock product with a roadmap and a target-market analysis
   (`week1-roadmapping.pdf`, `week1-target-market.pdf`) — the concept every later rotation would
   build on.
2. **Week 2 — Engineering & QA.** Wrote an exploratory testing charter
   (`week2-exploratory-testing-charter.pdf`) and got hands-on with Argos, screenshotting the
   dashboard (`week2-argos-dashboard.png`) as part of learning test automation.
3. **Week 3 — Professional Services.** Sat in on an Argos workshop and earned the Argos Training
   Certificate, working through real report parameters and results (course schedule and address
   list screenshots in `assets/img/weeks/`).
4. **Week 4 — Marketing.** The heaviest single week for deliverables: a buyer persona, a full
   case study plus its email and social spin-offs, an industry blog post, two paid ad concepts,
   a product-launch email and social post, a user-group-conference piece, and a webinar email and
   social post — all under `assets/documents/weeks/week4-*.pdf`. This is also where I built out
   the marketing/content-driven side of the SEA mock product.
5. **Week 5 — Support, DevOps & Cybersecurity.** Wrote a phishing-awareness email
   (`week5-phishing-email.pdf`), and worked through a support org chart and SLA measurement plan
   (`week5-support-org-chart.pdf`, `week5-support-sla-measurements.pdf`) — the security and
   support rotation.
6. **Week 6 — Finance & HR.** Built a 30-60-90 day plan, an AI-driven financial model, and a
   total-compensation exercise (`week6-30-60-90-plan.pdf`, `week6-ai-financial-model.pdf`,
   `week6-total-comp.pdf`).
7. **Week 7 — Customer Success & Sales.** Closed out the department rotations with a customer
   persona, "Amanda" (`week7-amanda-persona.pdf`), tying feedback design and sales-technical
   thinking back into the same SEA product concept every prior week had touched.

Alongside the seven weeks, I sat in on the Friday bonus courses (Philanthropy, Communications,
Connections, Business) and, at the end, extended the internship three extra days to shadow the
Marketing team's Senior Developer and Analytics group — including a hands-on WordPress/Divi
practice build (`assets/img/shadow-days/wp-attempt.png`). Everything fed into the **capstone**:
the closing presentation that synthesizes every department into one narrative, from market
opportunity to a paying customer who renews (`assets/documents/capstone/Capstone-2026.pdf`).

Once the internship deliverables existed, building the site was its own process: I designed the
page structure and shared header/footer/modal markup first, then built out the shared stylesheet
and design tokens, then wrote each page's content against the actual PDFs and screenshots I'd
produced that week, converting or linking the original files rather than re-typing them from
scratch. I kept a `source-material/` folder of drafts and notes throughout so the site's copy
stayed traceable back to the real work. Legacy redirect stubs were added afterward, when I
reorganized the Projects section under `projects/`, specifically so any link someone had already
saved or shared wouldn't break.

## 5. Outcome

The result is a complete, deployed, multi-page portfolio site covering all seven weeks of the
internship across Product/UX, Engineering/QA, Professional Services, Marketing, Support/DevOps/
Cybersecurity, Finance/HR, and Customer Success/Sales — plus the mock product, the capstone, four
bonus courses, and three shadow days, all reachable through consistent navigation and backed by
the original PDFs and screenshots.

Building it gave me real, applied practice with front-end web development (semantic HTML,
CSS custom properties and a design system, accessible JS interaction patterns like a focus-trapped
modal), technical and marketing writing (case studies, personas, ad copy, a financial model, an
org chart), and the discipline of shipping something end-to-end — structuring content,
organizing assets, wiring up SEO and social metadata, and setting up CI to keep links from
rotting. It's a concrete demonstration that I can take a messy, cross-disciplinary set of
deliverables and turn it into something coherent, polished, and maintainable, which is exactly
the kind of connective work I want to keep doing.

The internship itself reinforced that. Rotating through seven departments in seven weeks showed
me how much infrastructure and coordination sits behind a product that looks simple from the
outside — from MAPS licensing and security behind Argos, to Support triaging issues like an
emergency room, to Finance keeping a budget picture consistent across teams. The SEA mock product
made that concrete instead of abstract, since every rotation added to the same dashboard idea
rather than a one-off exercise. And building the site to hold all of it taught me just as much:
that good documentation and good software are both about structure — deciding what belongs where,
so someone else (or future me) can actually find it.

## How to View / Run Locally

No build step or dependencies are required.

- Clone the repository, then open `index.html` directly in a browser, or
- Serve the folder with any static file server, e.g. `python3 -m http.server`, and visit
  `http://localhost:8000/`.
