# Pre-launch TODOs

Things that must be done before shipping the website live.

## 🔗 `/download` redirect link

The `/download` page (`download/index.html`) auto-detects the visitor's device
and redirects to the app store listing. The real store URLs are now set. Note
that both return 404 until the app listings are publicly live, so the redirect
tests below can only pass after launch.

Both store URLs now live in **one place** — `assets/js/config.js`. Editing
them there updates every badge across the site *and* the `/download` redirect.

- [x] **Replace the iOS App Store URL.**
  Set in `assets/js/config.js`: `https://apps.apple.com/app/id6816407448`

- [x] **Replace the Google Play URL.**
  Set in `assets/js/config.js`: `https://play.google.com/store/apps/details?id=com.getneomind.app`

The QR code shown in the download modal and corner widget (`assets/js/layout.js`)
is the **real, scannable code** encoding `https://getneomind.com/download`. It is
final and never needs changing. Standalone print versions (SVG + PNG) can be regenerated with segno if
needed for flyers/packaging.

- [ ] **Scan the on-screen QR with a real phone camera** and confirm it opens
  `getneomind.com/download` (verifies the code decodes *and* that the host
  serves `/download` without a `.html` extension, i.e. clean URLs work).
- [ ] **Test the redirect on a real iPhone** (opens the App Store app/listing).
- [ ] **Test the redirect on a real Android device** (opens the Play Store).
- [ ] **Test from inside the TikTok and Instagram in-app browsers** — these
  sometimes mishandle store links; confirm the redirect actually lands on the
  store and not a blank/error page.
- [ ] **Confirm desktop falls back to the homepage** (no app to open there).
- [ ] (Optional) Confirm UTM params pass through, e.g.
  `getneomind.com/download?utm_source=tiktok` carries through to the store URL.

## 🍪 Cookie consent banner

- [x] **Cookie consent banner built.** Lives in `assets/js/cookie-consent.js`
  (logic) + `assets/js/layout.js` (markup) + `.cookie-consent` styles in
  `styles.css`. Shows on first visit, offers Accept all / Reject all / Customize
  (per-category toggles for Analytics and Advertising, both off by default),
  stores the choice in `localStorage`, links to the Cookie & Privacy policies,
  and is localized EN + DE. A "Cookie settings" footer link re-opens it so
  visitors can change or withdraw consent. Bump `CONSENT_VERSION` to re-ask
  everyone after a material change.

- [ ] **Wire the actual tracking scripts into consent.** No third-party scripts
  load yet. When analytics/ads go live, add each one inside `applyConsent()` in
  `assets/js/cookie-consent.js`, gated by the matching category
  (`categories.analytics` / `categories.advertising`); see the `TODO` markers.
  This guarantees nothing fires before consent. Keep the tools listed in the
  Cookie Policy (`cookies/index.html`, Section 5) in sync with what you add.

- [ ] **Click-test the banner in a real browser** (not done yet; no browser
  tooling in the dev env): first visit shows it; Accept/Reject/Save each persist
  across reloads; the footer "Cookie settings" link re-opens it; EN/DE copy
  switches with the language selector; mobile layout looks right.

## 🔗 Social links in the footer

The footer social icons (`assets/js/layout.js`) link to the real profiles.

- [x] **Set the TikTok URL** (`https://www.tiktok.com/@getneomind`).
- [x] **Set the Instagram URL** (`https://www.instagram.com/getneomind`).
- [x] **Set the YouTube URL** (`https://www.youtube.com/@getneomind`).

## 🖼️ Image optimization (page load is slow)

The site currently loads slowly, mostly due to large, unoptimized image assets.
Reduce the total image payload before launch.

- [x] **Convert images to WebP.** All content images (hero, problem, feature
  cards, clouds CTA) converted from PNG/JPG to WebP. PNG favicon kept as-is.
- [x] **Compress** all images. Handled by the WebP conversion. Payloads are now
  small (hero 140K, feature/problem/clouds images 16–96K each).
- [ ] **Resize** images to the actual dimensions they render at. Don't ship
  full-resolution source files.
- [ ] **Serve responsive sizes** with `srcset`/`sizes` so mobile gets smaller
  files than desktop. Only the `problem` image currently uses a `<picture>`
  with a mobile source; the rest serve one size to all viewports.
- [x] **Lazy-load** below-the-fold images (`loading="lazy"`). Applied to all
  seven feature-card images.
- [ ] **Re-measure** load time afterward to confirm the improvement.

## 🔒 Enforce HTTPS

- [x] **Enable "Enforce HTTPS"** in the GitHub Pages settings
  (Settings → Pages). Done. The TLS certificate for the custom domain
  (`getneomind.com`) was provisioned and Enforce HTTPS is enabled, so all
  traffic is forced to HTTPS. Fix was removing a broken single AAAA record at
  checkdomain (GitHub needs all four IPv6 addresses or none), and setting
  `www` to a CNAME pointing to `leonidasmetenidis.github.io`.

## 🧑 Founder photo (About page)

- [x] **Add a real founder photo.** Done. `assets/images/founder.webp`
  (456x456) is shown on `story/index.html` as a small 96px circle
  (`.about__avatar`), matching the round photo atop the in-app founder letter.

## ✍️ Copy QA (EN + DE)

Proofread every page and section in **both languages** for typos, grammar,
awkward phrasing, untranslated strings, and copy that overflows or breaks the
layout. Toggle the language switcher and check each item in EN *and* DE.

Each item has two boxes: the first for **EN**, the second for **DE**.

### Home (`index.html`)
- [ ] EN [ ] DE — **Hero** — eyebrow, headline, subheadline, CTA button.
- [ ] EN [ ] DE — **Problem** — eyebrow, headline, body text.
- [ ] EN [ ] DE — **Features** — eyebrow, headline, all 7 feature cards (title + text).
- [ ] EN [ ] DE — **FAQ** — headline and every question/answer.
- [ ] EN [ ] DE — **CTA** — headline, subheadline, button.
- [ ] EN [ ] DE — **QR widget** — eyebrow and scan instructions.
- [ ] EN [ ] DE — **Download modal** — headline, scan text, store text.

### Content pages
- [ ] EN [ ] DE — **Our story** (`story/index.html`) — headline, photo caption, full story, sign-off, contact line.
- [ ] EN [ ] DE — **Contact** (`contact/index.html`) — headline, intro, email line.

### Legal pages
- [ ] EN [ ] DE — **Terms of Service** (`terms/index.html`) — headline + all sections.
- [ ] EN [ ] DE — **Privacy Policy** (`privacy/index.html`) — headline + all sections.
- [ ] EN [ ] DE — **Cookie Policy** (`cookies/index.html`) — headline + all sections.
- [ ] EN [ ] DE — **Legal Notice / Impressum** (`legal-notice/index.html`) — headline + all blocks.

### Shared chrome (every page)
- [ ] EN [ ] DE — **Header / nav** — language switcher and any nav labels.
- [ ] EN [ ] DE — **Footer** — column headings and every link label (Pages, Legal, social).
- [ ] EN [ ] DE — **Cookie consent banner** — message, buttons, category labels, links.

## Notes

- The redirect page is marked `noindex` so search engines don't list it.
- `WEB_FALLBACK_URL` is set to `/` (homepage) for desktop / unknown devices.
