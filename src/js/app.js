import $ from "jquery";
import "owl.carousel";

//carousel
$(".index-slider__carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  items: 1,
  dotsClass: "index-slider__dots"
});
$(".index-cards__carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  items: 1
});

//tags
$('.catalog-tags__button').click(function(){
    $(this).toggleClass('catalog-tags__button_active');
});

//filter
$('.catalog-filter__button').click(function(){
    if($(this).siblings(".catalog-filter__menu").css("display") === 'flex'){
        $(this).siblings(".catalog-filter__menu").css('display', 'none'); 
    } else{
        $('.catalog-filter__menu').css('display', 'none'); 
        $(this).siblings(".catalog-filter__menu").css('display', 'flex');
    }
});

//image controler

$('.card-item-img__mini').click(function(){
    $('.card-item-img__mini').removeClass('card-item-img__mini_active');
    $(this).addClass('card-item-img__mini_active');
    $('.card-item-img__main').attr('src', $(this).attr('data-card-img'));
});

//checkbox

$('.basket-form__form-checkbox').click(function(){
    if($(this).hasClass('basket-form__form-checkbox_checked')){
        $(this).removeClass('basket-form__form-checkbox_checked');
    } else{
        $(this).addClass('basket-form__form-checkbox_checked');
    }
});

//accordion

$('.accordion__head').click(function(){
    $(this).children('.accordion__button').toggleClass('accordion__button_active');
    $(this).siblings('.accordion__body').toggleClass('accordion__body_active');
});