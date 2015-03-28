

$(document).ready(function(){
	$('.speakers').on('click', '.post', function()
	{
		
		// si está visible, lo escondemos
		$(this).siblings().find('.post-text').slideUp();
		//$(this).siblings().css('margin-bottom', '0px');
		
		if($(this).find('.post-text').is(':visible'))
		{
			//$(this).css('margin-bottom', '0px');
			$(this).find('.post-text').slideUp();
		}
		else // si no está visible lo mostramos
		{
			//$(this).css('margin-bottom', '334px');
		
			$(this).find('.post-text').slideDown();
			
			var position_scroll = parseInt((Math.round($(this).find('img').offset().top)));
			position_scroll = position_scroll - 65; // el alto del menu
			
			$('body').animate({scrollTop :  position_scroll}, 500, 'swing', function(){});
		}
		
	})
})

