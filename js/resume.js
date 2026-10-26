// Resume entries for one place, shared by the popover and the drawer.
// The base language gives the shape of each entry; every string is looked up in the current language.
function placeHtml(i18n, place) {
  const key = `places.${place.id}`;
  const entries = i18n.base.places[place.id].entries;
  return `
    <h2>${i18n.t(`${key}.city`)}</h2>
    ${entries.map((entry, i) => `
      <h3>${i18n.t(`${key}.entries.${i}.title`)}</h3>
      <p class="meta">${i18n.t(`${key}.entries.${i}.org`)} · ${i18n.t(`${key}.entries.${i}.dates`)}</p>
      <ul>${entry.points.map((_, j) => `<li>${i18n.t(`${key}.entries.${i}.points.${j}`)}</li>`).join('')}</ul>
    `).join('')}
  `;
}
