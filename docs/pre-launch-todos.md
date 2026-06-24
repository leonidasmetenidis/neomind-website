# Pre-launch TODOs

Things that must be done before shipping the website live.

## 🔗 `/download` redirect link

The `/download` page (`download/index.html`) auto-detects the visitor's device
and redirects to the app store listing. It currently uses **placeholder** store
URLs that must be replaced with the real ones.

Both store URLs now live in **one place** — `assets/js/config.js`. Editing
them there updates every badge across the site *and* the `/download` redirect.

- [ ] **Replace the iOS App Store URL.**
  In `assets/js/config.js`, set `appStore` to the real listing.
  Currently: `https://apps.apple.com/app/idXXXXXXXXXX`
  Format: `https://apps.apple.com/app/id<APP_ID>` (the numeric App Store ID).

- [ ] **Replace the Google Play URL.**
  In `assets/js/config.js`, set `playStore` to the real listing.
  Currently: `https://play.google.com/store/apps/details?id=com.neomind.PLACEHOLDER`
  Format: `https://play.google.com/store/apps/details?id=<ANDROID_PACKAGE_NAME>`

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

The footer social icons currently point to `href="#"` placeholders
(`assets/js/layout.js`). Replace each with the real profile URL.

- [ ] **Set the TikTok URL** on the footer TikTok link.
- [ ] **Set the Instagram URL** on the footer Instagram link.
- [ ] **Set the YouTube URL** on the footer YouTube link.

## 🖼️ Image optimization (page load is slow)

The site currently loads slowly, mostly due to large, unoptimized image assets.
Reduce the total image payload before launch.

- [ ] **Convert images to WebP** (keep fallbacks where needed for older browsers).
- [ ] **Compress** all images (strip metadata, tune quality).
- [ ] **Resize** images to the actual dimensions they render at. Don't ship
  full-resolution source files.
- [ ] **Serve responsive sizes** with `srcset`/`sizes` so mobile gets smaller
  files than desktop.
- [ ] **Lazy-load** below-the-fold images (`loading="lazy"`).
- [ ] **Re-measure** load time afterward to confirm the improvement.

## Notes

- The redirect page is marked `noindex` so search engines don't list it.
- `WEB_FALLBACK_URL` is set to `/` (homepage) for desktop / unknown devices.
