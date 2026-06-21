# Pre-launch TODOs

Things that must be done before shipping the website live.

## 🔗 `/download` redirect link

The `/download` page (`download/index.html`) auto-detects the visitor's device
and redirects to the app store listing. It currently uses **placeholder** store
URLs that must be replaced with the real ones.

- [ ] **Replace the iOS App Store URL.**
  In `download/index.html`, set `APP_STORE_URL` to the real listing.
  Currently: `https://apps.apple.com/app/idXXXXXXXXXX`
  Format: `https://apps.apple.com/app/id<APP_ID>` (the numeric App Store ID).

- [ ] **Replace the Google Play URL.**
  In `download/index.html`, set `PLAY_STORE_URL` to the real listing.
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

## Notes

- The redirect page is marked `noindex` so search engines don't list it.
- `WEB_FALLBACK_URL` is set to `/` (homepage) for desktop / unknown devices.
