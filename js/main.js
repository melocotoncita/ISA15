//Background on header

$(document).ready(function() {


	var addBgrTop = $('#speakers').offset().top -1;

	var headerNav = function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > addBgrTop) {
			$('.navbar').addClass('navbar-white');
		} else {
			$('.navbar').removeClass('navbar-white');
		}
	};

	// ocultamos los signitos de pregunta en modo celular
	if (parseInt($(window).width()) < 768)
	{
		$('.speaker-soon:not(:first)').parent().remove();
	}

	// el menu es autocoloreable solo en modo escritorio, en modo mobile lo mostramos siempre blanco
	if (parseInt($(window).width()) > 1075)
	{
		 headerNav();

		$(window).scroll(function() {
			headerNav();
		});
	}
	else
	{
		$('.navbar').addClass('navbar-white');
	}
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	$('[data-toggle="tooltip"]').tooltip()

	Grid.init();

	// tickets
	$("#tickets .comprando").on('click', function(e)
	{
		var id = $(this).attr("id");

		if (!$(this).hasClass("selected"))
		{
			$("#tickets .comprando").removeClass("selected");
			$(this).addClass("selected");

			$(".buy_form").slideUp("fast");

			$("#" + id + "_form").slideDown("slow");

			$('html, body').stop().animate({
				 'scrollTop': ($("#" + id + "_data").offset().top - 97)
			}, 900, 'swing');

		}
		else
		{
			$("#tickets .comprando").removeClass("selected");
			$(".buy_form").slideUp("fast");
		}

		return false;
	});

// newsletter
	$("#newsletter button").on('click', function(e)
	{
		e.preventDefault();

		$('#newsletter_fail').addClass('hide');
		$('#newsletter_ok').addClass('hide');
		$('#newsletter_repeat').addClass('hide');

		var mail_regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var email = $("#newsletter input").val();
		var extra_data = {EmailAddress:email, CustomField41:$("#newsletter button").data("lang")};//Spanish, English, Portuguese


		var validar = true;
		validar = validar && email.length > 0;
		validar = validar && mail_regexp.test(email);
		if(!validar)
		{
			$('#newsletter_fail').removeClass('hide');
		}
		else
		{
			$('#newsletter button').attr('disabled', 'disabled');

			$.ajax({
				url: "http://nuevo.gentedeideas.com/subscribe.php",
				type: "post",
				data: {FormValue_Fields: extra_data, FormValue_ListID: "216", FormValue_Command: "Subscriber.Add", FormButton_Subscribe: "Subscribe"}
			}).done(function(data)
			{
				if(data.indexOf("Gracias")  > -1)
				{
					$('#newsletter_ok').removeClass('hide');
				}
				else
				{
					$('#newsletter_repeat').removeClass('hide');
					$('#newsletter button').attr('disabled', false);
				}

			});
		}
		return false;

	});

});
