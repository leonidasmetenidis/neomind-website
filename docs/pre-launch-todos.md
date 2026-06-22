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

- [ ] **Add a cookie consent banner.** Required before launch (GDPR / TTDSG)
  if the site sets any non-essential cookies or loads third-party scripts
  (analytics, embeds, store-redirect tracking, etc.). It must let visitors
  accept or reject non-essential cookies *before* those scripts run, and
  should link to the Cookie Policy (`cookies/index.html`) and Privacy Policy
  (`privacy/index.html`). Localize the banner copy EN + DE like the rest of
  the site.

## Notes

- The redirect page is marked `noindex` so search engines don't list it.
- `WEB_FALLBACK_URL` is set to `/` (homepage) for desktop / unknown devices.
