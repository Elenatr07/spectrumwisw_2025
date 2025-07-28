
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

    let imgs= [
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
        "img/a11.png",
        "img/a12.png",
        "img/a13.png",
        "img/a13.png",
        "img/a13.png",
        "img/a13.png",


    ]
    let imgesSlide1 = [
        "img/d1.png",
        "img/d2.png",
        "img/d3.png",
        "img/d4.png",
        "img/d5.png",
        "img/d6.png",
        "img/d7.png",
        "img/d8.png",
        "img/d9.png",
        "img/d10.png",
        "img/d9.png",
        "img/d8.png",
        "img/d7.png",
        "img/d6.png",
        "img/d5.png",
        "img/d4.png",
        "img/d3.png",
        "img/d2.png",
    ]
    let imgesSlide2 = [
        "img/e1.png",
        "img/e2.png",
        "img/e3.png",
        "img/e4.png",
        "img/e5.png",
        "img/e6.png",
        
    ]
    let imgesSlide3 = [
        "img/j1.png",
        "img/j2.png",
        "img/j3.png",
        "img/j4.png",
        "img/j5.png",
        "img/j6.png",
        "img/j7.png",
    ]

    counter = 0;
    counter1 = 0;
    counter2 = 0;
    counter3 = 0
    setInterval(function() {
        if ($("#dropbtn").hasClass("rus")){
            $('#anime_main_rus').attr('src', '../'+ imgs[counter++]);
            $('#anime_slader1_rus').attr('src', '../'+ imgesSlide1[counter1++])
        } else (
          $('#anime_main').attr('src', imgs[counter++]),
          $('#anime_slader1').attr('src', imgesSlide1[counter1++])
         
        );  
    
    if(counter == imgs.length) {
        counter = 0;
    }
     if(counter1 == imgesSlide1.length) {
        counter1 = 0;
    }
    
}, 380);

setInterval(function(){
    if ($("#dropbtn").hasClass("rus")){
        $('#nib_rus').attr('src', '../' + imgesSlide2[counter2++]) 
        $("#anime_slider3_rus").attr('src', '../' +imgesSlide3[counter3++])
    } else (
        $('#nib').attr('src', imgesSlide2[counter2++]),
        $("#anime_slider3").attr('src', imgesSlide3[counter3++])
    );
     if(counter2 == imgesSlide2.length) {
        counter2 = 0;
    }
     if(counter3 == imgesSlide3.length) {
        counter3 = 0;
    }
}, 400)
    
})
    





