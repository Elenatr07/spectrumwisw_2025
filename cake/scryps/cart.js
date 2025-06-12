

$('.sum').on("change", "select", function(event) {

  //console.log('Hello')
  $(event.target).closest(".sum").find("select").change(sum);
  function sum(){
    let result=0;
    $(event.target).closest(".sum").find("select").each(function(){
        let value = 0;
        if (typeof $(this).val() == 'object'){
          $.each($(this).val(), function(index, val) {
            value += val*1;
          });
        } else {
          value = $(this).val()
        }
        result+=value*1;
    
    }); 
    $(event.target).closest(".sum").find('.itog').val('£' + result);
    $(event.target).closest(".sum").find('.add_item').attr("data-price",(result)); //setter
    
    
    
   /* var id = $(event.target).closest(".sum").find(".add_item").data("id");
    console.log(id)*/
    var idoption = $(event.target).closest(".sum").find(':selected').data('id');
    //console.log(idoption)
    var idtotal = `${result}` + `${idoption}`;
    //console.log(idtotal)
    $(event.target).closest(".sum").find(".add_item").attr("data-id", (idtotal));
    var weight = $(event.target).closest(".sum").find(':selected').data('weight');
    var filling = $(event.target).find(':selected').data('filling');
    var delivery = $(event.target).find(':selected').data('delivery');
    $(event.target).closest(".sum").find('.add_item').attr("data-weight",(weight)); //setter
    $(event.target).closest(".sum").find('.add_item').attr("data-filling",(filling)); //setter
    $(event.target).closest(".sum").find('.add_item').attr("data-delivery",(delivery)); //setter





/*function item() {
  for (key in getItem) {
if (getItem.hasOwnProperty(key)) {

 //getItem[key].id += 100;
 localStorage.setItem('jqcart', JSON.stringify(getItem));
}}
}*/

}
  });
  $(document).on('click', '.add_item', function() {

 // history.go(0);
 
 //alert("добавлено в корзину");
smoke.alert ("Thank you for your choice. The product has been added to the cart");
$(document).on('click', '.smoke-dialog-buttons-ok', function(){
  $('.modal').modal('hide');
 $.jqCart('openCart'); 

})
 /*function open() {
  $.jqCart('openCart'); 
 }
 setTimeout(open, 500)*/
  
  })

  
  //Tigger event handler, to set the price
  $('.sum select').trigger('change');
    
 // var a = $('.add_item').data('price'); //getter
 $(document).on('click', '#clear', function(){
  $.jqCart('clearCart'); // очистить корзину


});



/*
var item = JSON.parse(localStorage.getItem('jqcart'));
console.log(item.id);

const localStorageSize = window.localStorage.length
for (let i = 0; i < localStorageSize; i++) {
  console.log(
      window.localStorage.getItem(localStorage.key(i)) 
  )
}
console.log(window.localStorage.key(0));
*/

/*
for (let i = 0, length = localStorage.length; i < length; i++) {
  // ключ
  const key = localStorage.key(i);
  // значение
  const value = localStorage[key];
  console.log(`${key}: ${value}`);
}
*/