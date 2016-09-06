(function($) {
	"use strict";
	$.fn.myKeyboardNavigatorPlugin = function(options) {

		let element = $.extend({selector: "img"}, options);

		$(document).keyup(function(e) {
			let $selectedElem = $(element.selector + ".selected"),
				$targetElem;

			if (e.which === 75) {
				if ($selectedElem.next(element.selector).length) {
					$targetElem = $selectedElem.next(element.selector);
				} else {
					$targetElem = $(element.selector + ":first");
				}
			} else if (e.which === 74) {
				if ($selectedElem.prev(element.selector).length) {
					$targetElem = $selectedElem.prev(element.selector);
				} else {
					$targetElem = $(element.selector + ":last");
				}
			}
			$targetElem.addClass("selected");
			$selectedElem.removeClass("selected");
		}); // end else if
	};
})(jQuery);
