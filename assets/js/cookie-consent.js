// GDPR / TDDDG cookie consent.
//
// The banner markup is injected by assets/js/layout.js; this file drives it:
// it shows the banner on first visit (or after a policy change), records the
// visitor's choice, and keeps non-essential cookies switched off until they
// consent. Choices are stored in localStorage with a version and timestamp so
// we can prove and, when needed, re-request consent.
//
// Nothing tracking-related is loaded here yet. applyConsent() is the single
// place to wire up Google Analytics, Meta Pixel, TikTok, etc., gated by the
// category the visitor allowed. Until then, consent is recorded and honoured
// but no third-party scripts run.
(function () {
  'use strict';

  var STORAGE_KEY = 'neomind_cookie_consent';
  // Bump this when the cookies/tools change so visitors are asked again.
  var CONSENT_VERSION = 1;
  // Non-essential categories the visitor can toggle. "necessary" is implied
  // and always on, so it is not listed here.
  var CATEGORIES = ['analytics', 'advertising'];

  var banner = document.querySelector('.cookie-consent');
  if (!banner) return;

  var mainView = banner.querySelector('[data-cc-view="main"]');
  var prefsView = banner.querySelector('[data-cc-view="prefs"]');

  // ---- Storage --------------------------------------------------------------

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.version !== CONSENT_VERSION) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(categories) {
    var data = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories: { necessary: true },
    };
    CATEGORIES.forEach(function (c) { data.categories[c] = !!categories[c]; });

    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
    applyConsent(data.categories);
    return data;
  }

  // ---- Acting on consent ----------------------------------------------------
  //
  // Called on every page load with a stored choice, and whenever the visitor
  // saves a new one. Load consented third-party tools here; each block must
  // run only if the matching category is true. These tools are described in
  // the Cookie Policy (cookies/index.html, Section 5) and Privacy Policy.
  function applyConsent(categories) {
    if (categories.analytics) {
      // TODO: load analytics (e.g. Google Analytics, PostHog) here.
    }
    if (categories.advertising) {
      // TODO: load advertising/measurement (e.g. Meta Pixel, TikTok Pixel,
      // Pinterest Tag, Google Ads) here.
    }

    // Let any other script react to the current choice.
    try {
      document.dispatchEvent(new CustomEvent('neomind:consent', { detail: categories }));
    } catch (e) {}
  }

  // ---- Banner UI ------------------------------------------------------------

  function showView(name) {
    var customizing = name === 'prefs';
    mainView.hidden = customizing;
    prefsView.hidden = !customizing;
  }

  function openBanner(viewName) {
    showView(viewName || 'main');
    banner.hidden = false;
    // Force reflow so the entrance transition runs from the hidden state.
    void banner.offsetWidth;
    banner.classList.add('is-open');
    // Hide the QR widget and lock background scroll while the modal is up.
    document.body.classList.add('cc-banner-open');
    // Block Escape: the visitor must make a choice, they cannot dismiss it.
    document.addEventListener('keydown', blockEscape, true);
  }

  function blockEscape(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function closeBanner() {
    banner.classList.remove('is-open');
    document.body.classList.remove('cc-banner-open');
    document.removeEventListener('keydown', blockEscape, true);
    // Hide once, whichever comes first: the close transition ending, or a
    // fallback timer for when it never fires (e.g. reduced motion).
    var fallback;
    var done = function () {
      banner.hidden = true;
      clearTimeout(fallback);
      banner.removeEventListener('transitionend', done);
    };
    banner.addEventListener('transitionend', done);
    fallback = setTimeout(done, 300);
  }

  // Set the preference toggles from a { category: bool } map.
  function setToggles(map) {
    CATEGORIES.forEach(function (cat) {
      var input = banner.querySelector('[data-cc-category="' + cat + '"]');
      if (input) input.checked = !!(map && map[cat]);
    });
  }

  // Reflect the stored choice in the preference toggles when re-opening.
  function syncToggles() {
    var stored = readConsent();
    setToggles(stored && stored.categories);
  }

  function allCategories(value) {
    var result = {};
    CATEGORIES.forEach(function (c) { result[c] = value; });
    return result;
  }

  function selectedCategories() {
    var result = {};
    CATEGORIES.forEach(function (cat) {
      var input = banner.querySelector('[data-cc-category="' + cat + '"]');
      result[cat] = !!(input && input.checked);
    });
    return result;
  }

  // ---- Wiring ---------------------------------------------------------------

  banner.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cc-action]');
    if (!btn) return;

    switch (btn.dataset.ccAction) {
      case 'accept':
        writeConsent(allCategories(true));
        closeBanner();
        break;
      case 'reject':
        writeConsent(allCategories(false));
        closeBanner();
        break;
      case 'save':
        writeConsent(selectedCategories());
        closeBanner();
        break;
      case 'customize':
        // Reflect any saved choice; on a first visit non-essential categories
        // stay off (opt-in), as the GDPR requires.
        syncToggles();
        showView('prefs');
        break;
    }
  });

  // "Cookie settings" links (e.g. in the footer) re-open the preferences view
  // so visitors can change or withdraw consent at any time.
  document.addEventListener('click', function (e) {
    var opener = e.target.closest('[data-cc-open]');
    if (!opener) return;
    e.preventDefault();
    syncToggles();
    openBanner('prefs');
  });

  // Small public API for other scripts and for manual re-opening.
  window.NeomindConsent = {
    get: function () {
      var c = readConsent();
      return c ? c.categories : null;
    },
    has: function (category) {
      var c = readConsent();
      return !!(c && c.categories && c.categories[category]);
    },
    open: function () { syncToggles(); openBanner('prefs'); },
  };

  // ---- Init -----------------------------------------------------------------

  var existing = readConsent();
  if (existing) {
    // Returning visitor with a valid choice: honour it, stay hidden.
    applyConsent(existing.categories);
  } else {
    // First visit or expired consent: ask. Non-essential cookies stay off
    // until a choice is made.
    openBanner('main');
  }
})();
