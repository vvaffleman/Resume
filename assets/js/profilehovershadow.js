$(function() {
	if(!$("#profile-pic").hasClass("viewing")){
		$("#profile-pic").on('mouseenter', function() {
			$("#profile-pic").animate({ 
				boxShadow : "0px 0px 50px rgb(255, 255, 255)" 
			}, 300, function() {
				
			});			
		}).on('mouseleave', function(){
			$("#profile-pic").animate({ 
				boxShadow : "0px 0px 0px rgb(255, 255, 255)" 
			}, 300, function() {
							
			});		
		});

		
	}
});