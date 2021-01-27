// Scrollspy
var spy = new Gumshoe('nav a');
// Burger
    $('.burger').on('click', function (event) {
        $('.navigation-bar').slideToggle('200');
        $('.toggle-open').toggleClass('open');
        $('.toggle-close').toggleClass('close');
    })

// Sticky navbar
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});
});
// Scroll to TOP
var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 1500,
        reset: true
    });
    ScrollReveal().reveal('.col, .aboutus-img, .img-col', { origin: 'left' });
    ScrollReveal().reveal('.aboutus-content, .home-image', { origin: 'right' });
    ScrollReveal().reveal('.product-item, .brand-wrapper, .newsletter-wrapper', { interval: 100 });
   



