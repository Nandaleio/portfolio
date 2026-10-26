// Wires the page together; the scripts loaded before this one only define things
const i18n = createI18n(translations);
const globeEl = document.getElementById('globe');

initThemeToggle(document.getElementById('theme-toggle'));
initLangMenu(document.querySelector('.lang-select'), i18n);

// The globe, popover and drawer refer to each other; the callbacks only run once globe.start() is called below.
// With the drawer open, clicking a marker scrolls the list to it instead of opening the popover.
const globe = createGlobe(globeEl, places, {
  onSelect: (place) => (drawer.isOpen() ? drawer.show(place) : popover.open(place)),
  onRender: () => popover.position(),
});
const popover = createPopover(globeEl, { i18n, globe });
const drawer = createDrawer(document.getElementById('list-toggle'), {
  i18n,
  globe,
  places,
  onOpen: () => popover.close(),
});

i18n.onChange(() => {
  globe.setLabels((place) => i18n.t(`places.${place.id}.city`));
  popover.refresh();
  drawer.refresh();
});

i18n.setLanguage(i18n.language);
globe.start();
