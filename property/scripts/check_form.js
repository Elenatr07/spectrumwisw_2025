$(document).ready(function () {
  //	$(".phone").mask("(99) 9999?9-9999");

  $("#send-form").click(function () {
    var form = $(this).closest("form");

    if (form.valid()) {
      //  form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          //form.html(data);
          // form.css("opacity", "1");
          // form.find(".status").html("form submitted successfully");
          $("#nav_shadow").addClass("shadow");
          form.find(".status").css("opacity", "1");
          $(".result div").html(`<h3>Success!</h3>
            <p>
              Thank you! We've received your contact details and will get back
              to you as soon as possible.
            </p>`);
          $(".result").css("display", "block");
          //$('#myModal').modal('show') // для бутстрапа
        },

        error: function () {
          form.find(".status").html("Error");
          $("#nav_shadow").addClass("shadow");
          $(".result div").html(`<h3>Oops...</h3>
            <p>
             Something went wrong. Please try again or contact us through another method.
            </p>`);
          $(".result").css("display", "block");
        },
      });
    }
    $("input").each(function () {
      if (!$(this).hasClass("valid")) {
        $(this).css("border", "2px solid  #ff5e00");
        $(this).removeClass("border_active");
        console.log("has error");
      }
    });
  });

  $("input").each(function () {
    $(this).on("click", function () {
      $(this).focus();
      if ($(this).is(":focus")) {
        $(this).css("border", "2px solid #FFFFFF");

        //  $('#border_name').removeClass('border_error')
      }
    });
  });
  $("input").on("input", function () {
    if ((!$(this).hasClass("error") && $(this).valid()) || $(this).valid()) {
      $(this).css("border", "2px solid  #30D5C8");
      console.log("kkk");
    } else {
      $(this).css("border", "2px solid  #ff5e00");
      console.log("error");
    }
  });
  $("input[type='text'], input[type='tel'], input[type='email']").on(
    "keyup",
    function () {
      console.log(this);
      if (
        $("input[type='text']").val() != "" &&
        $("input[type='tel']").val() != "" &&
        $("input[type='email']").val() != "" &&
        $(this).valid()
      ) {
        $("#send-form").removeAttr("disabled");
        $("#send-form").addClass("button_active");
      } else {
        console.log("no valid");
        $("#send-form").removeClass("button_active");
        $("#send-form").prop("disabled", "true");
      }
    }
  );
});

function clearform() {
  $("#formname").val("");
  $("#formemail").val("");
  $("#formtel").val("");
  $("input").css("border", "2px solid hsla(0, 2%, 72%, 1)");
  $("#send-form").attr("disabled");
  $("#send-form").removeClass("button_active");
}
