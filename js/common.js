"use strict";

$(function(){

	$(document).ready(function(){

	//плавающий header
		var header = new Headhesive('header', {
				offset			: 500,
				classes: {
					clone			: 'headhesive',
					stick			: 'headhesive--stick',
					unstick		: 'headhesive--unstick'
				}
		});

	//navigation scroll to

		$(".navigation").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1000 мс
			$('body,html').animate({scrollTop: top}, 1000);
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
			itemsTablet				: [768,3],
			itemsMobile 			: [450,1],
			singleItem 				: false,
			itemClass					: ".item-owl",
			responsive				: true,
			autoPlay					: true
		});

	//popup form
		$('.popup').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
			modal: true,
			fixedBgPos: true,
			mainClass: 'my-mfp-slide-bottom'
		});
		$('.img-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			image: {
				verticalFit: true
			}
		});
		$(document).on('click', '.close', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});




	});
});