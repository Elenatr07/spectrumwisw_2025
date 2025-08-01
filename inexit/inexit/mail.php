<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['date'])) {$date = $_POST['date'];}
    if (isset($_POST['budget'])) {$budget = $_POST['budget'];}
   
    if (isset($_POST['text'])) {$text = $_POST['text'];}

    $to = "energotr07@yandex.ru"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "$email"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>Sender name:</b> $name <br><b>Phone:</b> $phone <br><b>Email:</b> $email <br><b>budget:</b> $budget <br><b>Message:</b> $text" ;
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Thank you! We will contact you within the next 2 business hours</p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>Error! Messege not sent</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Try again";
}
?>
 <meta http-equiv="refresh" content="3; url=index.html">