(function() {
	"use strict";

	// $(function() {
	// 	$('#here').hello({
	// 		name: 'Valentin'
	// 	});
	// });

	$(document).keyup(function(e) {
		let $selectedElem = $("img.selected"),	$targetElem;

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
