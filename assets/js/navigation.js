$(function() {
	$("#nav-2 a").click(function(){
		$("#nav-2").addClass("nav-selected");
		$("#nav-2 a").addClass("bold-text");		
				
		$("#nav-3").removeClass("nav-selected");
		$("#nav-3 a").removeClass("bold-text");
		
		$("#nav-4").removeClass("nav-selected");
		$("#nav-4 a").removeClass("bold-text");
		
		$("#nav-5").removeClass("nav-selected");
		$("#nav-5 a").removeClass("bold-text");
		
		$("#nav-6").removeClass("nav-selected");
		$("#nav-6 a").removeClass("bold-text");
	});
	
	$("#nav-3 a").click(function(){
		$("#nav-3").addClass("nav-selected");
		$("#nav-3 a").addClass("bold-text");
		
		$("#nav-2").removeClass("nav-selected");
		$("#nav-2 a").removeClass("bold-text");
		
		$("#nav-4").removeClass("nav-selected");
		$("#nav-4 a").removeClass("bold-text");
		
		$("#nav-5").removeClass("nav-selected");
		$("#nav-5 a").removeClass("bold-text");
		
		$("#nav-6").removeClass("nav-selected");
		$("#nav-6 a").removeClass("bold-text");
	});
	
	$("#nav-4 a").click(function(){
		$("#nav-4").addClass("nav-selected");
		$("#nav-4 a").addClass("bold-text");
		
		$("#nav-2").removeClass("nav-selected");
		$("#nav-2 a").removeClass("bold-text");
		
		$("#nav-3").removeClass("nav-selected");
		$("#nav-3 a").removeClass("bold-text");
		
		$("#nav-5").removeClass("nav-selected");
		$("#nav-5 a").removeClass("bold-text");
		
		$("#nav-6").removeClass("nav-selected");
		$("#nav-6 a").removeClass("bold-text");
	});
	
	$("#nav-5 a").click(function(){
		$("#nav-5").addClass("nav-selected");
		$("#nav-5 a").addClass("bold-text");
		 
		$("#nav-2").removeClass("nav-selected");
		$("#nav-2 a").removeClass("bold-text");
		
		$("#nav-3").removeClass("nav-selected");
		$("#nav-3 a").removeClass("bold-text");
		
		$("#nav-4").removeClass("nav-selected");
		$("#nav-4 a").removeClass("bold-text");
		
		$("#nav-6").removeClass("nav-selected");
		$("#nav-6 a").removeClass("bold-text");
	});	
	
	$("#nav-6 a").click(function(){
		$("#nav-6").addClass("nav-selected");
		$("#nav-6 a").addClass("bold-text");
		
		$("#nav-2").removeClass("nav-selected");
		$("#nav-2 a").removeClass("bold-text");
		
		$("#nav-3").removeClass("nav-selected");
		$("#nav-3 a").removeClass("bold-text");
		
		$("#nav-4").removeClass("nav-selected");
		$("#nav-4 a").removeClass("bold-text");
		
		$("#nav-5").removeClass("nav-selected");
		$("#nav-5 a").removeClass("bold-text");
	});	
});

