$(document).ready(function(){
    
    var list = $('.filter_item_img')
    var numToShow = 6;
    var button = $("#see_more_button");
    var buttonText = $('#see_more_txt')
    var numInList = list.length;
    var numInListFilter = list.filter('.active.hidden');
    var isShowing = true;
    
    var count = 0
    $('#see_more_txt').text('See more')
    if (numInList > numToShow && !$(".button_block").hasClass("selected")) {
        button.show();
       
       
    }  else if ($(".button_block").hasClass("selected")) {
        button.hide();
       
    }
    
    if($('.filter_item_img').filter('.active.hidden').length == 0 && $(".button_block").hasClass("selected")) {
        button.hide();
        
    }
    
    list.hide();
  
    var hasSelected = false
    
    $('.filter_buttons .button_block').on('click', function( ){
        count = 0;
        $('.filter_item_img ').removeClass('active')
        $.scrollTo(`#anchor_filter`, 1000);
        let item = $(".img_block_items .filter_item_img");
        let category = $(this).attr("data-filter");
        var items = $('.'+category);
        $('.filter_buttons .button_block').removeClass('selected');
        $(this).addClass("selected")
        if($(".button_block").hasClass("selected")){
            $(".button_block").removeClass("selectrd");
            $(this).addClass("selected")
            hasSelected = true;
         
       
        } else (
            $(this).addClass("selected")
        //    console.log(S(this).hasClass('selected'))
        )
       
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
    
          if($('.filter_item_img').filter('.active.hidden').length == 0 && $(".button_block").hasClass("selected")) {
            button.hide();
          //  console.log ($('.filter_item_img').filter('.active.hidden').length)
          //  console.log($('.filter_item_img').filter('.active.hidden').length)
        } else if ($('.filter_item_img').filter('.active.hidden').length > 0 && $(".button_block").hasClass("selected") ){
            buttonText.text("See more");  
            isShowing = true;
            button.show();
        }
        else {
            button.show();
        }
      
    })

   
    
    
    list.slice(0, numToShow).show();
    button.click(function() {
        var hasClassCard = $('.filter_item_img').hasClass('active');
        var showing = list.filter(':visible').length;
        var asd = list.filter('.active.hidden');
         
                
        var activeCard = $('.filter_item_img').filter('.active')
        var activeCardFilter = activeCard.filter(':visible').length
        count++
            b = (numToShow * count)    
            href1 = list.eq(b).attr('id')
            href2 = activeCard.eq(b).attr('id')
            href3 = activeCard.eq(0).attr('id')
          //  console.log("href1:" +href1, 'href2:' +href2, 'count:' +count)
        if(!hasClassCard && isShowing && !hasSelected){
            
            
            list.slice(showing - 1, showing + numToShow).fadeIn(100,onFadeComplete);
            $.scrollTo(`#${href1}`, 1000)
        } else if (!hasClassCard && !isShowing && !hasSelected ){
            list.hide();
            list.slice(0, 6).fadeIn(100);
            isShowing = true;
            buttonText.text("See more");
           $.scrollTo(`#anchor_filter`, 1000)
            count = 0
           
            
        }
        else if (hasSelected && isShowing && hasClassCard){
                
            activeCard.slice(activeCardFilter-1, activeCardFilter + numToShow).fadeIn(100,onFadeComplete).removeClass('hidden');
            $.scrollTo(`#${href2}`, 1000)
         
             
        } 
        else if (hasSelected && !isShowing && hasClassCard) {
             count = 0
            list.hide();
            activeCard.slice(0, 6).fadeIn(100, onFadeComplete);
            isShowing = false;
            $.scrollTo(`#${href3}`, 1000)  
            
        }
       
        else {
            asd.hide();
            asd.slice(0, 6).fadeIn(100);
            isShowing = true;
            buttonText.text("See more");
           
        }
            
           
    } );

    function onFadeComplete(){
        var nowShowing = list.filter(':visible').length;
        var asd1 = list.filter('.active.hidden');
        var showingAfterFilter1 = asd1.filter(':visible').length
        var activeCard = $('.filter_item_img').filter('.active')

        if(nowShowing == numInList && isShowing && !$(".button_block").hasClass("selected") ){
            isShowing = false;
            buttonText.text("See less");  
            count = 0
            
          
        }
     
      else if (isShowing && activeCard.length == nowShowing && $(".button_block").hasClass("selected")){
            buttonText.text("See less");  
            isShowing = false;
           count=0
          
        }
         else if (activeCard.length == numInListFilter && isShowing && $(".button_block").hasClass("selected")){
            buttonText.text("See less");  
            
            isShowing = false;
            console.log ('numInListFilter:' +numInListFilter)
            count=0

        } else if ($('.filter_item_img').filter('.active.hidden').length  ){
           
        }
          
        if(nowShowing == numToShow){
        
          buttonText.text("See more");
          isShowing = true;
         
        }  
        
    }
    
    
})

//Filter
    /*
     var list = $(".partners__ul li");
    var numToShow = 4;
    var button = $(".partners__button__a");
    var numInList = list.length;
    var isShowing = true;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
        var showing = list.filter(':visible').length;
        if(isShowing){
        list.slice(showing - 1, showing + numToShow).fadeIn(100,onFadeComplete);
        }
        else{
        list.slice(showing - numToShow, numInList).fadeOut(100,onFadeComplete);
        }
    
    
    });
  
    function onFadeComplete(){
    var nowShowing = list.filter(':visible').length;
   
    if(nowShowing == numInList && isShowing){
        isShowing = false;
        button.text("Show less");  
    }
    else if(isShowing){
        button.text("Show even more");
    }
    
    if(nowShowing == numToShow){
      button.text("Show more");
      isShowing = true;
    }  
    
    }
    */