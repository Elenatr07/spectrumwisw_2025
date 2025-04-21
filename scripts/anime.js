
function scroling (){
    let height = $(window).scrollTop();
    let width = $(window).width()
   console.log("height", height)
    console.log("width", width)

   if(height > 900) {
    $('#img1').addClass('anime_img1');
    $('#img1').removeAttr('hidden');
    $('#img2').addClass('anime_img2');
    $('#img2').removeAttr('hidden');
    $('#img3').addClass('anime_img3');
    $('#img3').removeAttr('hidden')
    
   }
    
    /*if((width <600)) {
        $('.vehicle_central_wrapper.commuter.premio img').attr("src", 'img/seat_map14_1.png' )
        $('.vehicle_central_wrapper.reborn img').attr("src", 'img/seat_map6_1.png' )
    } 
   if(((width > 1400)) && height>300 && height<700){
        $('.service_central_item').removeClass('hidden')
       
    } else if(((width > 1025) &&(width <=1400)) && height>200){
        $('.service_central_item').removeClass('hidden')
        
    }  else if(((width > 700) &&(width <=1024)) ){
        $('.service_central_item').removeClass('hidden')
    }
    else if(((width >= 320) &&(width <=700)) && height>300){
        $('.service_central_item').removeClass('hidden')
    }

    if(((width > 1000)) && height>500 && height<1500){
            $('#blocks_1').removeClass('hidden_block_1');
    }
   
   else if (((width >=769 ) &&(width <=1024))){
        $('#blocks_1').removeClass('hidden_block_1');
       
    }
    else if (((width >=600) && (width <=768)) && height>700 && height<2100){
        $('#blocks_1').removeClass('hidden_block_1');
       
    }
    else if (((width >=376)&&(width <=599)) && height>750 && height<2200){
        $('#blocks_1').removeClass('hidden_block_1');
        
    }
    else if (((width >=320)&&(width <=375)) && height>600 && height<2100){
        $('#blocks_1').removeClass('hidden_block_1');
        
    }else {
         $('#blocks_1').addClass('hidden_block_1');
        // $('.service_central_item').addClass('hidden')
         
    }
    if ((width <=1024) && clickOnButton == true){
    
    
        $('.vehicle3').css('display', 'block');
        $('.vehicle2').css('display', 'block')
        $('.vehicle1').css('display', 'block');
        $('.cssanimation').css('display', 'block')
    } 
    if ((width >1025) && height >= 1700 && clickOnButton == true){
    
    
        setTimeout(function() {
            $('.vehicle3').css('display', 'block');
            clickOnButton = false;  
         
          }, 1200);
           setTimeout(function() {
             $('.vehicle2').css('display', 'block')
           }, 600);
           setTimeout(function() {
             $('.vehicle1').css('display', 'block');
           
           }, 200);
            animateSequence()
            
        } */
}

$(window).scroll(function(){
	scroling();
    
});
$(document).ready(function(){
    scroling();
    
})



/* $('#img1').fadeIn(4000);*/