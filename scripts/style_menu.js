
var lang_default = $('#dropbtn').text('English');
var lang_default_footer = $('#drop_footer_lang').text('English');
    var select_lang = lang_default.text();
    //console.log(select_lang);    
    $('.toggle_dark_left').css('display', 'none');
    $('.toggle_light_right').css('display', 'block');
    $('.dropdown-content').css('display', 'none');
 
    $('.filter_item_img').hide();
    var itemsCount = 0,
    itemsMax = $('.filter_item_img').length;
    var pagination = 6;

function showNextItems() {
    
    for (var i = itemsCount; i < (itemsCount + pagination); i++) {
        $('.filter_item_img:eq(' + i + ')').show();
       
    }
    itemsCount += pagination;
      if (itemsCount > itemsMax) {
        $('#see_more_button').hide();
    }
};

showNextItems();


 
   
$(document).ready(function() {

    $('#see_more_button').on('click', function (e) {
        e.preventDefault();
        showNextItems();
    });
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
    //Filter

    $(function(){
        $('#see_more_txt').text('See more')
        
        $('.filter_buttons .button_block').on('click', function(){
            let category = $(this).attr("data-filter");
            $('#see_more_button').off( "click" ) //отключение функции, чтобы не задваивать активные элементы при клике

            $('.filter_item_img').removeClass('active')
            $(".button_block").removeClass("active");
          //  $(this).addClass("active");
            let item = $(".img_block_items .filter_item_img");
            var items = $('.'+category);
            item.fadeOut("slow");
            $(items).addClass('hidden');
            let hidden = $('.'+category+'.hidden');
            var filter_items = $(items)
            per = 6,
                i = 1,
                total = 0;
                
             if ($(item).hasClass(category)) {
                          
                $(items).slice(0, pagination).fadeIn(200).addClass('active').removeClass('hidden')
                //console.log(hidden.length)
                $(this)[total >= filter_items.length ? 'hide' : 'show']();
               
             
                }   
                $('#see_more_button').on('click', function(){
                   
                    //console.log(category)
                    total = per * (i++);
                    hidden.slice(0, total).fadeIn(200).addClass('active').removeClass('hidden')
                    $(this)[total >= hidden.length ? 'hide' : 'show']();
                 
                    
                }).click();
          //   console.log(hidden)   
           
           
            
       
          
      
            
        }) 
     
        
    })


    
   
  
})


