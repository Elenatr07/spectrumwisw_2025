<p class="enter_captcha">Enter the numbers from the picture: <br>
    <?php
    $i=1;
    do
    {
    $num[$i] = mt_rand(0,9);
    echo "<img src='img/captcha/".$num[$i].".png' border='0' align='bottom' vspace='5px' width='45px' heigth='45px'>";
    $i++;
    }
    while ($i<6);
    $captcha = $num[1].$num[2].$num[3].$num[4].$num[5];
    ?>
    <input name="captcha" hidden value="<?php echo $captcha ;?>">

    </p>