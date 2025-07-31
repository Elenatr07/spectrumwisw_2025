if ($("#dropbtn").hasClass("rus")) {
  var lang_default = $("#dropbtn").text("Русский");
  var lang_default_footer = $("#drop_footer_lang").text("Русский");
} else {
  var lang_default = $("#dropbtn").text("English");
  var lang_default_footer = $("#drop_footer_lang").text("English");
}

var select_lang = lang_default.text();
//console.log(select_lang);
$(".toggle_dark_left").css("display", "none");
$(".toggle_light_right").css("display", "block");
$(".dropdown-content").css("display", "none");

//  $('.filter_item_img').slice(0, 6).show();
let count = 0;
var itemsCount = 6,
  itemsMax = $(".filter_item_img").length;
var pagination = 6;
(per = 6), (a = 1), (total = 0);
total1 = 0;
total2 = 0;

$("#close_result").on("click", function () {
  $(".result").css("display", "none");
  $("#nav_shadow").removeClass("shadow");
  $(".shadow").css("display", "none");
});
$(".close_pop").on("click", function () {
  $(".block_pop").css("display", "none");
  $(".shadow").css({
    "z-index": "1",
  });
  $("#nav_shadow").removeClass("shadow");
  $("#in_project").css("display", "block");
  $("html, body").css("height", "fit-content");
  localStorage.removeItem('link');
});

$(document).ready(function () {
  // localStorage.setItem('theme', 'light');
  let theme = localStorage.getItem("theme");
  console.log(theme);
  if (theme === "dark") {
    $("body").addClass("dark");
    $(".toggle_light_right").css("display", "none");
    $(".toggle_dark_left").css("display", "block");
  } else {
    $("body").removeClass("dark");
    $(".toggle_light_right").css("display", "block");
    $(".toggle_dark_left").css("display", "none");
  }

  $("#side-menu").on("click", function () {
    if ($("#nav_shadow").hasClass("shadow")) {
      $("#nav_shadow").removeClass("shadow");
    } else {
      $("#nav_shadow").addClass("shadow");
    }
    if ($("body").hasClass("scroll_body")) {
      $("body").removeClass("scroll_body");
    } else {
      $("body").addClass("scroll_body");
    }
  });

  $("#toggle").on("click", function () {
    $(".toggle_dark_left").toggle();
    $(".toggle_light_right").toggle();
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      localStorage.setItem("theme", "light");
    } else {
      $("body").addClass("dark");
      $("#nib").attr("src", "img/nib_for_dark.svg");
      localStorage.setItem("theme", "dark");
    }
  });

  $("#id_link_dropdown").on("click", function () {
    $(".dropdown-content").toggle();
    $(".row_down").toggle();
    $(".row_up").toggle();
  });
   $('.dropdown-content').mouseout(function(){
    console.log('jgjgk')
        $('.dropdown-content').toggle();
        $(".row_down").toggle();
    $(".row_up").toggle();
    });

  $("#button_view_footer").on("click", function () {
    $("#select_lang_button").toggle();
    $(".row_down").toggle();
    $(".row_up").toggle();
  });
  if (select_lang === "English") {
    $("#select_english").css("display", "none");
    $("#select_english_footer").css("display", "none");
  } else {
    $("#select_russian").css("display", "none");
    $("#select_russian_footer").css("display", "none");
  }

  $(".how_it_works_header").each(function(){
    $(this).on('click', function(){
      how = $(this).attr('id');
      
       $('.how_it_works_drop.'+how).slideToggle(1000);
  
       $(".how_it_works_header .row_down."+how).toggle();
        $(".how_it_works_header .row_up."+how).toggle();
    })




  });

  $("#about_link_menu").on("click", function () {
    $("body").removeClass("scroll_body");
    $("#nav_shadow").removeClass("shadow"); 
    $("#side-menu").prop("checked", false);
  });
  $("#link_to_web").on("click", function () {
    $.scrollTo(`#block_web`, 1000);
  });
  $("#link_to_graphic").on("click", function () {
    $.scrollTo(`#graphic`, 1000);
  });
  $("#link_to_marketing").on("click", function () {
    $.scrollTo(`#marketing`, 1000);
  });
  $(".pop").each(function () {
    $(this).on("click", function () {
      popId = $(this).attr("id");
      console.log(popId);
      $(`.pop_1.block_pop.${popId}`).css("display", "block");
      console.log(popId);
      $("#nav_shadow").addClass("shadow");
      $("#in_project").css("display", "none");
      $("html, body").css("height", "100%");
      $(".shadow").css({
        display: "block",
        "z-index": "10",
      });
      $.scrollTo(`#pop${popId}`, 1000);
    });
  });
  /*
  $("#f2").on("click", function () {
    $(".pop_1").css("display", "block");
    $("#nav_shadow").addClass("shadow");
    $("#in_project").css("display", "none");
    $("html, body").css("height", "100%");
    $(".shadow").css({
      display: "block",
      "z-index": "10",
    });
    $.scrollTo(`#popf2`, 1000);
  });*/
  $('.localLink').each(function(){
    $(this).on('click', function(){
    linkId = $(this).data("id");  
    console.log(linkId);
   
    localStorage.setItem('link', linkId) 
    window.location.href = 'projects.html';
    console.log(localStorage)
  })
  


  })
  let link = localStorage.getItem('link');
  if(link){
    console.log('has' + link)
    $(`.pop_1.block_pop.${link}`).css("display", "block");
     $("#nav_shadow").addClass("shadow");
      $("html, body").css("height", "100%");
      $(".shadow").css({
        display: "block",
        "z-index": "10",
      });
  }

  $('.input_wrapper').on('click ', function(){
    $('.select_list').toggle(); 
    $('#formservice').css(
      {
        border: "1px solid transparent",
          background:
            "linear-gradient(90.43deg, #5456ab 1.85%, #22dcd9 101.19%)",
          "box-shadow": "0 0 0 150px var(--bg-dark) inset",
          "background-origin": "border-box",
      }
      
    ) 
 
       

     if($('.input_wrapper').hasClass('urlDown')){
         $('.input_wrapper').removeClass('urlDown')
     $('.input_wrapper').addClass('urlUp')
    } else {
           $('.input_wrapper').removeClass('urlUp')
     $('.input_wrapper').addClass('urlDown')
    }

  })
  $('.input_wrapper').on('blur', function(){
    if($(".select_list_item")
  })

     $('.select_list_item').each(function(){
    $(this).on('click', function(){
       text = $(this).html().replace('&amp;','&');
      
        $("#formservice").val(text);
  
        $('.select_list').css('display', 'none');
        $('.input_wrapper').addClass('urlDown');
         $('.input_wrapper').removeClass('urlUp')
        
       

    
    })
   
  })


 

//console.log( $("#formservice").valid());
});
