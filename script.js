const open_btn = document.querySelector('.open');
const navbar = document.querySelector('.mobile__nav');

open_btn.addEventListener('click', () => {
  navbar.classList.toggle('open');
});
