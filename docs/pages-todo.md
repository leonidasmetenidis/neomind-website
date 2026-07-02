# Pages to build

Tracks the site pages still to be coded. The footer links to all of these,
but they currently point to `#` — wire each `href` up as the page lands.

## ✅ Already built
- [x] **Home** — `index.html`
- [x] **/download redirect** — `download/index.html` (device-detecting store redirect)

## 📄 Legal (highest priority — needed before launch)
Every page below has a scaffold (shared chrome + headline) and a wired-up
footer link, but is still **empty** — the actual body copy is unwritten.
Leave the box unchecked until the real content lands.

- [x] **Terms of Service** — `terms/index.html` → footer link `footer_terms` (content written, EN + DE; rendered from `assets/js/legal-data.js`)
- [x] **Privacy Policy** — `privacy/index.html` → footer link `footer_privacy` (content written, EN + DE; rendered from `assets/js/legal-data.js`)
- [ ] **Cookie Policy** — `cookies/index.html` → footer link `footer_cookie` (scaffold only)
- [x] **Legal Notice / Impressum** — `legal-notice/index.html` → footer link `footer_notice` (content written, EN + DE)

## 📄 Content pages
- [x] **Our story** — `story/index.html` → footer link `footer_about` (founder story "Why this app exists", EN + DE; photo placeholder pending real image)
- [x] **Contact us** — `contact/index.html` → footer link `footer_contact` (intro + mailto email, EN + DE)

## How to add a new page
The shared chrome (header, footer, download modal, QR widget) lives in
`assets/js/layout.js` and is injected into every page — **never copy-paste it.**
A new page only needs its own `<head>`, its own content, and these scripts:

```html
<script src="../assets/js/layout.js"></script>
<script src="../assets/js/config.js"></script>
<script src="../assets/js/main.js"></script>
```

(`config.js` = store links, `main.js` = behaviour. Add `faq-data.js` only on
pages that render the FAQ; add `legal-data.js` only on the legal pages that
render a long document — Terms and Privacy.) Use `terms/index.html` as the
template to copy.

The Terms and Privacy bodies are **not** hand-written in the HTML: the page
holds only the headline plus an empty `<div class="legal__doc" data-legal="…">`,
and `renderLegal()` in `main.js` fills it from `assets/js/legal-data.js` in the
active language (EN read from the data file's `en` entries, DE from `de`).

## Notes
- Each footer link has a `data-i18n` key (e.g. `footer_terms`); remember to add
  the matching German translation in `assets/js/main.js` for any new copy.
- Match the folder-per-page pattern (`terms/index.html`) so URLs stay clean
  (`/terms`). When linking locally, point at `…/index.html` — opening a bare
  folder over `file://` shows a directory listing, not the page.
- Legal pages should be the priority — they're typically required before
  publishing an app/website live.
