$(function() {
	var height = $('#profile-pic').height();
	
	$('#profile-pic').css({'maxWidth': height + 'px'});
	
	$( window ).resize(function() {
		var height = $('#profile-pic').height();
		$('#profile-pic').css({'width': height + 'px'});
	});	
});