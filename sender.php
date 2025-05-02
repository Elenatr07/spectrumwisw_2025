<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "energotr07@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "from the site SpectrumWise";
    
    

	$msg="
    Name: $name /n
    Phone: $phone /n
    E-mai: $email /n
    Text: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

    
 
    
       
?>

