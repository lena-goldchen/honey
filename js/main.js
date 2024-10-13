const mobileNav = document.querySelector('.mobile-nav');
const mobileBtn = document.querySelector('.mobile-nav-button');

mobileBtn.addEventListener('click', function () {
  mobileNav.classList.toggle('mobile-nav--active');
  document.body.classList.toggle('no-scroll');
  mobileBtn.classList.toggle('mobile-nav-button--active');

})
// mobileBtn.addEventListener('click', function () {
// })