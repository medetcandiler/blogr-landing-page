const hamburgerIcon =document.querySelector('.hamburger-icon');
const hamburgerClose = document.querySelector('.hamburger-close');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-munu');


hamburgerIcon.addEventListener('click', () => {
  hamburger.classList.toggle('d-none');
  hamburgerClose.classList.toggle('d-none');
  mobileMenu.classList.toggle('d-none')
})