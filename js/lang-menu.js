// Language dropdown: a button showing the current flag and a listbox of languages
function initLangMenu(root, i18n) {
  const button = root.querySelector('.lang-button');
  const menu = root.querySelector('.lang-menu');
  const options = [...menu.querySelectorAll('[role="option"]')];

  function open() {
    menu.hidden = false;
    button.setAttribute('aria-expanded', true);
    (options.find((option) => option.getAttribute('aria-selected') === 'true') || options[0]).focus();
  }

  function close(restoreFocus = true) {
    if (menu.hidden) return;
    menu.hidden = true;
    button.setAttribute('aria-expanded', false);
    if (restoreFocus) button.focus();
  }

  function choose(option) {
    i18n.setLanguage(option.dataset.lang);
    close();
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (menu.hidden) open();
    else close();
  });

  options.forEach((option, i) => {
    option.addEventListener('click', (event) => {
      event.stopPropagation();
      choose(option);
    });
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        choose(option);
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const step = event.key === 'ArrowDown' ? 1 : -1;
        options[(i + step + options.length) % options.length].focus();
      } else if (event.key === 'Escape' || event.key === 'Tab') {
        close();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) close(false);
  });

  // The button shows the same flag-icons class as the chosen option
  i18n.onChange((lang) => {
    options.forEach((option) => {
      const isCurrent = option.dataset.lang === lang;
      option.setAttribute('aria-selected', isCurrent);
      if (isCurrent) button.querySelector('.flag').className = option.querySelector('.flag').className;
    });
  });
}
