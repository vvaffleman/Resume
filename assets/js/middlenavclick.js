$(function() {
	$(".nav-link").click(function(){
		$(".nav-link").stop().animate({
			color: "rgb(255, 255, 255)"
		}, 100);
			
		$(this).stop().animate({
			color: "rgb(230, 46, 0)"
		}, 100);
	});
});