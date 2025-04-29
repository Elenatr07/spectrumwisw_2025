$(document).ready(function(){
    
    var list = $('.filter_item_img')
    var numToShow = 6;
    var button = $("#see_more_button");
    var numInList = list.length;
    var numInListFilter = list.filter('.active.hidden');
    var isShowing = true;
    var filterData = $('.hidden.active');
    if (numInList > numToShow && !$(".button_block").hasClass("selected")) {
        button.show();
        console.log('have')
       
    }  else if ($(".button_block").hasClass("selected")) {
        button.hide();
        console.log('dont have')
    }
    
    if($('.filter_item_img').filter('.active.hidden').length == 0 && $(".button_block").hasClass("selected")) {
        button.hide();
        console.log ($('.filter_item_img').filter('.active.hidden').length)
    }
    
    list.hide();
  
    var hasSelected = false
    
    $('.filter_buttons .button_block').on('click', function( ){
        $('.filter_item_img ').removeClass('active')
        $.scrollTo(`#anchor_filter`, 500);
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
          console.log ($('.filter_item_img').filter('.active.hidden'))  
          console.log ($('.filter_item_img').filter('.active.hidden').length)
          console.log ($(".button_block").hasClass("selected"))

          console.log($(".button_block").hasClass("selected"))
          if($('.filter_item_img').filter('.active.hidden').length == 0 && $(".button_block").hasClass("selected")) {
            button.hide();
            console.log ($('.filter_item_img').filter('.active.hidden').length)
            console.log($('.filter_item_img').filter('.active.hidden').length)
        } else {
            button.show();
        }
      
    })

  
   
    
    
    
    list.slice(0, numToShow).show();
    button.click(function() {
        var hasClassCard = $('.filter_item_img').hasClass('active');
        var showing = list.filter(':visible').length;
        var asd = list.filter('.active.hidden');
        var showingAfterFilter = asd.filter(':visible').length
       // console.log(asd.filter(':visible'))
        
        var showingFilter = asd.length
        var activeCard = $('.filter_item_img').filter('.active')
        var activeCardFilter = activeCard.filter(':visible').length

        if(!hasClassCard && isShowing && !hasSelected){
        list.slice(showing - 1, showing + numToShow).fadeIn(100,onFadeComplete);
        } else if (!hasClassCard && !isShowing && !hasSelected ){
            list.hide();
            list.slice(0, 6).fadeIn(100);
            isShowing = true;
            button.text("Show more");
            console.log('slice 0 - 6')
            
        }
        else if (hasSelected && isShowing && hasClassCard){
                
            activeCard.slice(activeCardFilter-1, activeCardFilter + numToShow).fadeIn(100,onFadeComplete).removeClass('hidden');
           console.log('+6', showingAfterFilter, (showingAfterFilter + numToShow))
         // console.log (activeCard)
        //  console.log ('activeCardFilter' +activeCardFilter)
             
        } else if (hasSelected && isShowing && showingFilter < numToShow  && hasClassCard ){
            console.log("hksaljLJ")
            console.log(asd)
            onFadeComplete()
        }
        else if (hasSelected && showingAfterFilter < asd.length && isShowing){
            console.log ('less')
        } else if (hasSelected && !isShowing && hasSelected) {
            console.log ('what')
          
            
            list.hide();
            console.log (activeCard)
           activeCard.slice(0, 6).fadeIn(100, onFadeComplete);
            isShowing = false;
            
           
           // isShowing = true;
        }
       
        else {
            asd.hide();
            asd.slice(0, 6).fadeIn(100);
            isShowing = true;
            button.text("Show more");
           console.log('end')
        }
            
           
       

          
       
        } 
      
      
       
    
    
    );

    function onFadeComplete(){
        var nowShowing = list.filter(':visible').length;
        var asd1 = list.filter('.active.hidden');
        var showingAfterFilter1 = asd1.filter(':visible').length
        var activeCard = $('.filter_item_img').filter('.active')
        
       // console.log(activeCard)
        // console.log(asd1)
        if(nowShowing == numInList && isShowing ){
            isShowing = false;
            button.text("Show less");  
            console.log('Show less', 'nowShowing:' +nowShowing )
            
          
        }
        else if(showingAfterFilter1 == numInList && isShowing){
           // button.text("Show even more");
            console.log ('Show ')
        }
        else if(isShowing && activeCard.length > numToShow ){ 
            button.text("Show even more");
            console.log ('Show even more', 'nowShowing:' +nowShowing )
        

        } else if (activeCard.length == numInListFilter && isShowing){
            button.text("Show less");  
            console.log('Show less')
            isShowing = false;
            console.log ('numInListFilter:' +numInListFilter)

        } else if (asd1.length = 0){
           
        }
       
        
     
        
        if(nowShowing == numToShow){
        //    list.slice(0, 6).fadeIn(100,onFadeComplete);
          button.text("Show more");
          isShowing = true;
          console.log("isShowing:" +isShowing)
        }  
        
    }
    
    
})