//mobile menu
$(document).ready(function() {
	$('a.is-closed').click(function() {
		$(this).toggleClass('is-open');
		$('.global-nav').toggleClass('is-open');
	})
})