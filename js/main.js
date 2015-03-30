//Background on header

$(document).ready(function() {
	
    var addBgrTop = $('#speakers').offset().top -1;  
      
    var headerNav = function()
	{  
		var scrollTop = $(window).scrollTop();  
			   
		if (scrollTop > addBgrTop) {   
			$('.navbar').addClass('navbar-white');  
		} else {  
			$('.navbar').removeClass('navbar-white');   
		}  
	};  

	headerNav();  
	
    $(window).scroll(function() {  
        headerNav();  
    });
	
	$("header a").on('click', function(e) 
	{
		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
		   scrollTop: $(hash).offset().top
		}, 500, function(){

		   // when done, add hash to url
		   // (default click behaviour)
		   window.location.hash = hash;
		});
	});
	
	var headroom  = new Headroom(document.querySelector("header"));
	headroom.init();
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});
	  
	$('[data-toggle="tooltip"]').tooltip()
	  
	Grid.init();
  
});




