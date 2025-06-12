/*!
 * jQuery jqCart Plugin v1.1.2
 * requires jQuery v1.9 or later
 *
 * http://incode.pro/
 *
 * Date: Date: 2016-05-18 19:15
 */
;(function($) {
  'use strict';
  var cartData,
    itemData,
    orderPreview = '',
    totalCnt = 0,
    visibleLabel = false,
    label = $('<div class="jqcart-cart-label"><span class="jqcart-title"></span><span class="jqcart-total-cnt">0</span></div>'),
    modal = '<div class="jqcart-layout"><div class="jqcart-checkout">123</div></div>',
    orderform = '<p class="jqcart-cart-title"></p><form class="jqcart-orderform"><p><input type="text" class="order_input" name="user_name" placeholder="Your name"></p><p><input type="text" class="order_input" name="user_phone" placeholder="Your phone number"></p><p><input type="text" class="order_input" name="user_mail" placeholder="Your e-mail"></p><p><input type="text" class="order_input" name="user_address" placeholder="Delivery Address"></p><p><h4 class="select_delivery_time">Delivery Time</h4><select class="select_form_order"  name="delivery_time"><option  disabled>select the delivery time</option><option value="8 am - 10 am" selected>8 am - 10 am</option><option value="10 am - 12 am">10 am - 12 am</option><option value="12 am - 14 am">12 am - 14 am</option><option value="14 am - 16 am">14 am - 16 am</option><option value="16 am - 18 am">16 am - 18 am</option></select></p><p><input class="send_order" type="submit" value="Place an Order"><input class="send_order"  type="reset" id="reset" value="Back to shopping"></p></form>';
  var opts = {
		buttons: '.add_item',
		cartLabel: 'body',
		visibleLabel: false,
		openByAdding: false,
    handler: '/',
		currency: '£'
  };
  var actions = {
    init: function(o) {
      opts = $.extend(opts, o);
      cartData = actions.getStorage();
      if (cartData !== null && Object.keys(cartData).length) {
        for (var key in cartData) {
          if (cartData.hasOwnProperty(key)) {
            totalCnt += cartData[key].count;
          }
        }
        visibleLabel = true;
      }
      label.prependTo(opts.cartLabel)[visibleLabel || opts.visibleLabel ? 'show' : 'hide']()
        .on('click', actions.openCart)
        .find('.jqcart-total-cnt').text(totalCnt);
      $(document)
        .on('click', opts.buttons, actions.addToCart)
        .on('click', '.jqcart-layout', function(e) {
          if (e.target === this) {
            actions.hideCart();
          }
        })
        .on('click', '.jqcart-incr', actions.changeAmount)
				.on('input keyup', '.jqcart-amount', actions.changeAmount)
        .on('click', '.jqcart-del-item', actions.delFromCart)
        .on('submit', '.jqcart-orderform', actions.sendOrder)
        .on('reset', '.jqcart-orderform', actions.hideCart)
				.on('click', '.jqcart-print-order', actions.printOrder)
        .on('click', '#cancel', actions.hideCart)
        .on('reset', '.jqcart-orderform', actions.hideCart);
      return false;
    },
    addToCart: function(e) {
      e.preventDefault();
      itemData = $(this).data();
			if(typeof itemData.id === 'undefined') {
				console.log('Отсутствует ID товара');
				return false;
			}
      cartData = actions.getStorage() || {};
      if (cartData.hasOwnProperty(itemData.id)) {
        cartData[itemData.id].count++;
      } else {
        itemData.count = 1;
        cartData[itemData.id] = itemData;
      }
      actions.setStorage(cartData);
      actions.changeTotalCnt(1);
      label.show();
			if(opts.openByAdding) {
				actions.openCart();
			}
      return false;
    },
    delFromCart: function() {
      var $that = $(this),
        line = $that.closest('.jqcart-tr'),
        itemId = line.data('id');
      cartData = actions.getStorage();
      actions.changeTotalCnt(-cartData[itemId].count);
      delete cartData[itemId];
      
      actions.setStorage(cartData);
      line.remove();
      actions.recalcSum();
     
      //window.location.reload();
     //history.go(0);
      //localStorage.removeItem('jqcart');
     
      return false;
    },
    changeAmount: function() {
      var $that = $(this),
				manually = $that.hasClass('jqcart-amount'),
        amount = +(manually ? $that.val() : $that.data('incr')),
        itemId = $that.closest('.jqcart-tr').data('id');
      cartData = actions.getStorage();
			if(manually) {
      	cartData[itemId].count = isNaN(amount) || amount < 1 ? 1 : amount;
			} else {
				cartData[itemId].count += amount;
			}
      if (cartData[itemId].count < 1) {
        cartData[itemId].count = 1;
      }
			if(manually) {
				$that.val(cartData[itemId].count);
			} else {
      	$that.siblings('input').val(cartData[itemId].count);
			}
      actions.setStorage(cartData);
      actions.recalcSum();
      return false;
    },
    recalcSum: function() {
      var subtotal = 0,
        amount,
        sum = 0,
        totalCnt = 0;
      $('.jqcart-tr').each(function() {
        amount = +$('.jqcart-amount', this).val();
        sum = Math.ceil((amount * $('.jqcart-price', this).text()) * 100) / 100;
        $('.jqcart-sum', this).html(sum + ' ' + opts.currency);
				subtotal = Math.ceil((subtotal + sum) * 100) / 100;
        totalCnt += amount;
      });
      $('.jqcart-subtotal strong').text(subtotal);
      $('.jqcart-total-cnt').text(totalCnt);
      if (totalCnt <= 0) {
				actions.hideCart();
				if(!opts.visibleLabel) {
        	label.hide();
				}
      }
      return false;
    },
    changeTotalCnt: function(n) {
      var cntOutput = $('.jqcart-total-cnt');
      cntOutput.text((+cntOutput.text() + n));
      return false;
    },
    openCart: function() {
      var subtotal = 0,
			cartHtml = '';
      cartData = actions.getStorage();
      orderPreview = '<p class="jqcart-cart-title">Your Order<span class="jqcart-print-order"></span></p><div class="jqcart-table-wrapper"><div class="jqcart-manage-order"><div class="jqcart-thead"><div></div><div>Name</div><div>Quantity</div><div>Amount</div><div></div></div>';
      var key, sum = 0;
      for (key in cartData) {
        if (cartData.hasOwnProperty(key)) {
					sum = Math.ceil((cartData[key].count * cartData[key].price) * 100) / 100;
					subtotal = Math.ceil((subtotal + sum) * 100) / 100;
					
          orderPreview += '<div class="jqcart-tr" data-id="' + cartData[key].id + '">';
					orderPreview += '<div class="jqcart-small-td">' + cartData[key].id + '</div>';
					orderPreview += '<div class="jqcart-item-img"><img src="' + cartData[key].img + '" alt=""></div>';
          orderPreview += '<div class="jqcart-item-name">' + '<p class="item_name_title">' + cartData[key].title + '</p>' + '\r\n' + '<p class="item_name_weight">' + cartData[key].weight +'</p>' + '<p class="item_name_filling">' + cartData[key].filling + '</p>' + '<p class="item_name_delivery">' + cartData[key].delivery + '</p>' + '</div>';
          orderPreview += '<div class="jqcart-price">' + cartData[key].price + '</div>';
          orderPreview += '<div class="jqcart-incr-sum"><div class="div_table"><span class="jqcart-incr" data-incr="-1">&#8211;</span><input type="text" class="jqcart-amount" value="' + cartData[key].count + '"><span class="jqcart-incr" data-incr="1">+</span></div></div>';
          orderPreview += '<div class="jqcart-sum">' + opts.currency + '' + sum + ' </div>';
					orderPreview += '<div class="jqcart-del-item" id="del"></div>';
          orderPreview += '</div>';
        }
      }
      orderPreview += '</div></div>';
      orderPreview += '<div class="jqcart-subtotal">Total: ' + opts.currency + '<strong>' + subtotal + '</strong> </div>';
      orderPreview += '<button class="clear_cart" id="clear">Clear cart</button> ';
		//	orderPreview += '<button id="cancel">Закрыть корзину</button>'
			cartHtml = subtotal ? (orderPreview + orderform) : '<h2 class="jqcart-empty-cart">The basket is empty</h2>';
      $(modal).appendTo('body').find('.jqcart-checkout').html(cartHtml);
    },
    hideCart: function() {
      $('.jqcart-layout').fadeOut('fast', function() {
        $(this).remove();
      });
      history.go(0);
      return false;
    },
    sendOrder: function(e) {
      e.preventDefault();
      var $that = $(this);
      if ($.trim($('[name=user_name]', $that).val()) === '' || $.trim($('[name=user_phone]', $that).val()) === '' || $.trim($('[name=user_mail]', $that).val()) ==='') {
        $('<p class="jqcart-error">Please provide your name, contact phone number and e-mail!</p>').insertBefore($that).delay(3000).fadeOut();
        return false;
      }
      $.ajax({
        url: opts.handler,
        type: 'POST',
				dataType: 'json',
        data: {
          orderlist: $.param(actions.getStorage()),
          userdata: $that.serialize()
        },
        
        error: function() {
           $('.jqcart-checkout').html('<p class="status_order">' + '<h3 class="status_order_title">Error! Order not sent, contact us by phone or email</h3>' + '\r\n' + '</p>');
          console.log ('error')
          setTimeout(methods.clearCart, 2000);
        },
        success: function(resp) {
          $('.jqcart-checkout').html('<p class="status_order">' + '<h3 class="status_order_title">Thank You for Your Order!</h3>' + '\r\n' + '<span class="order_status_txt">' + resp.message + '</span>' + '</p>');
					if(!resp.errors) {
						setTimeout(methods.clearCart, 2000);
           // location.href = 'path/to/another/page.html';
					}
        }
      });
      //location.reload();
    },
		printOrder: function (){
			var data = $(this).closest('.jqcart-checkout').prop('outerHTML');
			if(!data) {
				return false;
			}
			var win = window.open('', 'Печать заказа', 'width='+screen.width+',height='+screen.height),
			cssHref = $(win.opener.document).find('link[href$="jqcart.css"]').attr('href'),
			d = new Date(),
			curDate = ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
			
			
			win.document.write('<html><head><title>Заказ ' + curDate + '</title>');
			win.document.write('<link rel="stylesheet" href="' + cssHref + '" type="text/css" />');
			win.document.write('</head><body >');
			win.document.write(data);
			win.document.write('</body></html>');
			
			setTimeout(function(){
				win.document.close(); // нужно для IE >= 10
				win.focus(); // нужно для IE >= 10			
				win.print();
				win.close();
			}, 100);
			
			return true;
		},
    setStorage: function(o) {
      localStorage.setItem('CakeCart', JSON.stringify(o));
      return false;
    },
    getStorage: function() {
      return JSON.parse(localStorage.getItem('CakeCart'));
    }
  };
  var methods = {
		clearCart: function(){
			localStorage.removeItem('CakeCart');
      history.go(0);
			label[opts.visibleLabel ? 'show' : 'hide']().find('.jqcart-total-cnt').text(0);
			actions.hideCart();
		},
		openCart: actions.openCart,
		printOrder: actions.printOrder,
		test: function(){
			actions.getStorage();
		}
	};
  $.jqCart = function(opts) {
    if (methods[opts]) {
      return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opts === 'object' || !opts) {
      return actions.init.apply(this, arguments);
    } else {
      $.error('Метод с именем "' + opts + '" не существует!');
    }
  };
})(jQuery);

