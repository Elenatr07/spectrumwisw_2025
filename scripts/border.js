





$(document).ready(function(){
   

    $('#formname').on('click', function(){
        $('#formname').focus()
    if ($('#formname').is(':focus')) {
        $('#border_name').addClass('border_active');
        $('#border_name').removeClass('border_error')
    
      } 
    })
    $('#formemail').on('click', function(){
        $('#formemail').focus()
    if ($('#formemail').is(':focus')) {
        $('#border_email').addClass('border_active');
        $('#border_email').removeClass('border_error')
        
      } 
    })
    $('#formtext').on('click', function(){
        $('#formtext').focus()
    if ($('#formtext').is(':focus')) {
        $('#border_textarea').addClass('border_active');
         $('#border_textarea').removeClass('border_error')
    
      } 
    })
    
    $('#formname').mouseover(function(){
        $('#border_name').addClass('border_active');
       
         
    })
    $('#formemail').mouseover(function(){
        $('#border_email').addClass('border_active');
        
         
    })
    $('#formtext').mouseover(function(){
        $('#border_textarea').addClass('border_active');
       
         
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
    $('#border_textarea').on('change', function(){
        if($('#formtext').val().length == 0){
            $('#formtext').removeClass('border_active')
        } else {
            $('#formtext').addClass('border_active');
            
        }
       
    })
    $('#formname').mouseout(function(){
        if($('#formname').val().length == 0 && $('#border_name').hasClass('checked') ){
            $('#border_name').removeClass('border_active')
            $('#border_name').addClass('border_error')
            
       
        } 
        if ($('#formname').val().length == 0){
            $('#border_name').removeClass('border_active');
            
        }
    })
    $('#formemail').mouseout(function(){
        if($('#formemail').val().length == 0 && $('#border_email').hasClass('checked')){
            $('#border_email').removeClass('border_active')
            $('#border_email').addClass('border_error')
        } 
        if ($('#formemail').val().length == 0){
            $('#border_email').removeClass('border_active')
        }
    })
    $('#formtext').mouseout(function(){
        if($('#formtext').val().length == 0  && $('#border_textarea').hasClass('checked')){
            $('#border_textarea').removeClass('border_active')
            $('#border_textarea').addClass('border_error')
        } 
        if($('#formtext').val().length == 0) {
            $('#border_textarea').removeClass('border_active')
        }
    })
    $('#send-form').on('click', function(){
        
        if ($('#formname').hasClass('error')){
            $('#border_name').addClass('border_error').addClass('checked')
       
        } 
        if ($('#formemail').hasClass('error')){
            $('#border_email').addClass('border_error').addClass('checked')
        }
        if ($('#formtext').hasClass('error')) {
            $('#border_textarea').addClass('border_error').addClass('checked')
        }
   
    })
    
    
})



    