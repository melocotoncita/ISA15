

$(document).ready(function(){
	$('.speakers').on('click', '.post', function()
	{
		if($(this).find('.post-text').is(':visible')){
			$(this).css('margin-bottom', '0px');
			$(this).find('.post-text').slideUp();
		}else{
			$(this).css('margin-bottom', '334px');
			$(this).find('.post-text').slideDown();
		}   
	})
})