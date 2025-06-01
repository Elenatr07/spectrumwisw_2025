
function scroling (){
    let height = $(window).scrollTop();
    let width = $(window).width()
   //console.log("height", height)
    //console.log("width", width)

   if(height > 900) {
    $('#img1').addClass('anime_img1');
    $('#img1').removeAttr('hidden');
    $('#img2').addClass('anime_img2');
    $('#img2').removeAttr('hidden');
    $('#img3').addClass('anime_img3');
    $('#img3').removeAttr('hidden')
    
   }
    

        
}

$(window).scroll(function(){
	scroling();
    
});
$(document).ready(function(){
    scroling();
    
})



