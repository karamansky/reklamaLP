"use strict";

$(function(){

	$(document).ready(function(){

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

	});
});