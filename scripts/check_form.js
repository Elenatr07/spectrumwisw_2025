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
          $(".shadow").css("display", "block");
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
          $(".result").css("display", "block");
          //form.html(data);

          //$('#myModal').modal('show') // для бутстрапа
        },

        error: function () {
          $("#nav_shadow").addClass("shadow");
          $(".shadow").css("display", "block");
          if ($("#dropbtn").hasClass("rus")) {
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
          $(".result").css("display", "block");
        },
      });
    }
    $("input, textarea").each(function () {
      if (!$(this).hasClass("valid")) {
        $(this).css({
          border: "1px solid transparent",
          background: "linear-gradient(99.94deg, #f73e94 0%, #97238a 33.33%)",
          "box-shadow": "0 0 0 150px var(--bg-dark) inset",
          "background-origin": "border-box",
        });
        $(this).removeClass("border_active");

         console.log("has error");
      }
    });
  }); 
 

  $("input[type='text'], input[type='tel'], input[type='email'], textarea").on("input  keyup", function () {
 
    if ((!$(this).hasClass("error") && $(this).valid()  ) || $(this).valid()) {
      $(this).css({
        border: "1px solid transparent",
        background:
          "linear-gradient(90.43deg, #5456ab 1.85%, #22dcd9 101.19% )",
        "box-shadow": "0 0 0 150px var(--bg-dark) inset",
        "background-origin": "border-box",
      });
    } else {
      $(this).css({
        border: "1px solid transparent",
        background: "linear-gradient(99.94deg, #f73e94 0%, #97238a 33.33%)",
        "box-shadow": "0 0 0 150px var(--bg-dark) inset",
        "background-origin": "border-box",
      });
      console.log("error");
    }
  });
   $("input[type='text'], input[type='tel'], input[type='email'], textarea").on('click', function(){
      if(!$(this).hasClass('error')) {
            $(this).css({
        border: "1px solid transparent",
        background:
          "linear-gradient(90.43deg, #5456ab 1.85%, #22dcd9 101.19% )",
        "box-shadow": "0 0 0 150px var(--bg-dark) inset",
        "background-origin": "border-box",
      });
      }
      if($(".select_list").css('display') == 'block'){
        $(".select_list").toggle();
        $("#formservice").css({
           border: "1px solid hsla(218, 26%, 88%, 1)",
        background: "var(--bg-dark)"
        })
           $('.input_wrapper').addClass('urlDown');
         $('.input_wrapper').removeClass('urlUp')
      }
   })
      $("input[type='text'], input[type='tel'], input[type='email'], textarea ").on('blur', function(){
      if(!$(this).hasClass('error') && $(this).val() =='') {
            $(this).css({
        border: "1px solid hsla(218, 26%, 88%, 1)",
        background: "var(--bg-dark)"

      });
      }
   })
   $(".input_captcha").on('input', function(){
      if($(".captcha_field").val() === $(".input_captcha").val()){
    console.log('captcha ok')
  } else {
    console.log('captcha faile')
  }
   })

 
$('form').on('change keyup paste click', function(){
  if(($("#formname").val() != '' && ($("#formname").valid())) &&
      ($("#formemail").val() != '' && ($('#formemail').valid())) &&
      ($("#formservice").val() != '' && ($("#formservice").valid())) &&
      ($("#formtext").val() != '' && ($("#formtext").valid())) &&
       $(".captcha_field").val() === $(".input_captcha").val()) 
      {

 $("#send-form").removeAttr("disabled");
		    $('.send_button').css('opacity', '1')
      }
 
})
})
    
    
  

function clearform() {
  $("#formname").val("");
  $("#formemail").val("");
  $('#formtext').val("");
  $('#formservice').val("");
  $('#formphone').val("");
  $('.input_captcha').val("");
  $("input, textarea").css({
        border: '1px solid hsla(218, 26%, 88%, 1)',
        background: 'var(--bg-dark)',
  })

}
