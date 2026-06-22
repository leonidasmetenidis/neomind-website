// Shared page chrome (header, footer, QR widget, download modal), defined once
// and injected into every page. Edit it here and all pages update — no more
// copy-pasting markup between index.html, terms/index.html, etc.
//
// Paths/links are resolved against BASE (the project root), worked out from
// this script's own URL, so the same markup works from the root (index.html)
// and from subfolders (terms/index.html), over file:// or a real server.
//
// This runs before main.js, so by the time main.js wires up behaviour and
// captures the English copy, all of this markup is already in the DOM.
(function () {
  var src = (document.currentScript && document.currentScript.src) || '';
  var BASE = src.replace(/assets\/js\/layout\.js(\?.*)?$/, '');

  var header =
    '<header class="header">' +
      '<a href="' + BASE + 'index.html" class="header__logo" aria-label="neomind home">' +
        '<img src="' + BASE + 'assets/icons/neomind_logo.svg" alt="neomind">' +
      '</a>' +
      '<div class="header__actions">' +
        '<div class="lang-switch">' +
          '<button class="lang-switch__toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Select language">' +
            '<span class="lang-switch__flag">🇺🇸</span>' +
            '<span class="lang-switch__label">EN</span>' +
            '<svg class="lang-switch__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</button>' +
          '<div class="lang-menu" role="menu">' +
            '<button class="lang-menu__item" type="button" role="menuitem" data-lang="de" data-flag="🇩🇪" data-label="DE">' +
              '<span class="lang-menu__flag">🇩🇪</span>' +
              '<span class="lang-menu__name">Deutsch</span>' +
              '<svg class="lang-menu__check" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</button>' +
            '<button class="lang-menu__item is-active" type="button" role="menuitem" data-lang="en" data-flag="🇺🇸" data-label="EN">' +
              '<span class="lang-menu__flag">🇺🇸</span>' +
              '<span class="lang-menu__name">English</span>' +
              '<svg class="lang-menu__check" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<button class="btn-try" type="button" data-i18n="btn_try">Try for free</button>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="footer">' +
      '<div class="footer__inner">' +
        '<div class="footer__brand">' +
          '<a href="' + BASE + 'index.html" class="footer__logo" aria-label="neomind home">' +
            '<img src="' + BASE + 'assets/icons/neomind_logo.svg" alt="neomind">' +
          '</a>' +
          '<div class="footer__socials">' +
            '<a href="#" class="footer__social" aria-label="TikTok">' +
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.0294 0.0200094C13.3487 7.59959e-08 14.6582 0.0104049 15.967 0C16.0105 1.62556 16.6746 3.08864 17.7311 4.17235L17.7295 4.17075C18.8667 5.18802 20.3463 5.84753 21.9774 5.95958L22 5.96118V9.99186C20.4591 9.95345 19.0101 9.60048 17.7037 8.9938L17.7698 9.02101C17.138 8.71927 16.6037 8.40953 16.096 8.06376L16.1379 8.09098C16.1282 11.0115 16.1475 13.9321 16.1177 16.8423C16.0347 18.3254 15.5383 19.678 14.7421 20.8073L14.7582 20.7825C13.4268 22.6762 11.2702 23.9192 8.81788 23.9928H8.80659C8.70747 23.9976 8.59061 24 8.47295 24C7.07874 24 5.7756 23.6142 4.66507 22.9443L4.69731 22.9627C2.67611 21.755 1.2819 19.6884 1.02401 17.2849L1.02079 17.2521C1.00064 16.7518 0.990967 16.2516 1.01111 15.7618C1.40601 11.9368 4.63283 8.97779 8.55515 8.97779C8.99598 8.97779 9.42795 9.01541 9.84782 9.08664L9.80269 9.08024C9.82284 10.5601 9.76239 12.0408 9.76239 13.5207C9.4215 13.3983 9.02822 13.327 8.61802 13.327C7.11259 13.327 5.83201 14.2827 5.35814 15.6169L5.35089 15.6409C5.24371 15.9827 5.18165 16.3756 5.18165 16.7822C5.18165 16.9471 5.19213 17.1104 5.21147 17.2705L5.20986 17.2513C5.47742 18.8888 6.89097 20.1246 8.59545 20.1246C8.64461 20.1246 8.69296 20.1238 8.74132 20.1214H8.73406C9.9131 20.0862 10.9366 19.4563 11.5152 18.5254L11.5233 18.511C11.7385 18.2133 11.8859 17.8531 11.9351 17.4617L11.9359 17.4505C12.0366 15.6601 11.9964 13.8801 12.006 12.0896C12.0157 8.05896 11.9964 4.03788 12.0262 0.0176083L12.0294 0.0200094Z" fill="currentColor"/></svg>' +
            '</a>' +
            '<a href="#" class="footer__social" aria-label="Instagram">' +
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4155 24C13.4982 24 9.34841 23.8505 6.58092 23.8505C1.40495 23.8505 0 20.7362 0 16.7764C0 12.8167 0.0763252 8.43708 0.0763252 6.936C0.0763252 2.48741 2.01272 0.0172541 6.81272 0.0172541C8.58799 0.0172541 15.265 0 17.5378 0C21.9053 0 24 1.83465 24 7.20631C24 8.53197 23.9039 11.0137 23.9039 17.8951C23.9039 22.2229 21.894 24 16.4155 24ZM12.0339 5.72536C3.88693 5.72536 3.49399 18.3379 12.1724 18.3379C20.0989 18.3379 20.1498 5.72536 12.0339 5.72536ZM19.3979 3.22645C17.0431 3.22645 16.93 6.85261 19.4403 6.85261C21.73 6.84686 21.747 3.22645 19.3979 3.22645Z" fill="currentColor"/></svg>' +
            '</a>' +
            '<a href="#" class="footer__social" aria-label="YouTube">' +
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.54463 16.0859V8.91652L15.8173 12.5016L9.54463 16.0859ZM23.4967 6.65967C23.2134 5.61365 22.4132 4.80481 21.3962 4.51859L21.3746 4.51376C18.8196 4.18733 15.8645 4.0008 12.8654 4.0008C12.5605 4.0008 12.2565 4.00241 11.9532 4.00643L11.9996 4.00563C11.7419 4.00241 11.4387 4 11.1338 4C8.1347 4 5.17801 4.18653 2.27573 4.54753L2.62301 4.51215C1.58517 4.80401 0.784983 5.61204 0.507318 6.63715L0.502517 6.65806C0.182443 8.35372 0 10.3051 0 12.299C0 12.3698 3.7346e-08 12.4405 0.000800224 12.5105V12.4992C0.000800224 12.5587 0 12.6294 0 12.7002C0 14.6941 0.183243 16.6447 0.532924 18.5365L0.502517 18.3403C0.785783 19.3864 1.58597 20.1952 2.60301 20.4814L2.62461 20.4862C5.17961 20.8127 8.1347 20.9992 11.1338 20.9992C11.4379 20.9992 11.7419 20.9976 12.046 20.9936L11.9996 20.9944C12.2573 20.9976 12.5613 21 12.8654 21C15.8653 21 18.8212 20.8135 21.7235 20.4525L21.3762 20.4878C22.4148 20.1968 23.215 19.388 23.4935 18.3628L23.4983 18.3419C23.8176 16.6463 24 14.6949 24 12.7018C24 12.6311 24 12.5603 23.9992 12.4904V12.5008C23.9992 12.4413 24 12.3706 24 12.2998C24 10.3059 23.8168 8.35533 23.4671 6.46349L23.4967 6.65967Z" fill="currentColor"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<nav class="footer__col" aria-label="Pages">' +
          '<h3 class="footer__heading" data-i18n="footer_pages">Pages</h3>' +
          '<a href="' + BASE + 'index.html" class="footer__link" data-i18n="footer_home">Home</a>' +
          '<a href="' + BASE + 'blog/index.html" class="footer__link" data-i18n="footer_blog">Blog</a>' +
          '<a href="' + BASE + 'help/index.html" class="footer__link" data-i18n="footer_help">Help</a>' +
          '<a href="' + BASE + 'about/index.html" class="footer__link" data-i18n="footer_about">About us</a>' +
        '</nav>' +
        '<nav class="footer__col" aria-label="Legal">' +
          '<h3 class="footer__heading" data-i18n="footer_legal">Legal</h3>' +
          '<a href="' + BASE + 'terms/index.html" class="footer__link" data-i18n="footer_terms">Terms of Service</a>' +
          '<a href="' + BASE + 'privacy/index.html" class="footer__link" data-i18n="footer_privacy">Privacy policy</a>' +
          '<a href="' + BASE + 'cookies/index.html" class="footer__link" data-i18n="footer_cookie">Cookie Policy</a>' +
          '<a href="' + BASE + 'legal-notice/index.html" class="footer__link" data-i18n="footer_notice">Legal Notice</a>' +
        '</nav>' +
        '<div class="footer__col">' +
          '<h3 class="footer__heading" data-i18n="footer_getapp">Get the app</h3>' +
          '<div class="footer__badges">' +
            '<a href="#" class="footer__badge" aria-label="Download on the App Store">' +
              '<img src="' + BASE + 'assets/images/appstore_badge.svg" alt="Download on the App Store">' +
            '</a>' +
            '<a href="#" class="footer__badge" aria-label="Get it on Google Play">' +
              '<img src="' + BASE + 'assets/images/googleplay_badge.svg" alt="Get it on Google Play">' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<p class="footer__copyright" data-i18n="footer_copyright">© Neomind. All rights reserved.</p>' +
    '</footer>';

  // The placeholder QR code shared by the modal and the corner widget.
  var qrSvg =
    '<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">' +
      '<rect width="25" height="25" fill="#ffffff"/>' +
      '<path fill="#111111" d="M1 1h7v7h-7zM3 3h3v3h-3z"/>' +
      '<path fill="#111111" d="M17 1h7v7h-7zM19 3h3v3h-3z"/>' +
      '<path fill="#111111" d="M1 17h7v7h-7zM3 19h3v3h-3z"/>' +
      '<path fill="#111111" d="M10 1h1v1h-1zM12 1h1v1h-1zM14 1h1v1h-1zM11 2h1v1h-1zM13 2h1v1h-1zM10 3h1v1h-1zM14 3h1v1h-1zM12 4h1v1h-1zM10 5h1v1h-1zM13 5h1v1h-1zM15 5h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM10 7h1v1h-1zM12 7h1v1h-1zM1 10h1v1h-1zM3 10h1v1h-1zM5 10h1v1h-1zM7 10h1v1h-1zM2 11h1v1h-1zM4 11h1v1h-1zM6 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM5 12h1v1h-1zM7 12h1v1h-1zM2 13h1v1h-1zM4 13h1v1h-1zM6 13h1v1h-1zM1 14h1v1h-1zM3 14h1v1h-1zM10 9h1v1h-1zM12 9h1v1h-1zM15 9h1v1h-1zM17 9h1v1h-1zM19 9h1v1h-1zM22 9h1v1h-1zM11 10h1v1h-1zM13 10h1v1h-1zM16 10h1v1h-1zM18 10h1v1h-1zM21 10h1v1h-1zM23 10h1v1h-1zM10 11h1v1h-1zM14 11h1v1h-1zM17 11h1v1h-1zM20 11h1v1h-1zM22 11h1v1h-1zM12 12h1v1h-1zM15 12h1v1h-1zM18 12h1v1h-1zM21 12h1v1h-1zM23 12h1v1h-1zM10 13h1v1h-1zM13 13h1v1h-1zM16 13h1v1h-1zM19 13h1v1h-1zM22 13h1v1h-1zM11 14h1v1h-1zM14 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM23 14h1v1h-1zM10 16h1v1h-1zM12 16h1v1h-1zM14 16h1v1h-1zM16 16h1v1h-1zM18 16h1v1h-1zM20 16h1v1h-1zM22 16h1v1h-1zM11 17h1v1h-1zM13 17h1v1h-1zM15 17h1v1h-1zM19 17h1v1h-1zM21 17h1v1h-1zM23 17h1v1h-1zM10 18h1v1h-1zM14 18h1v1h-1zM17 18h1v1h-1zM20 18h1v1h-1zM22 18h1v1h-1zM12 19h1v1h-1zM15 19h1v1h-1zM18 19h1v1h-1zM21 19h1v1h-1zM23 19h1v1h-1zM10 20h1v1h-1zM13 20h1v1h-1zM16 20h1v1h-1zM19 20h1v1h-1zM22 20h1v1h-1zM11 21h1v1h-1zM14 21h1v1h-1zM17 21h1v1h-1zM20 21h1v1h-1zM23 21h1v1h-1zM10 22h1v1h-1zM12 22h1v1h-1zM15 22h1v1h-1zM18 22h1v1h-1zM21 22h1v1h-1zM23 22h1v1h-1zM11 23h1v1h-1zM14 23h1v1h-1zM16 23h1v1h-1zM19 23h1v1h-1zM22 23h1v1h-1z"/>' +
    '</svg>';

  var modal =
    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="download-modal-title" hidden>' +
      '<div class="modal__dialog">' +
        '<button class="modal__close" type="button" aria-label="Close">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>' +
        '</button>' +
        '<h2 class="modal__title" id="download-modal-title" data-i18n="modal_headline">Download Neomind for free</h2>' +
        '<p class="modal__text" data-i18n="modal_scan">Open your phone\'s camera and scan the QR code to start:</p>' +
        '<div class="modal__code" role="img" aria-label="QR code placeholder">' + qrSvg + '</div>' +
        '<p class="modal__text modal__text--or" data-i18n="modal_or">Or get it from your app store:</p>' +
        '<div class="modal__badges">' +
          '<a href="#" class="hero__badge" aria-label="Download on the App Store">' +
            '<img src="' + BASE + 'assets/images/appstore_badge.svg" alt="Download on the App Store">' +
          '</a>' +
          '<a href="#" class="hero__badge" aria-label="Get it on Google Play">' +
            '<img src="' + BASE + 'assets/images/googleplay_badge.svg" alt="Get it on Google Play">' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  var qrWidget =
    '<aside class="qr-widget" aria-label="Scan to try Neomind">' +
      '<button class="qr-widget__close" type="button" aria-label="Dismiss">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>' +
      '</button>' +
      '<span class="qr-widget__eyebrow">' +
        '<img class="qr-widget__icon" src="' + BASE + 'assets/icons/neomind_splash.svg" alt="" aria-hidden="true">' +
        '<span data-i18n="qr_eyebrow">Try Neomind</span>' +
      '</span>' +
      '<div class="qr-widget__code" role="img" aria-label="QR code placeholder">' + qrSvg + '</div>' +
      '<p class="qr-widget__caption"><span data-i18n="qr_line1">Scan with your camera to get the app for free.</span></p>' +
    '</aside>';

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + modal + qrWidget);
})();
