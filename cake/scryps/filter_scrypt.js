//Filter
$(function() {
    $(".filter .type").on('click', function() {
        let category = $(this).attr("data-filter");
        $(".filter .type").removeClass("active");
        $(this).addClass("active");
      /*  if ($(this).hasClass('loadbtn')) {
            $(".load_btn").show("slow");
            $(".load_btn").text($(".load_btn").text() == "See more" ? "See less" : "See less")
        } else {
            $(".load_btn").hide();
        }*/
        let item = $(".container_cards .cake_block_filter");
       item.fadeOut("slow");
        item.each(function() {
            if ($(this).hasClass(category)) {
                $(this).fadeIn(200);
            }

        });
    });

});
/*//Load more 12 + 12
$(function (){
        const elements = $(".container_cards ._hidden");
        const more = $(".load_btn");
        $(".card").slice(0, 5).show("slow");
        if ($(elements).length !== 0) {
            more.show();
        } 
        if ($(elements).length == 0) {
            more.hide();
        }
              
    }
  );

  $(".container_cards").each(function() {
    let more = $(".load_btn");
    let hide = $(this).find("._hidden");
            hide.hide();
            more.click(function() {
                hide.slideToggle();
                more.text(more.text() == "See less" ? "See more" : "See less")
            });
        });
*/
