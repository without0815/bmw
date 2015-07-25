define(function(require, exports, module) {

	var util = require('./util')
	setInterval(function() {
		$('#box').css('background-color',util.randomColor());
	}, 1500);

});