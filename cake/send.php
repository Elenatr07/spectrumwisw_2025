<?php
if (isset ($_POST['contactFF'])) {
  $to = "energotr07@yandex.ru"; // поменять на свой электронный адрес
  $from = $_POST['contactFF'];
  $subject = "Ordering an individual cake from the website ".$_SERVER['HTTP_REFERER'];
  $message = "Имя: ".$_POST['nameFF']."\nPhone: ".$from."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['textFF'];
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['fileFF']['name']);$i++) {
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'][$i])));
         $filename = $_FILES['fileFF']['name'][$i];
         $filetype = $_FILES['fileFF']['type'][$i];
         $filesize += $_FILES['fileFF']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo('<center><p class="success">Thank you! We will contact you as soon as possible </p></center>');
  } else {
    
    echo '<script language="javascript">';
    echo 'alert("Sorry, the email was not sent. All files are larger than 10 MB. Message not sent")';
    echo '</script>';
   
  }
}
?> 
<meta http-equiv="refresh" content="5; url=index.html">