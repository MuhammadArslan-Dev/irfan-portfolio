# Dev House Solution — Professional App & Web Development Services

A static, production-ready marketing website for a software agency.  
**Stack:** Plain HTML, CSS, and JavaScript — no framework build step required.

> **What’s inside:** `helix-prime-main/` contains the site files (entry point: `index.html`). You can host this on any static host (Vercel, Netlify, GitHub Pages, cPanel, Nginx, Apache).

---

## Quick Start

### Option A — Just open the file

1. Download or clone the project.
2. Open **`helix-prime-main/index.html`** in your browser.

### Option B — Run a simple local server (recommended)

Using VS Code + Live Server, or any static server:

```bash
# using Node's http-server (install once)
npm i -g http-server

# then from the project root:
cd helix-prime-main
http-server -p 3000
# visit http://localhost:3000
```

---

## Project Structure

```
helix-prime-main/
├─ index.html          # Site entry point
├─ assets/             # Images, icons, media (if present)
├─ css/                # Stylesheets (if present)
├─ js/                 # Scripts (if present)
└─ ...                 # Other component/section files
```

> Your actual folders may differ slightly, but `index.html` is the main entry file the browser loads.

---

## Customize Branding

### 1) Browser tab icon (favicon)

The favicon shown in the browser tab is controlled by a `<link rel="icon">` tag inside `<head>` of your HTML.

- Ensure you have a **`/favicon.ico`** at the web root.
- In `index.html`, keep (or add) the line below inside `<head>`:

```html
<link rel="icon" href="/favicon.ico" />
```

Replace `/favicon.ico` with your own icon (ICO with 16/32/48px sizes). PNG/SVG can work too, but ICO ensures widest compatibility.

### 2) Site title & description

Open `helix-prime-main/index.html` and update:

```html
<title>Dev House Solution — Professional App & Web Development Services</title>
<meta
  name="description"
  content="Expert app & web development, e-commerce solutions, digital marketing, and custom software solutions. Transform your business with our global development team."
/>
```

Also check any OpenGraph/Twitter meta tags for consistent branding:

```html
<meta property="og:site_name" content="Dev House Solution" />
<meta
  property="og:title"
  content="Professional App & Web Development Services"
/>
<meta
  property="og:description"
  content="Expert app & web development, e-commerce solutions, digital marketing, and custom software solutions."
/>
<meta property="og:image" content="/assets/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Removing AI‑builder traces (already cleaned)

If this project originally came from an AI builder, double‑check these **do-once** steps (many have already been handled):

- Remove any `<meta name="generator" ...>` tags.
- Remove comments or text like “Made with …” / any builder mentions.
- Remove `<script>`/`<link>` URLs that point to builder domains.
- Remove any `data-*` attributes specific to the builder.
- Keep a local favicon (`/favicon.ico`) rather than external links.

> If you need a checklist with exact lines and files, see the companion report we generated during cleanup: `ai-trace-cleanup-report.md` (if provided alongside this README).

---

## Content Editing

- **Sections/Components:** Most content lives directly in `index.html` (headings, paragraphs, buttons, nav).
- **Images & logos:** Replace files in `assets/` (or your image folder) and update `<img src="...">` paths accordingly.
- **Styles:** Edit your CSS in `css/` (or embedded `<style>` blocks) to adjust colors, typography, and layout.
- **Scripts:** If there’s a `js/` folder, adjust interactive behavior there.

Pro tip: Keep class names semantic (e.g., `.hero`, `.features`, `.cta`) for easier maintenance.

---

## SEO & Performance Checklist

- Unique `<title>` and `<meta name="description">` on every page.
- OpenGraph & Twitter meta for social shares.
- Compressed images (WebP where possible).
- Add `alt` text for all meaningful images.
- Use a single main `<h1>` per page.
- Minify CSS/JS for production (optional for small sites).
- Add a `sitemap.xml` and `robots.txt` if you’re deploying to production.

---

## Deployment

Any static host will work. Here are common options:

### Vercel

- Create a new project → “Other” (static).
- Set **Root Directory** to `helix-prime-main`.
- Deploy.

### Netlify

- Drag & drop the `helix-prime-main` folder into Netlify, or connect your repo.
- Publish directory: `helix-prime-main`.

### GitHub Pages

- Put contents of `helix-prime-main` on the `gh-pages` branch (or use GitHub Pages from `/docs`).
- Ensure `index.html` is in the root of the served branch/folder.

---

## Maintenance

- Prefer local assets over external CDNs for long-term stability.
- Document any third-party widgets (analytics, chat) and keep keys private.
- Use version control (git) to track changes and enable quick rollbacks.

---

## Author

Built and customized by Shravan.  
If you need help extending this site (contact forms, blog, CMS, dashboards, API integration), feel free to reach out.
# devhousesolution-new
