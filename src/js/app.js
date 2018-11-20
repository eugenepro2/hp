import $ from 'jquery';
import 'owl.carousel';

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

//tags
$('.catalog-tags__button').change(function() {
  $(this).toggleClass('catalog-tags__button_active');
});

//filter
$('.catalog-filter__button').click(function() {
  if (
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .css('display') === 'flex'
  ) {
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .css('display', 'none');
  } else {
    $('.catalog-filter__menu').css('display', 'none');
    $(this)
      .siblings()
      .find('.catalog-filter__menu')
      .css('display', 'flex');
  }
});

//image controler

$('.card-item-img__mini').click(function() {
  $('.card-item-img__mini').removeClass('card-item-img__mini_active');
  $(this).addClass('card-item-img__mini_active');
  $(this).parent().siblings('.card-item-img__main').attr('src', $(this).attr('data-card-img'));
});

//checkbox

$('.basket-form__form-checkbox').click(function() {
  if ($(this).hasClass('basket-form__form-checkbox_checked')) {
    $(this).removeClass('basket-form__form-checkbox_checked');
  } else {
    $(this).addClass('basket-form__form-checkbox_checked');
  }
});

//accordion

$('.accordion__head').click(function() {
  $(this)
    .children('.accordion__button')
    .toggleClass('accordion__button_active');
  $(this)
    .siblings('.accordion__body')
    .toggleClass('accordion__body_active');
});

//advan. more

$('.index-advantages__more').click(function() {
  $(this).hide();
  $('.index-advantages__info').addClass('index-advantages__info_active');
  $('.text-collapse').removeClass('text-collapse');
});

//popap menu
$('.catalog-tags__mobile-header-close').click(function() {
  $('.catalog-tags__mobile-list').css('left', '-320px');
});
$('.catalog-tags__mobile-button').click(function() {
  $('.catalog-tags__mobile-list').css('left', '0px');
});

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

//media

// if(window.matchMedia('(min-width: 321px)').matches){
//     $('.catalog-filter__mobile-list').css('left', '0px');
//     $('.catalog-filter__menu').css('display', 'none');
// } else {
//     $('.catalog-filter__mobile-list').css('left', '-310px');
//     $('.catalog-filter__menu').css('display', 'block');
// }
