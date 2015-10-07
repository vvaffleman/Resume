$(function() {
	$('#resume-wrapper').hover(function(){   
		$("#resume-info").stop().animate({ "height": '650px' }, 800);
	}, function(){
		$("#resume-info").stop().animate({ "height": '0px' }, 400);
	});
});
