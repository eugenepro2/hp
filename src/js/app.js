import $ from 'jquery';
import 'jquery-ui-bundle';
import device from 'current-device';



//favorite button

$('.card-item__favs').click(function() {
  $('.card-item__favs-img').toggleClass('card-item__favs-img_active').effect('bounce');
});

// _BASKET-FORM

//checkbox

$('.basket-form__form-checkbox').change(function() {
  $(this).toggleClass('basket-form__form-checkbox_checked');
});

$('.basket-form__item-button').click(function() {
  $(this)
    .parent()
    .toggleClass('basket-form__item_disable');
});


// _ACCORDION

//accordion

// $('.accordion__head').click(function() {
//   $(this)
//     .children('.accordion__button')
//     .toggleClass('accordion__button_active');
//   $(this)
//     .siblings('.accordion__body')
//     .toggleClass('accordion__body_active');
// });

// _INDEX-ADVANTAGES

//advan. more

$('.index-advantages__more').click(function() {
  $(this).hide();
  $('.index-advantages__info').addClass('index-advantages__info_active');
  $('.text-collapse').removeClass('text-collapse');
});


// _HEADER

//burger

$('.header__burger').click(function() {
  $(this).toggleClass('header__burger_active');
  $('.header__sidebar').toggleClass('header__sidebar_active');
  $('.header').toggleClass('header_fixed');
  $('.header').toggleClass('header_dark');
  $('.header__logo').toggleClass('header__logo_dark');
  $('.header__inner').children('.header__contacts').toggle();
});


// _ORDER-FORM

//order accordion

// $('.order-form-accordion__button').click(function() {
//   $(this)
//     .parents('.order-form-accordion__item')
//     .find('.order-form-accordion__edit')
//     .removeClass('hidden')
//     .parents('.order-form-accordion__item')
//     .removeClass('order-form-accordion__item_active')
//     .next()
//     .addClass('order-form-accordion__item_active');
// });

// $('.order-form-accordion__edit').click(function() {
//   $(this)
//     .parents('.order-form-accordion__item')
//     .addClass('order-form-accordion__item_active')
//     .siblings()
//     .removeClass('order-form-accordion__item_active');
// });

// $('.order-form-accordion__button_total').click(function() {
//   $('.order-form__inner').hide();
//   $('.order-form-success').css('display', 'flex');
// });

// // disable submit !!!! 
// $('.order-form__form').submit(function(e) {
//   e.preventDefault();
// });


// _CATALOG-CARDS

//favorite button

$(document).click('.catalog-card__favorite', function() {
  $(this).toggleClass('active').effect('bounce');
});




let viewport = $('meta[name="viewport"]');

if(device.type === 'desktop') {
  viewport.attr('content', 'width=device-width, initial-scale=1');
}

if(device.type === 'tablet') {
  viewport.attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
}

if(device.type === 'mobile') {
  viewport.attr('content', 'width=320, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
}