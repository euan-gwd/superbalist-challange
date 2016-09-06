(function($) {
	"use strict";
	$.fn.visElemSle = () => {
		$(document).keyup(function(e) {
			if (e.which === 74) {
				console.log(event.which + "pressed");
			} else if (e.which === 75) {
				console.log(event.which + "pressed");
			}
		}); // end else if
	};
})(jQuery);
