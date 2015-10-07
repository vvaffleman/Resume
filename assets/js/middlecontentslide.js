$(function() {
	$(".nav-link").click(function(){
		var id = $(this).attr('id');
		
		var idNum = id.substring(9);
		
		if(idNum == 1){
			$("#middle-wrapper-2").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-3").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-4").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});	
			
			$("#middle-wrapper-1").slideDown(1000); 
			$("#middle-wrapper-1").children().slideDown(1000); 
			
			$("#middle-wrapper-1").animate({
				opacity: "1.0"
			}, 500);
		}
		else if(idNum == 2){
			$("#middle-wrapper-1").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-3").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-4").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});	
			
			$("#middle-wrapper-2").slideDown(1000); 
			$("#middle-wrapper-2").children().slideDown(1000); 
			
			$("#middle-wrapper-2").animate({
				opacity: "1.0"
			}, 500);
		}
		else if(idNum == 3){
			$("#middle-wrapper-1").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-2").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-4").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});	
			
			$("#middle-wrapper-3").slideDown(1000); 
			$("#middle-wrapper-3").children().slideDown(1000); 
			
			$("#middle-wrapper-3").animate({
				opacity: "1.0"
			}, 500);
		}
		else if(idNum == 4){
			$("#middle-wrapper-1").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-2").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});
			
			$("#middle-wrapper-3").stop().animate({
				opacity: "0"
			}, 500, function(){
				$(this).slideUp(1000); 
			});	
			
			$("#middle-wrapper-4").slideDown(1000); 
			$("#middle-wrapper-4").children().slideDown(1000); 
			
			$("#middle-wrapper-4").animate({
				opacity: "1.0"
			}, 500);
		}
	});
});