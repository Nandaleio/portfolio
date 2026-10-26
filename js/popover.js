// Resume popover shown next to the selected marker; the globe stops spinning while it is open
function createPopover(container, { i18n, globe }) {
  const gap = 10;
  const margin = 8;
  const el = document.createElement('div');
  el.id = 'popover';
  el.className = 'resume';
  el.hidden = true;
  container.append(el);

  let selected = null;

  function fill(place) {
    el.innerHTML = `
      <button class="close" aria-label="${i18n.t('popover.close')}"><svg class="bi" aria-hidden="true"><use href="#bi-x-lg"/></svg></button>
      ${placeHtml(i18n, place)}
    `;
    el.querySelector('.close').addEventListener('click', close);
  }

  // Keeps the popover next to its marker, above it when there is room, below otherwise
  function position() {
    if (!selected) return;
    if (!globe.isVisible(selected)) {
      el.hidden = true;
      return;
    }
    el.hidden = false;

    const marker = globe.markerRect(selected);
    const box = container.getBoundingClientRect();
    const x = marker.left + marker.width / 2 - box.left;
    const left = Math.min(Math.max(x - el.offsetWidth / 2, margin), box.width - el.offsetWidth - margin);
    const above = marker.top - box.top - el.offsetHeight - gap;
    const top = above >= 0 ? above : marker.bottom - box.top + gap;

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }

  function open(place) {
    selected = place;
    fill(place);
    globe.setActive(place);
    globe.pauseSpin('popover');
    position();
  }

  function close() {
    selected = null;
    el.hidden = true;
    globe.setActive(null);
    globe.resumeSpin('popover');
  }

  // Re-renders the open popover, e.g. after a language change
  function refresh() {
    if (!selected) return;
    fill(selected);
    position();
  }

  document.addEventListener('click', (event) => {
    if (selected && !el.contains(event.target)) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && selected) close();
  });

  return { open, close, refresh, position };
}
