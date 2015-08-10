// fix para que el menu se cierre solo en mobile
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});

	$("#menu-lang a, #buscabasisa14, .go_link").on('click',function(e) {
		window.location = $(this).attr("href");
	});

// ocultamos los signitos de pregunta en mobile
	if (parseInt($(window).width()) < 768) {
		$('.speaker-soon:not(:first)').parent().remove();
	}



$('[data-toggle="tooltip"]').tooltip()

// $("header a").on('click', function(e) {
// 	// prevent default anchor click behavior
// 	e.preventDefault();
//
// 	// store hash
// 	var hash = this.hash;
//
// 	// animate
// 	$('html, body').animate({
// 	   scrollTop: $(hash).offset().top
// 	}, 500, function(){
//
// 	   // when done, add hash to url
// 	   // (default click behaviour)
// 	   window.location.hash = hash;
// 	});
// });

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
	  }, 500);
        return false;
      }
    }
  });
});
