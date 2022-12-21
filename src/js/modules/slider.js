import Glide from '@glidejs/glide'

const slider = () => {
    let glide = new Glide('#news-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        perTouch: 3,
        animationDuration: 1000,
        keyboard: true,
        hoverpause: true,
        gap: 30,
        //autoplay: 3000,
    })
    
    glide.mount();
};

export default slider;