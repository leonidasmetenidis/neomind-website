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

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    switcher.classList.contains('is-open') ? close() : open();
  });

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      items.forEach((i) => i.classList.remove('is-active'));
      item.classList.add('is-active');
      flag.textContent = item.dataset.flag;
      label.textContent = item.dataset.label;
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
})();
