"use strict";

(function ($) {
	"use strict";

	$.fn.visElemSle = function () {
		$(document).keyup(function (e) {
			if (e.which === 74) {
				console.log(event.which + "pressed");
			} else if (e.which === 75) {
				console.log(event.which + "pressed");
			}
		}); // end else if
	};
})(jQuery);