# Carter Ward | Evisions Internship Portfolio

Personal portfolio site built during my Summer 2026 internship with Evisions, showcasing project work and more.

## Live Site

https://csw04-exe.github.io/Evisions-Internship-Portfolio/

## Sections

- **Home** (`index.html`) - welcome message and overview
- **About** (`about.html`) - background, education, and skills
- **Projects** (`projects/`) - sidebar-navigated section covering:
  - Department Weeks - 7 weekly rotations (Product/UX through Customer Success Team/Sales)
  - Mock Product - the SEA dashboard concept
  - Capstone - closing presentation (not yet uploaded)
  - Bonus Courses - Philanthropy, Communications, Connections, Business
  - Shadow Days
- **Reflection** (`reflection.html`) - overall internship experience and takeaways
- **Resume & CV** (`resume.html`) - resume is live; CV not yet uploaded
- **Contact** (`contact.html`) - LinkedIn, GitHub, and email

Every page also has a **site help button** (the "?" in the top nav) that opens a popup with general
navigation help and a note on the fictional data used throughout the Projects section.

## Repository Structure

Top-level items, alphabetically:

| Item | What it is |
|---|---|
| `.github/` | CI: a GitHub Actions workflow that checks every internal and external link on every push |
| `404.html` | Custom "page not found" page (GitHub Pages requires this at the repo root) |
| `about.html` | About page |
| `assets/` | Stylesheet, script, images, and documents — see below |
| `contact.html` | Contact page |
| `index.html` | Home page |
| `projects/` | Every page reachable through the Projects sidebar — see below |
| `README.md` | This file |
| `reflection.html` | Reflection page |
| `resume.html` | Resume & CV page |
| `robots.txt`, `sitemap.xml` | SEO files for search engines |
| `source-material/` | Raw internship deliverables, notes, and planning docs used to write the site's content. Not part of the deployed site — see `source-material/README.md`. |
| *17 files:* `bonus-business.html`, `bonus-communications.html`, `bonus-connections.html`, `bonus-philanthropy.html`, `capstone.html`, `mock-product.html`, `projects-bonus.html`, `projects-weeks.html`, `projects.html`, `shadow-days.html`, `week-1.html`–`week-7.html` | **Legacy redirect stubs.** The Projects section used to live at the repo root; these tiny pages just forward old bookmarks and search-engine links to their current location under `projects/`. Each one must stay at its exact original path, or the old URL it exists to catch breaks. Safe to ignore otherwise — each file also has a comment at the top saying the same thing. |

### `assets/`

| Path | Contents |
|---|---|
| `css/style.css` | The entire site's stylesheet |
| `documents/mock-product/` | The SEA wireframe PDF |
| `documents/resume/` | The resume PDF |
| `documents/weeks/` | Deliverable PDFs from the department weeks, filenames prefixed by week (`week4-case-study.pdf`, etc.) |
| `img/about/` | Photos and logos used on the About page |
| `img/weeks/` | Screenshots used on the department week pages, filenames prefixed by week |
| `img/` (root files) | Site-wide images: OG share image, SEA brand assets, home page profile photo |
| `js/main.js` | Mobile nav toggle and the site help modal |

### `projects/`

| File | What it is |
|---|---|
| `bonus-business.html`, `bonus-communications.html`, `bonus-connections.html`, `bonus-philanthropy.html` | The four Friday bonus course pages |
| `bonus.html` | Bonus Courses overview |
| `capstone.html` | Capstone page |
| `index.html` | Projects overview (the section's landing page) |
| `mock-product.html` | Mock Product (SEA) page |
| `shadow-days.html` | Shadow Days page |
| `week-1.html` – `week-7.html` | The seven department week pages |
| `weeks.html` | Department Weeks overview |

Root-level pages are the six primary sections reachable from the top nav. Everything reachable only
through the Projects sidebar lives under `projects/` so the file tree matches the site's own
information architecture.

## Built With

- HTML, CSS, and JavaScript
- No frameworks or build tools required

## Running Locally

- Clone the repository
- Open `index.html` in a browser, or serve the folder with any static file server (e.g. `python3 -m http.server`)

## Deployment

- Hosted with GitHub Pages
- Deploys automatically from the main branch on every push
