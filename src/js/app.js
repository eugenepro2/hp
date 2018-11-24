import $ from 'jquery';
import 'jquery-ui-bundle';
import 'owl.carousel';
import device from 'current-device';

//carousel
$('.index-slider__carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  items: 1,
  dotsClass: 'index-slider__dots'
});

$('.index-cards__carousel').owlCarousel({
  loop: true,
  margin: 100,
  dots: true,
  items: 1,
  dotsClass: 'index-cards__dots'
});

$('.index-cases__carousel').owlCarousel({
  loop: true,
  margin: 100,
  dots: true,
  items: 1,
  dotsClass: 'index-cases__dots'
});

$('.index-advantages__carousel').owlCarousel({
  loop: true,
  margin: 50,
  dots: false,
  items: 3
});

$('.card-item__carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  items: 1,
  dotsClass: 'card-item__dots'
});

// _CATALOG-TAGS

//tags
$('.catalog-tags__button').change(function() {
  $(this).toggleClass('catalog-tags__button_active');
});

//sidebar
$('.catalog-tags__mobile-header-close').click(function() {
  $('.catalog-tags__mobile-list').css('left', '-320px');
});
$('.catalog-tags__mobile-button').click(function() {
  $('.catalog-tags__mobile-list').css('left', '0px');
});

//sidebar button

$('.catalog-tags__menu-button').click(function() {
  if($('.catalog-tags__button_active').length > 0) {
    var text = '';
    $('.catalog-tags__button_active').each(function() {
      text += $(this).children('span').text() + ', ';
    });
    $('.catalog-tags__mobile-text').text(text);
    
  }
  $('.catalog-tags__mobile-list').css('left', '-320px');
});


// _CATALOG-FILTER

//filter
$('.catalog-filter__button').click(function() {
  if (
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .hasClass('catalog-filter__menu_active')
  ) {
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .removeClass('catalog-filter__menu_active');
  } else {
    $('.catalog-filter__menu').removeClass('catalog-filter__menu_active');
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .addClass('catalog-filter__menu_active');
  }
});


$('.catalog-filter__menu-li').click(function() {
  $(this)
    .addClass('catalog-filter__menu-li_active')
    .siblings()
    .removeClass('catalog-filter__menu-li_active');
  $(this)
    .parents('.catalog-filter__menu')
    .removeClass('catalog-filter__menu_active')
    .parents('.catalog-filter__target')
    .find('.catalog-filter__button')
    .text($(this).text().toLowerCase());
  

  $(this)
    .parents('.catalog-filter__price')
    .find('.catalog-filter__button')
    .html($(this).html().toLowerCase());
  if($('.catalog-filter__menu_sidebar').css('display') === 'none') {
    $(this)
      .parents('.catalog-filter__target')
      .find('.catalog-filter__mobile-text')
      .text($(this).text().toLowerCase());
    $(this)
      .parents('.catalog-filter__price')
      .find('.catalog-filter__mobile-text')
      .html($(this).html().toLowerCase());
  }
});

//close
$('.catalog-filter__mobile-header-close').click(function() {
  $(this)
    .parents('.catalog-filter__target')
    .find('.catalog-filter__mobile-list')
    .css('left', '-320px');
  $(this)
    .parents('.catalog-filter__price')
    .find('.catalog-filter__mobile-list')
    .css('left', '-320px');
});
$('.catalog-filter__mobile-button').click(function() {
  $(this)
    .parents('.catalog-filter__target')
    .find('.catalog-filter__mobile-list')
    .css('left', '0px');
  $(this)
    .parents('.catalog-filter__price')
    .find('.catalog-filter__mobile-list')
    .css('left', '0px');
});

// sidebar button

$('.catalog-filter__menu-button').click(function() {
  $(this)
    .parents('.catalog-filter__target')
    .find('.catalog-filter__mobile-text')
    .text($(this).siblings('.catalog-filter__menu-ul').find('.catalog-filter__menu-li_active').text().toLowerCase());

  $(this)
    .parents('.catalog-filter__price')
    .find('.catalog-filter__mobile-text')
    .html($(this).siblings('.catalog-filter__menu-ul').find('.catalog-filter__menu-li_active').html().toLowerCase());
  
  $(this)
    .parents('.catalog-filter__target')
    .find('.catalog-filter__mobile-list')
    .css('left', '-320px');
  $(this)
    .parents('.catalog-filter__price')
    .find('.catalog-filter__mobile-list')
    .css('left', '-320px');
});

//reset

$('.catalog-filter__reset').click(function() {
  // $('.catalog-filter__button').html();   
  $('.catalog-filter__button').each(function() {
    
    $(this)
      .siblings('.catalog-filter__mobile-list')
      .find('.catalog-filter__menu')
      .removeClass('catalog-filter__menu_active')
      .find('.catalog-filter__menu-li')
      .eq(0)
      .addClass('catalog-filter__menu-li_active')
      .siblings()
      .removeClass('catalog-filter__menu-li_active');

    $(this)
      .html($(this).siblings('.catalog-filter__mobile-list').find('.catalog-filter__menu-li').eq(0).html().toLowerCase());
  });   

  $('.catalog-filter__mobile-text').each(function() {
    $(this)
      .html($(this).parent().siblings('.catalog-filter__mobile-list').find('.catalog-filter__menu-li').eq(0).html().toLowerCase());

    $(this)
      .html($(this).parent().siblings('.catalog-filter__mobile-list').find('.catalog-filter__menu-li').eq(0).html().toLowerCase());
  });
  $('.catalog-tags__button')
    .removeClass('catalog-tags__button_active')
    .children('input')
    .prop('checked',false);
    
  $('.catalog-tags__mobile-text').text('Нет');
});

// _CARD-ITEM

//image controler

$('.card-item-img__mini').click(function() {
  $('.card-item-img__mini').removeClass('card-item-img__mini_active');
  $(this).addClass('card-item-img__mini_active');
  $(this).parent().siblings('.card-item-img__main').attr('src', $(this).attr('data-card-img'));
});

//tabs card item

$('.card-item-tabs__button').click(function() {
  $(this)
    .addClass('card-item-tabs__button_active')
    .siblings()
    .removeClass('card-item-tabs__button_active')
    .parents('.card-item-tabs')
    .find('.card-item-tabs__body')
    .children('.card-item-tabs__info')
    .eq($(this).index())
    .addClass('card-item-tabs__info_active')
    .siblings()
    .removeClass('card-item-tabs__info_active');
});

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

$('.accordion__head').click(function() {
  $(this)
    .children('.accordion__button')
    .toggleClass('accordion__button_active');
  $(this)
    .siblings('.accordion__body')
    .toggleClass('accordion__body_active');
});

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

$('.order-form-accordion__button').click(function() {
  $(this)
    .parents('.order-form-accordion__item')
    .find('.order-form-accordion__edit')
    .removeClass('hidden')
    .parents('.order-form-accordion__item')
    .removeClass('order-form-accordion__item_active')
    .next()
    .addClass('order-form-accordion__item_active');
});

$('.order-form-accordion__edit').click(function() {
  $(this)
    .parents('.order-form-accordion__item')
    .addClass('order-form-accordion__item_active')
    .siblings()
    .removeClass('order-form-accordion__item_active');
});

$('.order-form-accordion__button_total').click(function() {
  $('.order-form__inner').hide();
  $('.order-form-success').css('display', 'flex');
});

// disable submit !!!! 
$('.order-form__form').submit(function(e) {
  e.preventDefault();
});


// _CATALOG-CARDS

//favorite button

$('.catalog-card__favorite').click(function() {
  $(this).toggleClass('catalog-card__favorite_active').effect('bounce');
});

// _INDEX-SLIDER
$('.index-slider__dots').wrapAll('<div class="container"></div>');


//media

// function size() {
//   if($(window).width() < 1025) {
//     if($(window).width() < 769) {
//       if($(window).width() < 321 ) {
//         $('#viewport').attr('content', 'width=320, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
//       } else {
//         $('#viewport').attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
//       }
//     } else {
//       $('#viewport').attr('content', 'width=1024, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
//     }
//   } else {
//     
//   }

// }
// size();
// $(window).resize(function() {
//   size();
// });

if(device.type === 'desktop') {
  $('#viewport').attr('content', 'width=device-width, initial-scale=1');
}

if(device.type === 'tablet') {
  $('#viewport').attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
}

if(device.type === 'mobile') {
  $('#viewport').attr('content', 'width=320, minimum-scale=0.3, maximum-scale=3, user-scalable=yes');
}