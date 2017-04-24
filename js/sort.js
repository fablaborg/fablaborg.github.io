// On page ready
$(document).ready(function() {
	// On the URL hash changed
	$(window).on('hashchange', function() {
		
		var $boxs = $("#parent > .box");

		// Gets the hash name on the URL and removes 
		// the # from the beginning
		var activeClass = location.hash.substring(1);

		console.log();

		if (activeClass && $boxs.hasClass(activeClass)) {
		// If the hash the name of one of the classes
		// use it to filter the category
			$boxs
				.hide()
				.filter("." + activeClass)
				.fadeIn(450);
		} else {
		// If the hash doesn't exist remove any filters
			$boxs
				.show()
				.fadeIn(450);
		}

	}).trigger('hashchange');
});