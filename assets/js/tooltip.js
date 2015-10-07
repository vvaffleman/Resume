$(function() {
	$( document ).tooltip();
	
	$( "#job-1-name" ).tooltip({ 
		content: '<img class = "tool-tip-logo" src = "assets/images/shelter-insurance.png" alt = "shelter-insurance.png"/>' 
			
			+ '<p class = "tool-tip-info"><span class = "bold-text">Supervisor</span><br>Kimberly Wilson</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Department</span><br>IS - Life</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Position</span><br>Software Developer</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Directives</span><br>Automated test and load test development.</p>'
	});
	
	$( "#job-2-name" ).tooltip({ 
		content: '<img class = "tool-tip-logo" src = "assets/images/mizzou-rec.png" alt = "mizzou-rec.png"/>' 
			
			+ '<p class = "tool-tip-info"><span class = "bold-text">Supervisor</span><br>Ben Burnham</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Position</span><br>Frontline Staff.</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Directives</span><br>Cleaning and maintaining equipment. Greeting members. Assisting members with workout activities and equipment</p>'
	});
	
	
	$( "#job-3-name" ).tooltip({ 
		content: '<img class = "tool-tip-logo" src = "assets/images/TMT.png" alt = "TMT.png"/>' 
			
			+ '<p class = "tool-tip-info"><span class = "bold-text">Supervisor</span><br>Jeff Lodike</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Position</span><br>Mover</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Directives</span><br>Moving and packing for both business and residential clients.</p>'
	});
	
	
	$( "#job-4-name" ).tooltip({ 
		content: '<img class = "tool-tip-logo" src = "assets/images/nps.png" alt = "nps.png"/>' 
			
			+ '<p class = "tool-tip-info"><span class = "bold-text">Supervisor</span><br>Brad Fudge</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Position</span><br>Seasonal Laborer</p>'
			+ '<br>'
			+ '<p class = "tool-tip-info"><span class = "bold-text">Directives</span><br>Internal maintenance and grounds keeping. Assisting with special projects.</p>'
	});
});