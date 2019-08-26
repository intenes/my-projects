$(document).ready(function(){

	$('.header-text__button').on("click", function () {
		$('.overlay').show();
	});
	$('.popup-close').on("click", function () {
		$('.overlay').hide();
	});

	
	var link = $('.mobile-menu-link');
	var menu = $('.mobile-menu-box');
	var nav_link = $('.mobile-menu-box a');
	var link_active = $('.mobile-menu-link_active');

	link.click(function(){
		link.toggleClass('mobile-menu-link_active');
		menu.toggleClass('mobile-menu-box_active');
	})

	nav_link.click(function() {
		link.removeClass('mobile-menu-link_active')
		menu.removeClass('mobile-menu-box_active')
	})
	






	new WOW().init();





	

	
});