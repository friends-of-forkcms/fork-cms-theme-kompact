$(document).ready(function() {

	// --------------------------------------------------
	// Check if browser JS is enabled
	// --------------------------------------------------
	$('html').removeClass('no-js').addClass('js');

	// --------------------------------------------------
	// If JS is enabled - run page transitions
	// --------------------------------------------------
	$(".js #container").animsition({
		inClass: 'fade-in-up-sm',
		outClass: 'fade-out-up-sm',
		inDuration: 400,
		outDuration: 400,
		linkElement: '.al',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'animsition-loading',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay : false,
		transition: function(url){ window.location.href = url; }
	}).one('animsition.inStart',function(){
		 kompactInit();
    });

}); // document.ready


function kompactInit() {
	// --------------------------------------------------
	// Hamburger on Mobile
	// --------------------------------------------------
	$('.hamburger-container').on('click', function() {
		if( $('.menu').hasClass('animate') ) {
			$('.menu, .bar').removeClass('animate');
		} else {
			$('.menu, .bar').addClass('animate');
		}
	});

	// --------------------------------------------------
	// Offcanvas Navigation
	// --------------------------------------------------
	$('.hamburger-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		$('html').toggleClass('nav-open');
	});
} // kompactInit
