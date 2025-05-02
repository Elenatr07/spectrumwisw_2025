

function overColor1(){
    document.getElementById("border_email").classList.add("border_input");
}

function normalColor1(){
    document.getElementById("border_email").classList.remove("border_input");
}

function overColor2(){
    document.getElementById("border_textarea").classList.add("border_textarea");
}

function normalColor2(){
    document.getElementById("border_textarea").classList.remove("border_textarea");
}


$(document).ready(function(){
   

    $('#formname').on('click', function(){
        $('#formname').focus()
    if ($('#formname').is(':focus')) {
        $('#border_name').addClass('border_active');
    
      } 
    })
    $('#formemail').on('click', function(){
        $('#formemail').focus()
    if ($('#formemail').is(':focus')) {
        $('#border_email').addClass('border_active');
        
      } 
    })
    
    $('#formname').mouseover(function(){
        $('#border_name').addClass('border_active');
       
         
    })
    $('#formemail').mouseover(function(){
        $('#border_email').addClass('border_active');
        
         
    })
    $('#border_name').on('change', function(){
        if($('#formname').val().length == 0){
            $('#border_name').removeClass('border_active')
        } else {
            $('#border_name').addClass('border_active');
           
        }
       
    })
    $('#border_email').on('change', function(){
        if($('#formemail').val().length == 0){
            $('#border_email').removeClass('border_active')
        } else {
            $('#border_email').addClass('border_active');
            
        }
       
    })
    $('#formname').mouseout(function(){
        if($('#formname').val().length == 0){
            $('#border_name').removeClass('border_active')
        } 
    })
    $('#formemail').mouseout(function(){
        if($('#formemail').val().length == 0){
            $('#border_email').removeClass('border_active')
        } 
    })
    
})



    