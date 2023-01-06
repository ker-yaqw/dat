import Glide from '@glidejs/glide';

const sliders = () => {
    let newSlider = new Glide('#news-slider', {
        type: 'carousel',
        startAt: 2,
        perView: 4,
        perTouch: 3,
        keyboard: true,
        hoverpause: true,
        gap: 30,
        animationDuration: 1000,
        autoplay: 5000,
    });
    
    newSlider.mount();   
    
    let actionSlider = new Glide('#action-slider', {
        type: 'carousel',
        startAt: 2,
        perView: 4,
        perTouch: 3,
        keyboard: true,
        hoverpause: true,
        gap: 30,
        animationDuration: 1000,
        autoplay: 8000,
    });

    actionSlider.mount();

    let partnerSlider = new Glide('#partner-slider', {
        type: 'carousel',
        startAt: 2,
        perView: 7,
        perTouch: 3,
        keyboard: true,
        hoverpause: true,
        gap: 30,
        animationDuration: 1000,
        autoplay: 10000,
    });

    partnerSlider.mount();
};

export default sliders;