
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//raynce/darkmode/dark.css">
    <link rel="stylesheet" href="//raynce/buyme/buy_me.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400&family=Josefin+Sans:wght@300&family=Josefin+Slab:ital,wght@0,300;0,400;0,600;1,500&family=Manrope:wght@400;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,100&display=swap" rel="stylesheet">

<title>RAYNCE</title>
</head>

<body>
<div class="buy_me_now"> <a href="buy_me.html" class="link_buy">Buy Me Now</a> </div> <!--only fo but_me_now-->
<div class="darkmode"> <a href="index.php" class="style_mode">View in Light Mode</a> </div> <!--only for style mode-->
    <div class="container_main"> 
        <div class="container_header" >

            <div class="header_block">
           
                <div class="header">
                        <div class="logo"><img src="//raynce/img/raynce.svg" alt=""></div>
                        <div class="phone call"><a href="tel:+4407543654256" class="link_phone">+4407543654256</a></div>
                </div>
                <div class="slogan_block">
                    <h3 class="title">New Thinking. New marketing</h3>
                    <p class="slogan_txt">We believe in the power of effective marketing to transform businesses. At Raynce, we help our clients unlock their full potential and achieve their marketing objectives."</p>
                     <a href="#contacts" class="header_button">Reach Out</a>
                     
                </div>
                
         </div>
        
        </div>
         <hr class="line_for_dark">
        
         <div class="offer_block">
            <div class="offer_block_container">
                <h3 class="title title_offer_block">What we Offer</h3>
                <div class="offer_items_block">
                     <div class="offer_item" >
                    <h4 class="offer_item_title">SEO</h4>
                    <p class="offer_item_txt">Boost your online visibility and drive organic traffic with our top-notch SEO services. Dominate search engine rankings and increase your website's reach today!</p>
                </div>
                <div class="offer_item" >
                    <h4 class="offer_item_title">Branding</h4>
                    <p class="offer_item_txt">Elevate your brand identity and leave a lasting impression on your audience with our exceptional branding services. Stand out from the competition and create a powerful brand story that resonates</p>
                </div>
                <div class="offer_item" >
                    <h4 class="offer_item_title">Content Marketing</h4>
                    <p class="offer_item_txt">Unlock the true potential of your brand with our expert content marketing solutions. Engage your audience, build trust, and drive conversions through compelling and valuable content</p>
                </div> 
                <div class="offer_item" >
                    <h4 class="offer_item_title">PPC</h4>
                    <p class="offer_item_txt">Maximize your online reach and drive targeted traffic with our result-driven PPC services. Get the most out of your advertising budget and achieve measurable success today</p>
                </div>
            </div>
            <a href="#contacts" class="header_button button_offer_block">Reach Out</a>
            <h3 class="title title_offer_block">Our Stats</h3>
            <div class="status_block">
                <div class="status_item">
                    <h3 class="status_item_num">7+</h3>
                    <p class="status_item_txt">Years of experience</p>
                </div>
                <div class="status_item">
                    <h3 class="status_item_num">150+</h3>
                    <p class="status_item_txt">Happy Clients</p>
                </div>
                <div class="status_item">
                    <h3 class="status_item_num">500+</h3>
                    <p class="status_item_txt">Projects completed</p>
                </div>
            </div>
            

            </div>
           
         </div>
  <hr class="line_for_dark">

       
        <div class="form_send_block" id="contacts">
            <div class="send_block">
                 <h3 class="title title_send_block">Contact Us</h3>
            <form action="" method="post" id="formmain">
                <div class="form_fields">
                      <input type="text" name="first_name" placeholder="First Name" value="<?=$firstName?>">
                      <input type="text" name="last_name" placeholder="Last Name">
                      <input type="text" name="name" placeholder="Company Name">
                      <input type="text" name="location" placeholder="Location">
                      <input type="text" name="email" placeholder="Email">
                      <input type="text" name="phone" placeholder="Phone">
                      <textarea name="message"  placeholder="Message"  style="resize: none;"></textarea>
                </p>
                </div>
                
                <!-- вывод капчи из файла captcha.php -->
                <?php require ("captcha.php"); ?>

                <input  name="captcha_validation" style=" margin-bottom:11px" type="text" size="6" maxlength="5" class="input_captcha"></p>
                <input type="submit" class="send_form" value="Send Message" id="send-form">
                <input type="hidden" name="formInfo" value="Order darkmode RAYNCE">
            </form>
            </div>
           
        </div>

    </div>




    <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="//raynce/scrypt.js"></script>

</body>

</html>

