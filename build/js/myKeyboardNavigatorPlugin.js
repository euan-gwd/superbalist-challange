"use strict";

(function ($) {
	"use strict";

	$.fn.myKeyboardNavigatorPlugin = function (options) {

		var element = $.extend({
			selector: "img"
		}, options);

		var fcount = 0;
		var bcount = $(element.selector).length;

		$(document).keyup(function (e) {
			var selectedElem = $(element.selector);
			var targetElem = void 0;
			var eslength = $(element.selector).length;

			if (e.which === 75) {
				console.log(event.which + "pressed");
				fcount++;
				console.log("keypressed " + fcount + " times");
				// if($(element.selector).length) {
				targetElem = $(element.selector + ":nth-of-type(" + fcount + ")");
				$("html, body").stop().animate({
					scrollTop: targetElem.offset().top
				}, 1000);
			} //end Forward

			if (e.which === 74) {
				console.log(event.which + "pressed");
				bcount--;
				targetElem = $(element.selector + ":nth-of-type(" + bcount + ")");
				$("html, body").stop().animate({
					scrollTop: targetElem.offset().top
				}, 1000);
			} //end Backward
		}); //end keyup
	}; //end myKeyboardNavigatorPlugin
})(jQuery);