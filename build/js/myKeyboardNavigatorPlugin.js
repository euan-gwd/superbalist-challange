"use strict";

(function ($) {
    "use strict";

    $.fn.myKeyboardNavigatorPlugin = function (options) {

        var element = $.extend({
            selector: "img"
        }, options);

        var fcount = 0;
        var bcount = $(element.selector).length;

        $(document).on('keyup', function (e) {
            e.stopPropagation();
            var targetElem = void 0;
            var eslength = $(element.selector).length + 1;

            if (e.which === 75 || e.which === 39) {
                fcount++;
                targetElem = $(element.selector + ":nth-of-type(" + fcount + ")");
                if (fcount < eslength) {
                    $("html, body").stop().animate({
                        scrollTop: targetElem.offset().top
                    }, 1000);
                } else {
                    fcount = 0;
                }
            } //end Forward

            if (e.which === 74 || e.which === 37) {
                bcount--;
                targetElem = $(element.selector + ":nth-of-type(" + bcount + ")");
                if (bcount > 0) {
                    $("html, body").stop().animate({
                        scrollTop: targetElem.offset().top
                    }, 1000);
                } else {
                    bcount = eslength;
                }
            } //end Backward
        }); //end keyup
    }; //end myKeyboardNavigatorPlugin
})(jQuery);