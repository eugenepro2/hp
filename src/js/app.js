import $ from 'jquery';
import 'owl.carousel';

$('.index-slider__carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: true,
    items: 1,
    dotsClass: 'index-slider__dots'
})