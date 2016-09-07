(function($) {
	"use strict";
	$.fn.myKeyboardNavigatorPlugin = function(options) {

		let element = $.extend({
			selector: "img"
		}, options);

		$(document).keyup(function(e) {
			let selectedElem = $(element.selector);
			let targetElem;

			if(e.which === 75) {
				console.log(event.which + "pressed");
				if(selectedElem.next(element.selector).length) {
					targetElem = selectedElem.next(element.selector);
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				} else {
					targetElem = $(element.selector + ":first");
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				}
			} else if(e.which === 74) {
				console.log(event.which + "pressed");
				if(selectedElem.prev(element.selector).length) {
					targetElem = selectedElem.prev(element.selector);
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				} else {
					targetElem = $(element.selector + ":last");
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				}
			} //end Forward

		}); //end keyup
	}; //end myKeyboardNavigatorPlugin

})(jQuery);
