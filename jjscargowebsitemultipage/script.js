// Navigasi mobile, penanda menu aktif, dan tahun footer.
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
