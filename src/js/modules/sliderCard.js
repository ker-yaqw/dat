
const sliderCard = () => {
    
    class OneSliderCard {
        constructor(src, alt, title, price, status, amount, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.status = status;
            this.price = price;
            this.amount = amount;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <li class="news-slider-item glide__slide">
                    <svg class="news-slider-item__icon">
                        <use xlink:href="/img/stack/sprite.svg#slider-compare"/>
                    </svg>
                    <a class="news-slider-item__link" href="#">
                        <img class="news-slider-item__image" src=${this.src} alt=${this.alt}>
                    </a>
                    <div class="news-slider-item__content">
                        <a class="news-slider-item__content-link" href="#">
                            <div class="news-slider-item__content-title">${this.title}</div>
                        </a>
                        <p class="news-slider-item__content-status">${this.status}</p>
                        <div class="news-slider-item__content-wrapper">
                            <div class="news-slider-item__content-inner">
                                <span class="news-slider-item__content-value">${this.price}</span>
                                <span class="news-slider-item__content-currency">грн</span>
                                <span class="news-slider-item__content-amount">${this.amount}</span>
                            </div>
                            <svg class="news-slider-item__content-icon">
                                <use xlink:href="/img/stack/sprite.svg#cart"/>
                            </svg>
                        </div>
                    </div>                                
                </li>
            `;
            this.parent.append(element);
        }
    }
    new OneSliderCard(
        "img/index/news-slider-img1.png",
        "img",
        "Петунія Софістика F1",
        20,
        "В наявності",
        "1 шт",
        ".news-slider .news-slider__list"
    ).render();
    
    new OneSliderCard(
        "img/index/news-slider-img2.png",
        "img",
        "Петунія Софістика F1",
        20,
        "В наявності",
        "1 шт",
        ".news-slider .news-slider__list"
    ).render();
    
    new OneSliderCard(
        "img/index/news-slider-img3.png",
        "img",
        "Петунія Софістика F1",
        20,
        "В наявності",
        "1 шт",
        ".news-slider .news-slider__list"
    ).render();

    new OneSliderCard(
        "img/index/news-slider-img4.png",
        "img",
        "Петунія Софістика F1",
        20,
        "В наявності",
        "1 шт",
        ".news-slider .news-slider__list"
    ).render();

    new OneSliderCard(
        "img/index/news-slider-img1.png",
        "img",
        "Петунія Софістика F1",
        20,
        "В наявності",
        "1 шт",
        ".news-slider .news-slider__list"
    ).render();
};

export default sliderCard;