"use strict";

$(function(){

	$(document).ready(function(){

	//плавающий header
		var header = new Headhesive('header', {
				offset: 500,
				classes: {
					clone: 'headhesive',
					stick: 'headhesive--stick',
					unstick: 'headhesive--unstick'
				}
		});

	//portfolio gallery
		$('#container').mixItUp({
			animation: {
				enable: true,
				effects: 'fade scale',
				duration: 600,
				easing: 'ease',
				perspectiveDistance: '3000px',
				perspectiveOrigin: '50% 50%',
				queue: true,
				queueLimit: 1,
				animateChangeLayout: false,
				animateResizeContainer: true,
				animateResizeTargets: false,
				staggerSequence: null,
				reverseOut: false
			},
			controls: {
				activeClass: 'active'
			}
		});

	//owl-carousel
		$('.owl-carousel').owlCarousel({
			items 						: 5,
			itemsDesktop 			: [1199,5],
			itemsDesktopSmall : [980,3],
			itemsTablet				: [768,2],
			itemsMobile 			: [479,1],
			singleItem 				: false,
			itemClass					: ".item-owl",
			responsive				: true,
			autoPlay					: true
		});


	});
});