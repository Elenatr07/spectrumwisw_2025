
var lang_default = $('#dropbtn').text('English');
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
        $('.toggle_light_right').toggle()


    });
    
    $('#id_link_dropdown').on('click', function(){
        $('.dropdown-content').toggle();
        $('.row_down').toggle();
        $('.row_up').toggle();
              
    })
    if(select_lang === "English"){
        $('#select_english').css('display', 'none');
    } else {$('#select_russian').css('display', 'none')}

})


