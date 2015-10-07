$(function() {
	$("#profile-pic").click(function(){
		if(!$("#profile-pic").hasClass("viewing")){
			$("#profile-pic").addClass("viewing");		
			
			$("#middle").children().slideDown(1500); 
			$("#middle-wrapper-1").children().slideDown(1500);
			
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
			
			$("#middle").delay(1500).animate({
				opacity: "1.0"
			}, 1000, function() {
				
			});
			
			$("#middle-wrapper-1").animate({
				opacity: "1.0"
			}, 1000, function() {
				
			});
			
			$( "#outer-wrapper" ).stop().animate({
				marginTop: "-1%"
			}, 500, function() {
				
			});
		}
		else{
			$("#profile-pic").removeClass("viewing");
			
			$("#middle").children().hide(1500); 

			$("#middle").stop().animate({
				opacity: "0"
			}, 200, function() {
				
			});			
			
			$( "#outer-wrapper" ).stop().animate({
				marginTop: "10%"
			}, 500, function() {					
				$("#nav-link-1").animate({
					color: "rgb(230, 46, 0)"
				});
				
				$("#nav-link-2").animate({
					color: "rgb(255, 255, 255)"
				});
				
				$("#nav-link-3").animate({
					color: "rgb(255, 255, 255)"
				});
				
				$("#nav-link-4").animate({
					color: "rgb(255, 255, 255)"
				});
			});
		}
	});
});