$(function() {
	$("#profile-pic").click(function(){
		if(!$("#profile-pic").hasClass("viewing")){
			$("#outer-wrapper").animate({ 
				boxShadow : "0px 0px 0px rgb(25, 25, 25)" 
			}, 500, function() {
					
			});
		}
	});
});