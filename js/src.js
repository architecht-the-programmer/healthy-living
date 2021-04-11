$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel(
    {
      indicators: true
    });
  //slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 480,
    transition: 500,
    interval: 3000
  });

});




