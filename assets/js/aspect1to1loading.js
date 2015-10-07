$(function() {
	var height = $('#loading').height();
	
	$('#loading').css({'maxWidth': height + 'px'});
	
	$( window ).resize(function() {
		var height = $('#loading').height();
		$('#loading').css({'width': height + 'px'});
	});	
});