$(function(){
	var $picker = $('.picker'),
			$color = $picker.find('i'),
			$delete_color = $picker.find('.delete');

	$('.container div[data-type="color"]').each(function(){
		$(this).html('<div class="flipper"><div class="origin"></div><div class="colors"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>')
		.addClass('turn180')
		.find('i').click(function(){
			var selectColor = $(this).css('backgroundColor');
			$picker.append('<i style="background-color: ' + rgb2hex(selectColor) + ';"><span class="delete">-</span><input class="code" value="'+ rgb2hex(selectColor) +'"></i>');
		})
	})

	$(document).on('click', '.delete', function(event){
		$(this).parent('i').fadeOut();
		event.stopPropagation();
	})

	$(document).on('click', '.picker i', function(event){
		event.stopPropagation();
	})

	$picker.addClass('hide')
	$(document).on('click', '.picker', function(event){
		$picker.toggleClass('hide');
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
})