const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');
if (menuButton && menu) {
  const closeMenu = () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
}
