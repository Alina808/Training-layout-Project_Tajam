$(document).ready(function () {
 $('.header_burger').on('click', function(e) {
    e.preventDefault() // отменаят стандартное повередие элемента к примеру a,button
  $('.header_burger, .header_menu').toggleClass('active');
 })
});