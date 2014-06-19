/*!
 * jQuery blinkText
 * (c) 2013 Artem Demo <artemdemo@gmail.com>
 * MIT Licensed.
 *
 * https://github.com/artemdemo/blibktext
 */

(function($) {
$.fn.lazyloadslider = function(config) {

	var defConfig = {
		controllerMoveLeft: '',
		controllerMoveRight: '',
		loadingGif: '',
		classOfLoadingGifContainer: '',
		direction: 'ltr',
		speed: '700',
		itemWidth: 0		//because of lazy loading I need to get this property manually
	}
	config = $.extend(defConfig, config);

	var $container = $(this);
	var $list = $( $(this).children()[0] );


}
}(jQuery));