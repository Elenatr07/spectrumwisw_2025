
var lang_default = $('#dropbtn').text('English');
var lang_default_footer = $('#drop_footer_lang').text('English');
    var select_lang = lang_default.text();
    console.log(select_lang);    
    $('.toggle_dark_left').css('display', 'none');
    $('.toggle_light_right').css('display', 'block');
    $('.dropdown-content').css('display', 'none');
 
   
 
   
$(document).ready(function() {

    
    

    $('#side-menu').on('click', function(){
        if( $('#nav_shadow').hasClass('shadow')) {
            $('#nav_shadow').removeClass("shadow")
        } else {
           $('#nav_shadow').addClass("shadow")  
        }
       
    });

    $('#toggle').on('click', function(){
        $('.toggle_dark_left').toggle();
        $('.toggle_light_right').toggle();
        if($('body').hasClass('dark')){
            $('body').removeClass('dark');
        } else {
            $('body').addClass('dark');
            $('#nib').attr('src', 'img/nib_for_dark.svg' )
        }


    });
    
    $('#id_link_dropdown').on('click', function(){
        $('.dropdown-content').toggle();
        $('.row_down').toggle();
        $('.row_up').toggle();
              
    })
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

})


