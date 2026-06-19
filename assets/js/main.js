// German translations. English is read from the page itself, so it never
// drifts out of sync with the markup.
const translations = {
  de: {
    _title: 'Neomind · KI-gestützte Mindset-App',
    hero_eyebrow: 'KI-gestützte Anwendung',
    hero_headline: 'Entwickle ein Mindset,<br>das dein Leben verändert.',
    hero_subheadline: 'Neomind verbindet Affirmationen und Visualisierung mit intelligenter KI für dein Mindset. Entwickelt, um dir zu helfen, größer zu denken, dich besser zu fühlen und genau das Leben zu führen, das du dir wünschst.',
    problem_headline: 'Die meisten von uns leben mit Gedanken, die wir nie bewusst gewählt haben.',
    problem_text: 'Ob alte Zweifel oder die Erwartungen anderer, manche Gedankenschleifen lassen uns einfach nicht los. Neomind hilft dir, diesen Lärm täglich zu durchbrechen und Platz für deine ganz eigene Stimme zu machen.',
    features_headline: 'Alles, was du brauchst, um deine innere Welt zu verändern.',
    feature_1_title: '10.000+ Affirmationen<br>sofort einsatzbereit',
    feature_1_text: 'Eine wachsende Bibliothek rund um mentale Gesundheit, persönliches Wachstum, Liebe, Gesundheit, Fülle und mehr. Einfach swipen und aufnehmen.',
    feature_2_title: 'Erstelle eigene<br>Affirmationen mit KI',
    feature_2_text: 'Generiere personalisierte Affirmationen in Sekunden, indem du dein Ziel oder Problem beschreibst.',
    feature_3_title: 'Immersive<br>Visualisierungs-Slides',
    feature_3_text: 'Verwandle Ziele in lebendige visuelle Reisen, die Fokus und Überzeugung stärken.',
    feature_4_title: 'Tägliche Erinnerungen,<br>die dein Mindset ausrichten',
    feature_4_text: 'Lass dich von Neomind erinnern, damit du nie aus den Augen verlierst, wer du werden willst.',
    feature_5_title: 'Widgets, die dich<br>den ganzen Tag inspirieren',
    feature_5_text: 'Mach dein Handy zu einem Werkzeug für Wachstum, nicht nur zur Ablenkung.',
    feature_6_title: 'Nimm Affirmationen<br>mit deiner eigenen Stimme auf.',
    feature_6_text: 'Deine eigene Stimme trägt eine Überzeugung, die niemand sonst nachahmen kann.',
    cta_headline: 'Nur ein Gedanke trennt dich von einem neuen Leben.',
    cta_subheadline: 'Starte noch heute deine kostenlose Testphase und entdecke die Version von dir, die auf dich gewartet hat.',
    btn_try: 'Kostenlos testen',
    footer_pages: 'Seiten',
    footer_home: 'Startseite',
    footer_blog: 'Blog',
    footer_help: 'Hilfe',
    footer_about: 'Über uns',
    footer_legal: 'Rechtliches',
    footer_terms: 'Nutzungsbedingungen',
    footer_privacy: 'Datenschutzerklärung',
    footer_cookie: 'Cookie-Richtlinie',
    footer_notice: 'Impressum',
    footer_getapp: 'App holen',
    footer_copyright: '© Neomind. Alle Rechte vorbehalten.',
  },
};

// Capture the original English content straight from the DOM.
const english = { _title: document.title };
document.querySelectorAll('[data-i18n]').forEach(function (el) {
  english[el.dataset.i18n] = el.innerHTML;
});

function applyLanguage(lang) {
  const dict = lang === 'en' ? english : Object.assign({}, english, translations[lang]);

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // Swap language-specific images (e.g. assets/images/<lang>/hero.png).
  document.querySelectorAll('[data-i18n-img]').forEach(function (el) {
    el.src = el.src.replace(/assets\/images\/[a-z]{2}\//, 'assets/images/' + lang + '/');
  });

  if (dict._title) document.title = dict._title;
  document.documentElement.lang = lang;
}

// Language switcher dropdown
(function () {
  const switcher = document.querySelector('.lang-switch');
  if (!switcher) return;

  const toggle = switcher.querySelector('.lang-switch__toggle');
  const flag = switcher.querySelector('.lang-switch__flag');
  const label = switcher.querySelector('.lang-switch__label');
  const items = switcher.querySelectorAll('.lang-menu__item');

  function open() {
    switcher.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    switcher.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function selectLang(lang, updateUrl) {
    items.forEach(function (i) {
      const active = i.dataset.lang === lang;
      i.classList.toggle('is-active', active);
      if (active) {
        flag.textContent = i.dataset.flag;
        label.textContent = i.dataset.label;
      }
    });
    applyLanguage(lang);
    try { localStorage.setItem('lang', lang); } catch (e) {}

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      // Browsers block URL rewriting on file:// pages, so guard against it.
      try { history.replaceState(null, '', url); } catch (e) {}
    }
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    switcher.classList.contains('is-open') ? close() : open();
  });

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      selectLang(item.dataset.lang, true);
      close();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!switcher.contains(e.target)) close();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // Pick the initial language: ?lang= in the URL wins, then the saved choice.
  const supported = Array.from(items).map(function (i) { return i.dataset.lang; });
  const urlLang = new URL(window.location.href).searchParams.get('lang');
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}

  const initial = supported.indexOf(urlLang) !== -1 ? urlLang
    : supported.indexOf(saved) !== -1 ? saved
    : 'en';
  // Sync the URL on load so it always reflects the active language.
  selectLang(initial, true);
})();

// FAQ accordion — clicking a question opens it and closes the others.
(function () {
  const items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  items.forEach(function (item) {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', function () {
      const willOpen = !item.classList.contains('is-open');
      items.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
