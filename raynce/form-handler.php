<?php
/* Проверяем, существуют ли переменные, которые передала форма обратной связи.
Если не существуют, то мы их создаем.
Если форма передала пустые значения, мы их удаляем */
if (isset($_POST['first_name'])) {$firstName = $_POST['first_name']; if ($firstName == '') {unset($firstName);}}
if (isset($_POST['last_name'])) {$lastName = $_POST['last_name']; if ($lastName == '') {unset($lastName);}}
if (isset($_POST['location'])) {$location = $_POST['location']; if ($location == '') {unset($location);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['phone'])) {$phone = $_POST['phone']; if ($phone == '') {unset($phone);}}
if (isset($_POST['message'])) {$message = $_POST['message']; if ($message == '') {unset($message);}}
if (isset($_POST['captcha_validation'])){$captcha_validation = $_POST['captcha_validation']; if ($captcha_validation == '') {unset($captcha_validation);}}
if (isset($_POST['captcha'])){$captcha = $_POST['captcha'];};
if (isset($_POST['formInfo'])){$formInfo = $_POST['formInfo'];};

/* Проверяем, заполнены ли все поля */
if (isset($firstName) && isset($lastName) && isset($location) && isset($email) && isset($phone)&& isset($message) && isset($captcha_validation))
{

/* Проверяем правильность ввода капчи */
if ($captcha == $captcha_validation)
{

/* если капча верна, отправляем сообщение */
/* Настройки сообщения */
$address = "energotr07@yandex.ru";
$sub = "Order from RAYNCE Site.";
$mes = "First name: $firstName \r\n Last name: $lastName \r\n E-mail: $email \r\n Phone: $phone \r\n Location: $location \r\n Messege: \r\n $message \r\n formInfo: $formInfo";

/* Уведомление об отправке письма */
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\n From:$email");
if ($verify == 'true')
{
    echo '<script language="javascript">';
    echo 'alert("message successfully sent")';
    echo '</script>';
}
else
{
    echo '<script language="javascript">';
    echo 'alert("Message not sent")';
    echo '</script>';
  
}
}
else
{
    echo '<script language="javascript">';
    echo 'alert("You entered the numbers from the picture incorrectly")';
    echo '</script>';

}

}
else
{
    echo '<script language="javascript">';
    echo 'alert("You have not filled in all the fields!")';
    echo '</script>';

}
?>
 <meta http-equiv="refresh" content="1; url=index.php">