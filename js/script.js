/*jslint browser: true*/
/*global $*/
$(function () {
	'use strict';
	bsCustomFileInput.init();
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	// ------------- toggle-menu
	$('.toggle-menu').on('click', function (){
		$('.nav-menu').toggleClass('open');
	});

	// owl carousal
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		items:1,
		autoplayTimeout: 5000,
		dots:false,
		nav:false,
		smartSpeed:1200
	})
});