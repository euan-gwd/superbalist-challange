"use strict";

(function () {
	"use strict";

	// $(function() {
	// 	$('#here').hello({
	// 		name: 'Valentin'
	// 	});
	// });

	$(document).keyup(function (e) {
		var $selectedElem = $("img.selected"),
		    $targetElem = void 0;

		if (e.which === 75) {
			if ($selectedElem.next("img").length) {
				$targetElem = $selectedElem.next("img");
			} else {
				$targetElem = $("img:first");
			}
		} else if (e.which === 74) {
			if ($selectedElem.prev("img").length) {
				$targetElem = $selectedElem.prev("img");
			} else {
				$targetElem = $("img:last");
			}
		}
		$targetElem.addClass("selected");
		$selectedElem.removeClass("selected");
	}); // end else if
})();