import sliders from './modules/sliders';
import scrolling from './modules/scrolling';
import slidersCard from './modules/slidersCard';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    slidersCard();
    sliders();
    scrolling('.footer-scroll-up');
});    