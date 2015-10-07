$(function() {
	$("#middle").children().slideUp(10); 
	
	$("middle-nav-bar").slideUp(10);
	$("#middle-wrapper-1").slideUp(10); 
	$("#middle-wrapper-2").slideUp(10); 
	$("#middle-wrapper-3").slideUp(10); 
	$("#middle-wrapper-4").slideUp(10); 
	$("middle-nav-bar").children().slideUp(10);
	$("#middle-wrapper-1").children().slideUp(10); 
	$("#middle-wrapper-2").children().slideUp(10); 
	$("#middle-wrapper-3").children().slideUp(10); 
	$("#middle-wrapper-4").children().slideUp(10); 
	
	for(i = 1; i <= 4; i++){
		$("#middle-wrapper-" + i).animate({
			opacity: "0"
		}, 10, function() {
					
		});
	}
	
	$("#outer-wrapper").delay(1000).animate({
			opacity: "1.0"
		}, 1000, function() {
					
		});
});