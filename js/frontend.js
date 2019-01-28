$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    responsiveClass:true,
    items:1,
    autoplay:true,
    nav:true,
    navText: ["<i class='mdi mdi-chevron-left slider-nav slider-nav_left'>","<i class='mdi mdi-chevron-right slider-nav slider-nav_right'>"]
  });

	
    $('#mobile-menu-btn').on('click', function(){
      $('.mobile-menu').toggleClass('active');
      $('.menu-border').toggleClass('active');
      $('.page-hover').toggleClass('active');
    });
  	
    $('.page-hover').on('click', function(){
      $('.mobile-menu').removeClass('active');
      $('.menu-border').removeClass('active');
      $(this).removeClass('active');
      $('#mobile-menu-btn').find('.mdi').removeClass('mdi-close');
      $('#mobile-menu-btn').find('.mdi').addClass('mdi-menu');
      $('.header-nav__modal').removeClass('active');
    });

    $('.show-filters-btn').on('click', function(){
      $(this).closest('.filters-block').find('.filters__list').slideToggle();
      $(this).find('.mdi').toggleClass('rotate');
    });

    $('.sm-filters-btn').on('click', function(){
        $('.filters').slideToggle();
    });

    $('.tab-button').on('click', function(){
      $('.tab-button').removeClass('active');
      $(this).addClass('active');
      $('.tab').addClass('d-none');

      var tab = '#' + $(this).val();
      $(tab).removeClass('d-none');
    });

    $('.account-btn').on('click', function(){
      $('.account-btn').removeClass('active');
      $(this).addClass('active');
      $('.account__form').addClass('d-none');
      var tab = '#' + $(this).val();
      $(tab).removeClass('d-none');
    });

    $('.show-order-details').on('click', function(){
      $(this).closest('.account__table__row').find('.account-table-details').slideToggle();
      if ($(this).html() == 'Посмотреть') {
        $(this).html('Закрыть');
      } else {
        $(this).html('Посмотреть');
      }
      $(this).toggleClass('active');
    });


   $('.rate-btn').on('mouseover', function(){
      var value = $(this).val();


      $('.rate-btn').each(function(){
        if ($(this).val() <= value) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
    });

    $('.rate-btn').on('mouseout', function(){
      $('.rate-btn').each(function(){
        $(this).removeClass('hover');
      });
    });

    $('.rate-btn').on('click', function(){
      // $('.rate-btn').removeClass('active');
      var value = $(this).val();
      $('.rate-btn').each(function(){
        if ($(this).val() <= value) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });

    $('.comments-tab__button').on('click', function(){
      $('.leave-comment').addClass('active');
    });

    $('#mobile-menu-btn').on('click', function(){
      $(this).find('.mdi').toggleClass('mdi-menu');
      $(this).find('.mdi').toggleClass('mdi-close');
    });

    $('.amount-minus').on('click', function(){
      var amount = parseInt($(this).closest('.product__add__counter').find('.product-amount').html());
      if (amount > 1) {
        amount--;
        $(this).closest('.product__add__counter').find('.product-amount').html(amount);
      }
    });

    $('.amount-plus').on('click', function(){
      var amount = parseInt($(this).closest('.product__add__counter').find('.product-amount').html());
      amount++;
      $(this).closest('.product__add__counter').find('.product-amount').html(amount);
    });

    $('.order__client').on('click', function(){
      $('.order__client').removeClass('active');
      $(this).addClass('active');
      $('input[name="client-type"]').val($(this).val());
    });

    $('.order-continue').on('click', function(){
      $('#order-tab-1').removeClass('active');
      $('#order-tab-2').addClass('active');
      $('.order__step[value="1"]').removeClass('active');
      $('.order__step[value="2"]').addClass('active');
    });

    $('.order__step').on('click', function(){
      $('.order__step').removeClass('active');
      $(this).addClass('active');
      $('.order-tab').removeClass('active');
      $('#order-tab-' + $(this).val()).addClass('active');
    });

    function countOrder(productObj, amount) {
        var total = 0;
        var price = productObj.closest('.order__product__counter').find('.product-price').val() * amount;
        productObj.closest('.order__product__counter').find('.order__product__counter__number').html(amount);
        productObj.closest('.order__product__counter').find('.product-amount').val(amount);
        productObj.closest('.order__product__counter').find('.order__product__counter__price').html(price + " грн");

        $('.order__product').each(function(){
          total += $(this).find('.product-price').val() * $(this).find('.product-amount').val();
        });

        $('.total-sum').html(total + ' грн');
    }

    $('.order-minus').on('click', function(){
      var amount = $(this).closest('.order__product__counter').find('.product-amount').val();
      if (amount > 1) {
        amount--;        
        countOrder($(this), amount);
      } 
    });

    $('.order-plus').on('click', function(){
      var amount = $(this).closest('.order__product__counter').find('.product-amount').val();
      amount++;
      countOrder($(this), amount);
    });

    $('.remove-product').on('click', function(){
      $(this).closest('.order__product').remove();
    });

    $('.basket-remove-btn').on('click', function(){
      $(this).closest('.basket__product').remove();
    });

    $('.basket-minus-btn').on('click', function(){
      var amount = parseInt($(this).closest('.basket__product').find('.basket-product-amount').html());
      var price = parseInt($(this).closest('.basket__product').find('.product-price').val());
      if (amount > 1) {
        amount--;
        price = amount * price;
        $(this).closest('.basket__product').find('.basket-product-amount').html(amount);
        $(this).closest('.basket__product').find('.basket__product__price').html(price + " грн");
      } 
    });

    $('.basket-plus-btn').on('click', function(){
      var amount = parseInt($(this).closest('.basket__product').find('.basket-product-amount').html());
      var price = parseInt($(this).closest('.basket__product').find('.product-price').val());
        amount++;
        price = amount * price;
        $(this).closest('.basket__product').find('.basket-product-amount').html(amount);
        $(this).closest('.basket__product').find('.basket__product__price').html(price + " грн");
    });

    $('.forgot-btn').on('click', function(){
      $('#login-form').fadeOut(300, function(){
        $('#change-password-form').fadeIn(300);
      });
    });

    $('.signin-btn').on('click', function(){
      $('#change-password-form').fadeOut(300, function(){
        $('#login-form').fadeIn(300);
      });
    });

    $('.entry-btn').on('click', function(){
      $('.header-nav__modal').addClass('active');
      $('.page-hover').addClass('active');
    });
});
