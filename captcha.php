<p class="enter_captcha title_form">Enter the numbers from the picture: </p>
    <?php
    $i=1;
    
    echo "<div class='captcha_img'>";
    do
    {
    $num[$i] = mt_rand(1,9);
    
    echo "<img src='img/captcha/num$num[$i].png' border='0' align='bottom' vspace='5px' width='45px' heigth='45px'>";
   
    $i++;
    }
    
    while ($i<6);
    $captcha = $num[1].$num[2].$num[3].$num[4].$num[5]; 
    echo "</div>";
    ?>
    <input class="captcha_field" name="captcha"  value="<?php echo $captcha ;?>">

    