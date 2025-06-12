<?php
// Проверка того, что есть данные из капчи
if (isset($_POST["g-recaptcha-response"])) {
   
    // URL куда отправлять запрос для проверки
    $url = "https://www.google.com/recaptcha/api/siteverify";
    // Ключ для сервера
    $key = "6LdH5U0nAAAAAAZCyMQj9TRxQpUqnwH6mWSbVGHf";
    // Данные для запроса
    $query = array(
        "secret" => $key, // Ключ для сервера
        "response" => $_POST["g-recaptcha-response"], // Данные от капчи
        "remoteip" => $_SERVER['REMOTE_ADDR'] // Адрес сервера
    );
 
    // Создаём запрос для отправки
    $ch = curl_init();
    // Настраиваем запрос 
    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    curl_setopt($ch, CURLOPT_POST, true); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, $query); 
    // отправляет и возвращает данные
    $data = json_decode(curl_exec($ch), $assoc=true); 
    // Закрытие соединения
    curl_close($ch);
 
    // Если нет success то
    if (!$data['success']) {
        // Останавливает программу и выводит "ВЫ РОБОТ"
        exit("You are bot");
    } else {
        // Иначе выводим логин и Email
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST['name']) && (empty($_POST['email']) || empty($_POST['confirmation']))){
              echo '<p class="fail">Error, you did not fill in all the required fields!</';
            } else{
              if (isset($_POST['name'])) {
                $name = strip_tags($_POST['name']);
                $nameFieldset = "<b>Name of sender:</b>";
              }
              if (isset($_POST['email'])) {
                $email = strip_tags($_POST['email']);
                $emailFieldset = "<b>Email:</b>";
              }
              if (isset($_POST['confirmation'])) {
                $confirm = strip_tags($_POST['confirmation']);
                $confirmFieldset = "<b>site order:</b>";
              }
              if (isset($_POST['formInfo'])) {
                $formInfo = strip_tags($_POST['formInfo']);
                $formInfoFieldset = "<b>subject: </b>";
              }
           
              $to = "energotr07@yandex.ru"; /*Укажите адрес, на который должно приходить письмо*/
              $sendfrom = "$email"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
              $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
              $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
              $headers .= "MIME-Version: 1.0\r\n";
              $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
              $headers .= "Content-Transfer-Encoding: 8bit \r\n";
              $subject = "$formInfo";
              $message = "$nameFieldset $name
                          $emailFieldset $email
                          $confirmFieldset $confirm
                          $formInfoFieldset $formInfo";
           
            $send = mail ($to, $subject, $message, $headers);
        
                 if ($send == 'true')
              {
              echo '<center><p class="success">Thank you! We will contact you as soon as possible </p></center>';
              }
              else 
              {
              echo '<center><p class="fail"><b>Error! Messege not sent. Please contact us by email info@Spectrumwise.tech.</b></p></center>';
              }
            }
         
    }
           
}
}
  ?>
  <meta http-equiv="refresh" content="5; url=buy_me.html">