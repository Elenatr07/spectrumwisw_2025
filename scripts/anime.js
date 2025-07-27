
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

    var imgs= [
        "img/a1.png",
        "img/a2.png",
        "img/a3.png",
        "img/a4.png",
        "img/a5.png",
        "img/a6.png",
        "img/a7.png",
        "img/a8.png",
        "img/a8_1.png",
        "img/a8_2.png",
        "img/a8_1.png",
        "img/a8_2.png",
        "img/a8_3.png",
        "img/a9.png",
        "img/a10.png",
        "img/a11.png"

    ]
    counter = 0;
    setInterval(function() {
        if ($("#dropbtn").hasClass("rus")){
            $('#anime_main_rus').attr('src', '../'+ imgs[counter++]);
        } else (
          $('#anime_main').attr('src', imgs[counter++]) 
        );   
    
    if(counter == imgs.length) {
        counter = 0;
    }
}, 380);
    
})
    





