(function($) {
	"use strict";
	$.fn.myKeyboardNavigatorPlugin = function(options) {

		let element = $.extend({
			selector: "img"
		}, options);

		let fcount = 0;
		let bcount = $(element.selector).length;

		$(document).keyup(function(e) {
			// let selectedElem = $(element.selector);
			let targetElem;
			let eslength = $(element.selector).length;


			if(e.which === 75) {
				console.log(event.which + "pressed");
				fcount++;
				console.log(`keypressed ${fcount} times`);
				targetElem = $(`${element.selector}:nth-of-type(${fcount})`);
				$("html, body").stop().animate({
					scrollTop: targetElem.offset().top
				}, 1000);
			} //end Forward

			if(e.which === 74) {
				console.log(event.which + "pressed");
				bcount--;
				targetElem = $(`${element.selector}:nth-of-type(${bcount})`);
				$("html, body").stop().animate({
					scrollTop: targetElem.offset().top
				}, 1000);

			} //end Backward

		}); //end keyup
	}; //end myKeyboardNavigatorPlugin

})(jQuery);
