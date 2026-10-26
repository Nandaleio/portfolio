// Switches between the light and dark palettes defined in style.css
function initThemeToggle(button) {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
