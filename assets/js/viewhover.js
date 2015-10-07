$(function() {
	var $imageView = $( "<img src = 'assets/images/expandorcollapse.png' alt = 'expandorcollapse.png' id = 'expand-or-collapse'>" );
	
	var $imageClose = $( "<img src = 'assets/images/expandorcollapse.png' alt = 'expandorcollapse.png' id = 'expand-or-collapse' class = 'flip-vertical'>" );
	
	$("#profile-pic").hover(function(){
		if(!$("#profile-pic").hasClass("viewing")){
			$("#profile-pic").append($imageView);
		}
		else{
			$("#profile-pic").append($imageClose);
		}
	},function(){
		$($imageView).remove();
		
		$($imageClose).remove();
	});
});