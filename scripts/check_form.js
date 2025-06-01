$(document).ready(function () {
  //	$(".phone").mask("(99) 9999?9-9999");

  $("#send-form").click(function () {
    var form = $(this).closest("form");

    if (form.valid()) {
     // form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          $("#nav_shadow").addClass("shadow");
		  $('.shadow').css('display', 'block')
          if ($("#dropbtn").hasClass("rus")) {
            $(".result div").html(`<h3>Успех!</h3>
            <p>
             Ваше сообщение было доставлено. Мы свяжемся с Вами в ближайшее время.
            </p>`);
          } else {
			    $(".result div").html(`<h3>Success!</h3>
            <p>
              Thank you! We've received your contact details and will get back
              to you as soon as possible.
            </p>`);
		  }
		  	$('.result').css('display', 'block');
          //form.html(data);

        
          //$('#myModal').modal('show') // для бутстрапа
        },

        error: function () {
         
		  $('#nav_shadow').addClass("shadow");  
		   $('.shadow').css('display', 'block')
		  if ($("#dropbtn").hasClass("rus")){
			 $(".result div").html(`<h3>Упс...</h3>
            <p>
             Что-то пошло не так. Свяжитесь с нами по почте или через Whatsapp.
            </p>`);
          } else {
			    $(".result div").html(`<h3>OOps...</h3>
            <p>
            Something went wrong. Please contact us via email or Whatsapp.
            </p>`);

		  }
		  $('.result').css('display', 'block');
        },
      });
    }
  });
});
function clearform() {
  $("#formname").val("");
  $("#formemail").val("");
  $("#formtext").val("");
}
