const width = window.innerWidth;
const height = window.innerHeight;

//console.log("Ширина экрана: " + width + "px,  Высота экрана" + height);

function scroling() {
  let height1 = $(window).scrollTop();
  let width1 = $(window).width();

  console.log("height", height1);
  
  var blockPosition1 = $(".block3_wrapper").offset().top
  var blockPosition2 = $(".contact_block").offset().top
  var blockPosition3 = $("#vision_id").offset().top
  var blockPosition4 = $("#about_us").offset().top
  
   // console.log('b4:' + blockPosition3, '')
    
  if (blockPosition1 < height1 && height1 >= blockPosition3) {
     $(".block3_item").addClass("anime1");
     $('.block3_item').css('visibility', 'visible')
  }
  if(blockPosition4 < height1 && height1>= blockPosition4){
    $('.item').addClass('anime2');
     $('.item').css({
        'visibility': 'visible'
        
    })
  }
 
}

$(window).scroll(function () {
  scroling();
});

$(document).ready(function () {
  scroling();
  $("#side-menu").on("click", function () {
    if ($("#nav_shadow").hasClass("shadow")) {
      $("#nav_shadow").removeClass("shadow");
    } else {
      $("#nav_shadow").addClass("shadow");
    }
  });

  $(".menu li").on("click", function () {
    if (width < 1026) {
      $("body").removeClass("scroll_body");
      $("#nav_shadow").removeClass("shadow");
      $("#side-menu").prop("checked", false);
    }
  });
  if (width < 600) {
    $(".main_text_b h1").text("Building Dreams, Brick By Brick");
    $(".block3_header p").text(
      "Booking for our newest Project “THE SERENITY RESIDENCE“ have now begun"
    );
  }
  if (width < 400) {
    $(".block3_header p").html(
      "Booking for our newest Project <br> “THE SERENITY RESIDENCE“ <br> have now begun"
    );
  }
  if (width < 1026) {
    $(".social_links").append(`    <div>
          <a class="location" href="mailto:sehgalhomesproject@gmail.com">
            <img src="img/mail1.svg" alt="" />
          </a>
        </div>
        <div>
          <a class="location" href="tel:+918800110831">
            <img src="img/phone1.svg" alt="" />
          </a>
        </div>`);
  }
  $(".close").on("click", function () {
    $("#nav_shadow").removeClass("shadow");
    $(".result").css("display", "none");
  });
});
