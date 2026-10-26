// Side drawer with every place's resume entries as a plain list.
// While it is open the globe stops spinning and turns to whichever place is being read.
function createDrawer(toggle, { i18n, globe, places, onOpen }) {
  const el = document.createElement('aside');
  el.id = 'drawer';
  el.hidden = true;
  el.setAttribute('aria-labelledby', 'drawer-title');
  el.innerHTML = `
    <div class="drawer-header">
      <h2 id="drawer-title"></h2>
      <button class="close" data-label-key="popover.close"><svg class="bi" aria-hidden="true"><use href="#bi-x-lg"/></svg></button>
    </div>
    <div class="drawer-body"></div>
  `;
  document.body.append(el);

  const title = el.querySelector('.drawer-header h2');
  const body = el.querySelector('.drawer-body');
  let current = null;

  function fill() {
    title.textContent = i18n.t('drawer.title');
    body.innerHTML = places
      .map((place) => `<section class="resume" data-place="${place.id}">${placeHtml(i18n, place)}</section>`)
      .join('');
  }

  function sectionOf(place) {
    return body.querySelector(`[data-place="${place.id}"]`);
  }

  function setCurrent(place) {
    if (place === current) return;
    current = place;
    body.querySelectorAll('section').forEach((section) => {
      section.classList.toggle('current', section.dataset.place === place.id);
    });
    globe.setActive(place);
    globe.focus(place);
  }

  // The place being read is the last one whose section starts above a reading line. The line moves with
  // the scroll, from the top of the drawer at the start of the list to its bottom at the end, so it
  // crosses every section once and each place gets its turn, whatever the section lengths and screen size
  function update() {
    const range = body.scrollHeight - body.clientHeight;
    const progress = range > 0 ? body.scrollTop / range : 0;
    const line = body.getBoundingClientRect().top + body.clientHeight * progress;
    const place = places.findLast((p) => sectionOf(p).getBoundingClientRect().top <= line) || places[0];
    setCurrent(place);
  }

  function open() {
    if (isOpen()) return;
    el.hidden = false;
    // Reading the size makes the browser lay out the closed position first, so the slide-in transition runs
    void el.offsetWidth;
    el.classList.add('open');
    document.body.classList.add('drawer-open');
    toggle.setAttribute('aria-expanded', true);
    globe.pauseSpin('drawer');
    onOpen();
    current = null;
    update();
    el.querySelector('.close').focus();
  }

  function close() {
    if (!isOpen()) return;
    el.classList.remove('open');
    document.body.classList.remove('drawer-open');
    toggle.setAttribute('aria-expanded', false);
    globe.setActive(null);
    globe.resumeSpin('drawer');
    current = null;
    toggle.focus();
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  // Scrolls the list to a place, e.g. when its marker is clicked while the drawer is open.
  // It stops where the reading line in update() is just inside the section's top, so that place becomes the current one;
  // the margin absorbs the browser rounding the scroll position, which the line magnifies on tall screens.
  function show(place) {
    const top = sectionOf(place).getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop + 8;
    const range = body.scrollHeight - body.clientHeight;
    body.scrollTo({ top: (top * range) / body.scrollHeight, behavior: 'smooth' });
  }

  el.addEventListener('transitionend', (event) => {
    if (event.target === el && !el.classList.contains('open')) el.hidden = true;
  });

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    if (isOpen()) close();
    else open();
  });

  el.querySelector('.close').addEventListener('click', close);
  body.addEventListener('scroll', update, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) close();
  });

  // Re-renders the list, e.g. after a language change
  function refresh() {
    fill();
    if (current) sectionOf(current).classList.add('current');
  }

  return { open, close, show, refresh, isOpen };
}
