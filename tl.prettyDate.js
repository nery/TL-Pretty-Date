/*
 * JavaScript Pretty Date 2.0
 * 2014 Teehan+Lax
 * @author: Nery Orellana
 * Licensed under the MIT license.
 */

// Takes a date and returns a string representing how long ago the date represents.
// Depends on Sugar.js Date http://sugarjs.com/dates

;
(function($, window, document) {

	// If jQuery is included in the page, adds a jQuery plugin to handle it as well
	if (typeof $ != 'undefined') {
		$.fn.prettyDate = function() {
			return this.each(function() {
				var date = Date.create($(this).attr('title'));
				if (date.isThisYear() || date.isLastYear()) {

					var fDate = date.relative(function(value, unit, ms, loc) {

						if (this.isFuture() && this.isToday())
							return 'Today';

						return this.relative();

					});

					$(this).text(fDate);
				}
			});
		};
	}
})($, window, document);
