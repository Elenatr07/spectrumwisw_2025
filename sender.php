<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    
     if(isset($_POST['name']) && (isset($_POST['email']) && (isset($_POST['text'])) && (isset($_POST['services'])))) {
    
    $name = strip_tags($_POST['name']) ;
    $nameFild = "<b>Name of sender:</b>";

    $phone = strip_tags($_POST['phone']);
    $phoneFild = "<b>Phone of sender:</b>";

    $email = strip_tags($_POST['email']);
    $mailFild = "<b>Email:</b>";

    $text = strip_tags($_POST['text']) ;
    $textFild = "<b>Message:</b>";

    $service = strip_tags($_POST['services']);
    $serviceFild = "<b>Service::</b>";

	$to = "energotr07@yandex.ru"; 
    $sendform = "$email";	
    $date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
    $subject = "from the site SpectrumWise";
    $headers = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $message = "$nameFild $name
                $mailFild $email
                $phoneFild $phone
                $serviceFild $service
                $textFild $text
                ";
	

	
$send =	mail($to, $subject, $message, $headers);
    }
}
   
   

  

    
 
    
       
?>

