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
				targetElem = $(element.selector + ":nth-of-type(" + fcount + ")");
				// targetElem = selectedElem.eq(fcount);
				if (fcount < eslength + 1) {
					$("html, body").stop().animate({
						scrollTop: targetElem.offset().top
					}, 1000);
				} else {
					fcount = 0;
				}
			} //end Forward

			if (e.which === 74) {
				console.log(event.which + "pressed");
				bcount--;
				console.log("keypressed " + bcount + " times");
				targetElem = $(element.selector + ":nth-of-type(" + bcount + ")");
				// targetElem = selectedElem.eq(bcount);
				if (bcount > 0) {
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