// Wraps EOTranslator: picks the starting language, translates the page and tells listeners when it changes
const rtlLanguages = ['ar'];

function createI18n(dictionary, baseLanguage = 'en') {
  const languages = Object.keys(dictionary);
  const initial = languages.find((code) => navigator.language.startsWith(code)) || baseLanguage;
  const translator = new EOTranslator(dictionary, initial);
  const listeners = [];

  // A key missing in the current language falls back to the base language
  function t(key) {
    return translator.translate(key, { fallback: translator.translate(key, { lang: baseLanguage }) });
  }

  // The library only fills in text content, so aria-labels come from data-label-key
  function setLanguage(lang) {
    translator.language = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
    translator.translateDOM();
    document.querySelectorAll('[data-label-key]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.labelKey));
    });
    listeners.forEach((listener) => listener(lang));
  }

  return {
    t,
    setLanguage,
    onChange: (listener) => listeners.push(listener),
    get language() {
      return translator.language;
    },
    // The base language's text, used as the reference shape for nested content like resume entries
    base: dictionary[baseLanguage],
  };
}
