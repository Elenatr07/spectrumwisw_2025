
var lang_default = $('#dropbtn').text('English');
var lang_default_footer = $('#drop_footer_lang').text('English');
    var select_lang = lang_default.text();
    //console.log(select_lang);    
    $('.toggle_dark_left').css('display', 'none');
    $('.toggle_light_right').css('display', 'block');
    $('.dropdown-content').css('display', 'none');
 
   $('.filter_item_img').slice(0, 6).show();
    let count = 0;
    var itemsCount = 6,
    itemsMax = $('.filter_item_img').length;
    var pagination = 6;
    per = 6,
    a= 1,
               
    total = 0;
    total1 =0
    total2 =0

/*function showNextItems() {
    console.log('start show card')
    
    for (var i = itemsCount; i < (itemsCount + pagination); i++) {
        $('.filter_item_img:eq(' + i + ')').show();
       // console.log(i, itemsCount ) 
         $.scrollTo(`#f${itemsCount+1}`);
       console.log("itemsCount:" +itemsCount, 'i:'+i) 
       
    }
    itemsCount += pagination;
      if (itemsCount > itemsMax) {
       // $('#see_more_button').hide();
       console.log("itemsCount:" +itemsCount, 'i:'+i) 
    }
};*/

//showNextItems();


 
   
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
    //Filter
    $('#see_more_txt').text('See more')
        
    $('.filter_buttons .button_block').on('click', function( ){
        $.scrollTo(`#anchor_filter`, 500);
        let item = $(".img_block_items .filter_item_img");
        let category = $(this).attr("data-filter");
        var items = $('.'+category);
        $('.filter_item_img').removeClass('active')
        $(".button_block").removeClass("selectrd");
        $(this).addClass("selected");
        item.fadeOut(200);
        hasActive = $(item).hasClass('active')
        if(!hasActive){
            $(item).removeAttr('data')
        }
        $(items).addClass('hidden');
                        
            if ($(item).hasClass(category)) {
                        
            $(items).slice(0, pagination).fadeIn(200).removeClass('hidden')
            $(items).attr('data', category).addClass('active')
        
            
        }   
      
    })
   
                
    $('#see_more_button').on('click', function (e) {
        e.preventDefault();
        noFilter = $('.filter_item_img')
     
        
       
        let filterData = $('.active.hidden');
        let hasClassCard = $('.filter_item_img').hasClass('active')
        if(!hasClassCard){
            count++
            
            b = (pagination * count)
            href = noFilter.eq(b).attr('id')
           for (var i = itemsCount; i < (itemsCount + pagination); i++) {
                $('.filter_item_img:eq(' + i + ')').show();
            }
             
             $.scrollTo(`#${href}`, 1000);
             itemsCount += pagination;
            if (itemsCount > itemsMax) {
                $('#see_more_txt').text('See less')
               // $('#see_more_button').hide();
               console.log('final') 
            }
        } else  { 
            
        if(pagination > total < filterData.length){
            
            //console.log(filterData.next())
            filterData.slice(0, pagination).fadeIn(200).removeClass('hidden')
                //  $(this)[total >= filterData.length ? 'hide' : 'show']();
               
            $.scrollTo(`#${filterData.eq(0).attr('id')}`, 1000);
            
            console.log('final-2')
            //console.log (`#${filterData.eq(0).attr('id')}`)
           } else { 
              filterData.slice(0, pagination).fadeIn(200).removeClass('hidden')
              $.scrollTo(`#${filterData.eq(0).attr('id')}`, 1000);
              
                       
           }
              
                
    }
 

    
   
  
    })


    
})

