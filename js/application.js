$(document).ready(function(){
	$('.collapsible').collapsible({
		accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});

	var menuButton = $('#menuButton'),
		drawer = $('.drawer');
	menuButton.on('click', function (e) {
		menuButton.toggleClass('is-active');
		drawer.toggleClass('toggled');

		e.preventDefault();
	});

});