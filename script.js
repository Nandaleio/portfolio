// ICONS :
lucide.createIcons();

// THEME :
function changeTheme() {
    document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}


// TRANSLATIONS :


const translator = new EOTranslator(dict, 'en');
const languages = ['en', 'fr'];

function changeLanguage() {
    const index = languages.findIndex(p => p === translator.language);
    translator.language = languages[(index + 1) % languages.length];
    translator.translateDOM();
}


translator.translateDOM();



