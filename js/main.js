$(document).ready(function(){
	var $colors = $('.container div[data-type="color"]'),
			$picker = $('.picker'),
			$delete_color = $picker.find('.delete'),
			temp = $picker.css('height');

	function getLayout() {
		temp = $picker.css('height');
		$('.container').css('padding-bottom', temp);
	};
	getLayout();

	$(document).on('click, mousemove', function(){
		getLayout();
	})

	$colors.each(function(){
		$(this).html('<div class="flipper"><div class="origin"></div><div class="colors"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>')
		.addClass('turn180')
		.find('i').click(function(){
			var selectColor = $(this).css('backgroundColor'),
					colorHex = rgb2hex(selectColor);
			$picker.append('<i style="background-color: ' + colorHex + ';"><span class="delete">-</span><input class="code" value="'+ colorHex +'"></i>');
			$picker.find('input[value='+ colorHex +']').parent().addClass('exist').delay(500).queue(function(){
				$(this).removeAttr('class');
				$(this).dequeue();
			})
		})
	})

	$(document).on('click', '.delete', function(event){
		$(this).parent('i').fadeOut();
		event.stopPropagation();
	})

	$(document).on('click', '.picker i', function(event){
		if ( ! $(this).parent().hasClass('hide')) {
			event.stopPropagation();
		}
	})

	$(document).on('click', '.picker', function(event){
		$picker.toggleClass('hide');
		getLayout();
	})

	$(document).on('click', '.code', function(event){
		$(this).select();
	})

	function rgb2hex(rgb) {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

	// Outdated Brower
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '../outdated-browser/lang/en.html'
	})

})