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

```
.
├── index.html, about.html, reflection.html, resume.html, contact.html
├── projects/              # everything under the Projects section
│   ├── index.html         # Projects overview
│   ├── weeks.html         # Department Weeks overview
│   ├── week-1.html … week-7.html
│   ├── bonus.html         # Bonus Courses overview
│   ├── bonus-business.html, bonus-communications.html, bonus-connections.html, bonus-philanthropy.html
│   ├── mock-product.html
│   ├── capstone.html
│   └── shadow-days.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── img/                # site images, including Week 3 & SEA brand screenshots
│   └── documents/          # resume PDF, SEA wireframe PDF
├── source-material/        # raw internship deliverables and planning docs (not part of the live site)
└── README.md
```

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
