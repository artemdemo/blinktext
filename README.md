# Blinking text


## Features

* Text blinking

## Basic Usage

### 1. Include the latest jQuery library and jQuery slider Plugin on the page
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jquery.blinkingtext.js"></script>
```

### 2. Create a list of text you want to scroll
```html
<div class="blinkingtext">
	Some text
</div>
```

### 3. Initialization
```js
$(document).ready(function(){
	$('.blinkingtext').blinkingtext({
	});
});
```

## License

jQuery blinkingText is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
