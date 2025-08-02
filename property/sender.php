<?php
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $email = $_POST['email'];
    $text = 'This customer filled out the feedback form from the site and asked to contact him.';
   

	$to = "energotr07@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Message from the site Sehgal Real Estate from <$name> <$email> <$data> <$time>"    ;
    
    

	$msg="
    Text: $text 	
    Name: $name
    Phone: $tel 
    E-mai: $email";
    
	mail($to, $subject, $msg, "From: $from ");

    
 
    
       
?>

