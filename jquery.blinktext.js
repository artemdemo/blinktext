/*!
 * jQuery blinkText
 * (c) 2013 Artem Demo <artemdemo@gmail.com>
 * MIT Licensed.
 *
 * https://github.com/artemdemo/blibktext
 */

(function($) {
$.fn.blinktext = function(config) {

	var defConfig = {
		colors: ['#ff0000', '#00ff00', '#0000ff'],
		speed: '300'	//speed of changing - milliseconds
	}
	config = $.extend(defConfig, config);

	var $container = $(this);
	var currentColor = -1;
	var colorsNum = config.colors.length;

	changeColor( $container );

	function changeColor( $instance ) {
		if ( currentColor == colorsNum - 1 ) currentColor = -1;
		currentColor = currentColor + 1;
		$instance.css( 'color', config.colors[currentColor] );
		
		setTimeout(function(){
			changeColor( $container );
		}, config.speed );
	}

}
}(jQuery));