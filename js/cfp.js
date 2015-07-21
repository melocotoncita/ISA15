
$(document).ready(function() {

	// tipos de convocatoria
	$("#cfp_details button").on('click', function(e)
	{
		var id = $(this).attr("id");

		if (!$(this).hasClass("selected"))
		{
			$("#cfp_details button").removeClass("selected");
			$(this).addClass("selected");

			$(".cfp_data").slideUp("fast");

			$("#" + id + "_data").slideDown("slow");

			$('html, body').stop().animate({
				 'scrollTop': ($("#" + id + "_data").offset().top - 97)
			}, 900, 'swing');
		}
		else
		{
			$("#cfp_details button").removeClass("selected");
			$(".cfp_data").slideUp("fast");
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

	// chevrones para propuestas
	$('.collapse').on('show.bs.collapse', function(){
	  var i = $(this).parent().find('i')
	  i.toggleClass('fa-chevron-down fa-chevron-up');
	}).on('hide.bs.collapse', function(){
	  var i = $(this).parent().find('i')
	  i.toggleClass('fa-chevron-up fa-chevron-down');
	});
});
