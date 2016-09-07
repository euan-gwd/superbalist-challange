(function($) {
	"use strict";
	$.fn.myKeyboardNavigatorPlugin = function(options) {

		let element = $.extend({
			selector: "img"
		}, options);

		let fcount = 0;
		let bcount = $(element.selector).length;

		$(document).keyup(function(e) {
			let targetElem;
			let eslength = $(element.selector).length;


			if(e.which === 75) {
				console.log(event.which + "pressed");
				fcount++;
				console.log(`keypressed ${fcount} times`);
				targetElem = $(`${element.selector}:nth-of-type(${fcount})`);
				if(fcount < eslength + 1) {
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				} else {
					fcount = 0;
				}
			} //end Forward

			if(e.which === 74) {
				console.log(event.which + "pressed");
				bcount--;
				console.log(`keypressed ${bcount} times`);
				targetElem = $(`${element.selector}:nth-of-type(${bcount})`);
				if(bcount > 0) {
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				} else {
					bcount = eslength + 1;
				}
			} //end Backward

		}); //end keyup
	}; //end myKeyboardNavigatorPlugin

})(jQuery);
