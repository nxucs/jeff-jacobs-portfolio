# Jeff Jacobs — Portfolio Site

**Live on GitHub Pages** — NetSuite Architect & ERP Systems Consultant

---

## Site Structure

```
jeff-jacobs-portfolio/
├── index.html        ← Main page (all sections)
├── style.css         ← All styles, design tokens, responsive layout
├── script.js         ← Theme toggle, scroll animations, nav, accordion
├── assets/
│   └── Jeff-Jacobs-Resume.pdf   ← Your resume (add before deploying)
└── README.md
```

---

## Sections

| Section           | ID in HTML        | Purpose                                           |
|-------------------|-------------------|---------------------------------------------------|
| Hero              | `#hero`           | Headline, subheadline, CTA buttons, tag cloud     |
| About / Profile   | `#about`          | Summary, stats, compliance badges                 |
| Core Strengths    | `#expertise`      | 6 expertise category cards                        |
| Experience        | `#experience`     | Accordion timeline (Globalstar, NXU, Titan, Enseo)|
| Selected Wins     | `#impact`         | 6 outcome highlight cards                         |
| Consulting        | `#consulting`     | NXU Cloud Solutions feature section               |
| AI & Automation   | `#ai`             | AI enablement positioning                         |
| Tools & Modules   | `#tools`          | Full module and application tag grid              |
| Contact / CTA     | `#contact`        | Email, LinkedIn, resume download                  |

---

## Quick Edits

### Update your email or LinkedIn
Open `index.html` and search for `jeff.jacobs@mail.com` or `linkjeffin` — replace with your actual values.

### Add your resume PDF
Drop your resume into the `assets/` folder and name it `Jeff-Jacobs-Resume.pdf`.
The download button, nav, and footer will all pick it up automatically.

### Change the hero headline
Find the `<h1 class="hero-title">` tag near the top of `index.html`.

### Edit the accent color (teal)
Open `style.css`. Find `--color-accent: #2dcacb;` in the `:root {}` block and change it.
Also update `--color-accent` in the `[data-theme="light"]` block (currently `#0d8a8a`).

### Add or remove expertise cards
Find `<div class="expertise-grid">` in `index.html`. Each card is a `<div class="expertise-card">` block.

### Add or remove experience entries
Find `<div class="timeline">` in `index.html`. Copy/paste an existing `<div class="timeline-item">` block.

### Add a new win card
Find `<div class="impact-grid">` in `index.html`. Copy/paste an existing `<div class="win-card">` block.

---

## Publishing to GitHub Pages

### Option A: Username site (yourname.github.io)
1. Create a GitHub repo named exactly `USERNAME.github.io` (replace USERNAME with your GitHub username)
2. Push all files to the `main` branch
3. GitHub Pages will auto-publish at `https://USERNAME.github.io`

### Option B: Project page (any repo name)
1. Create any public GitHub repo (e.g., `portfolio` or `jeffjacobs-portfolio`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source** and select `main` branch, `/ (root)`
4. Your site will be at `https://USERNAME.github.io/REPONAME/`

### Deployment steps (terminal)
```bash
# Initialize and push
cd jeff-jacobs-portfolio
git init
git add .
git commit -m "Initial portfolio deploy"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in your repo settings.

### Custom Domain (optional)
1. Add a `CNAME` file in the root containing just your domain, e.g.: `jeffjacobs.com`
2. Configure DNS with your domain registrar to point to GitHub Pages
3. Enable custom domain in repo Settings → Pages

---

## Design System

- **Fonts:** Clash Display (headings) + Satoshi (body) — loaded from Fontshare CDN
- **Dark mode:** Default. Toggle in the nav header. Respects system preference.
- **Accent color:** Teal (`#2dcacb` dark / `#0d8a8a` light)
- **Breakpoints:** Desktop → Tablet (1024px) → Mobile (768px) → Small (480px)

---

## Content Sources

All content drawn from Jeff Jacobs' resume.
Selected wins with percentage/dollar metrics as stated by Jeff Jacobs.
No fabricated experience, certifications, tools, or case studies.
