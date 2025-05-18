
if ($('#dropbtn').hasClass('rus')){
    var lang_default = $('#dropbtn').text('Русский');
    var lang_default_footer = $('#drop_footer_lang').text('Русский');
} else {
    var lang_default = $('#dropbtn').text('English');
    var lang_default_footer = $('#drop_footer_lang').text('English');

}


    var select_lang = lang_default.text();
    //console.log(select_lang);    
    $('.toggle_dark_left').css('display', 'none');
    $('.toggle_light_right').css('display', 'block');
    $('.dropdown-content').css('display', 'none');
 
 //  $('.filter_item_img').slice(0, 6).show();
    let count = 0;
    var itemsCount = 6,
    itemsMax = $('.filter_item_img').length;
    var pagination = 6;
    per = 6,
    a= 1,
               
    total = 0;
    total1 =0
    total2 =0


 
   
$(document).ready(function() {
   // localStorage.setItem('theme', 'light');
    let theme = localStorage.getItem('theme');
    console.log(theme)
    if(theme === 'dark'){
        $('body').addClass('dark');
        $('.toggle_light_right').css('display', 'none');
        $('.toggle_dark_left').css('display', 'block')

    } else {
        $('body').removeClass('dark');
        $('.toggle_light_right').css('display', 'block');
        $('.toggle_dark_left').css('display', 'none')
    }

   
    $('#side-menu').on('click', function(){
        if( $('#nav_shadow').hasClass('shadow')) {
            $('#nav_shadow').removeClass("shadow")
        } else {
           $('#nav_shadow').addClass("shadow")  
        }
        if($('body').hasClass('scroll_body')) {
            $('body').removeClass('scroll_body')
        } else {
            $('body').addClass('scroll_body')
        }
       
    });

    $('#toggle').on('click', function(){
        
        $('.toggle_dark_left').toggle();
        $('.toggle_light_right').toggle();
        if($('body').hasClass('dark')){
            $('body').removeClass('dark');
            localStorage.setItem('theme', 'light');
        } else {
            $('body').addClass('dark');
            $('#nib').attr('src', 'img/nib_for_dark.svg' )
            localStorage.setItem('theme', 'dark');
        }


    });
    
    $('#id_link_dropdown').on('click', function(){
        $('.dropdown-content').toggle();
        $('.row_down').toggle();
        $('.row_up').toggle();
      
              
    })
   /* $('.dropdown-content').mouseover(function(){
        $('.dropdown-content').toggle();
    })*/
    
    $('#button_view_footer').on('click', function(){
        $('#select_lang_button').toggle();
        $('.row_down').toggle();
        $('.row_up').toggle();
              
    })
    if(select_lang === "English"){
        $('#select_english').css('display', 'none');
        $('#select_english_footer').css('display', 'none')
    } else {
        $('#select_russian').css('display', 'none');
        $('#select_russian_footer').css('display', 'none')
    }

    $('.how_it_works_header').on('click', function(){
        $('.how_it_works_drop').slideToggle(1000);
        $('.how_it_works_header .row_down').toggle();
        $('.how_it_works_header .row_up').toggle()
      
        
    })
    $('#about_link_menu').on('click', function(){
         $('body').removeClass('scroll_body');
         $('#nav_shadow').removeClass("shadow");
         $('#side-menu').prop('checked', false)
        
       

    })

    
})

