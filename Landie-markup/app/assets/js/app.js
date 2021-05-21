// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.hamburger--slider').classList.toggle('is-active');
  document.querySelector('.menu__list').classList.toggle('is-active');
  document.querySelector("html").classList.toggle('hidden');
})

})
