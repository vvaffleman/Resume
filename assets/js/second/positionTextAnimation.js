$(function () {
    $('.positions').textillate({
		// the default selector to use when detecting multiple texts to animate
		//selector: '',

		// enable looping
		loop: true,

		// sets the initial delay before starting the animation
		// (note that depending on the in effect you may need to manually apply 
		// visibility: hidden to the element before running this plugin)
		initialDelay: 0,

		// set whether or not to automatically start animating
		autoStart: true,

		// custom set of 'in' effects. This effects whether or not the 
		// character is shown/hidden before or after an animation  
		//inEffects: [],
	
		// custom set of 'out' effects
		//outEffects: [ 'hinge' ],

		// in animation settings
		in: {
			// set the effect name
			effect: 'fadeInDown',

			// set the delay factor applied to each consecutive character
			delayScale: 0,

			// set the delay between each character
			delay: 0,
			
			minDisplayTime: 3000,

			// set to true to animate all the characters at the same time
			sync: true,

			// randomize the character sequence 
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: false,

			// reverse the character sequence 
			// (note that reverse doesn't make sense with sync = true)
			reverse: false,

			// callback that executes once the animation has finished
			callback: function () {}
	  },

	  // out animation settings.
	  out: {
		effect: 'fadeOutDown',
		
		delayScale: 0,
		
		delay: 3000,
		
		sync: true,
		
		shuffle: false,
		
		reverse: false,
		
		callback: function () {}
	  },

	  // callback that executes once textillate has finished 
	  callback: function () {},

	  // set the type of token to animate (available types: 'char' and 'word')
	  type: 'word'
	});
})