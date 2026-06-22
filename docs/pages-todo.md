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

- [ ] **Terms of Service** — `terms/index.html` → footer link `footer_terms` (scaffold only)
- [ ] **Privacy Policy** — `privacy/index.html` → footer link `footer_privacy` (scaffold only)
- [ ] **Cookie Policy** — `cookies/index.html` → footer link `footer_cookie` (scaffold only)
- [ ] **Legal Notice / Impressum** — `legal-notice/index.html` → footer link `footer_notice` (scaffold only)

## 📄 Content pages
- [ ] **About us** — `about/index.html` → footer link `footer_about` (scaffold only)
- [ ] **Contact us** — `contact/index.html` → footer link `footer_contact` (scaffold only)
- [ ] **Blog** — `blog/index.html` → footer link `footer_blog` (scaffold only)
      (decide: single page, or index + individual posts?)

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
pages that render the FAQ.) Use `terms/index.html` as the template to copy.

## Notes
- Each footer link has a `data-i18n` key (e.g. `footer_terms`); remember to add
  the matching German translation in `assets/js/main.js` for any new copy.
- Match the folder-per-page pattern (`terms/index.html`) so URLs stay clean
  (`/terms`). When linking locally, point at `…/index.html` — opening a bare
  folder over `file://` shows a directory listing, not the page.
- Legal pages should be the priority — they're typically required before
  publishing an app/website live.
