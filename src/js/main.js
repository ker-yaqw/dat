import slider from './modules/slider';
import scrolling from './modules/scrolling';
import sliderCard from './modules/sliderCard';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    sliderCard();
    slider();
    scrolling('.footer-scroll-up');
});    