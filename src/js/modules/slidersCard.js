
const slidersCard = () => {

    // const getResourse = async (url) => {
    //     const response = await fetch(url);
        
    //     if (!response.ok) {
    //         throw new Error(`Ощибка по адресу ${url},статус ощибки ${response.status}`);
    //     }

    //     return await response.json();
    // };
    // getResourse('http://localhost:4002/NewSliderCard')
    // .then(data => newSliderCard(data));
    
    

    // function newSliderCard(data) {
    //         data.forEach(({src, alt, title, price, status, amount}) => {
    //             const element = document.createElement('li');
    //                   element.classList.add('news-slider-item', 'glide__slide');
    //                   element.innerHTML = `
    //                 <svg class="news-slider-item__icon">
    //                     <use xlink:href="/img/stack/sprite.svg#slider-compare"/>
    //                 </svg>
    //                 <a class="news-slider-item__link" href="#">
    //                     <img class="news-slider-item__image" src=${src} alt=${alt}>
    //                 </a>
    //                 <div class="news-slider-item__content">
    //                 <a class="news-slider-item__content-link" href="#">
    //                     <div class="news-slider-item__content-title">${title}</div>
    //                 </a>
    //                 <p class="news-slider-item__content-status">${status}</p>
    //                 <div class="news-slider-item__content-wrapper">
    //                     <div class="news-slider-item__content-inner">
    //                         <span class="news-slider-item__content-value">${price}</span>
    //                         <span class="news-slider-item__content-currency">грн</span>
    //                         <span class="news-slider-item__content-amount">${amount}</span>
    //                     </div>
    //                     <svg class="news-slider-item__content-icon">
    //                         <use xlink:href="/img/stack/sprite.svg#cart"/>
    //                     </svg>
    //                 </div>
    //             </div>
    //             `;
    //             document.querySelector(".news-slider .news-slider__list").append(element);
    //         });
    //     }

        

        class NewSliderCard {
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
                const element = document.createElement('li');
                      element.classList.add('news-slider-item', 'glide__slide');
                    
                    element.innerHTML = `
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
                `   ;
                this.parent.append(element);
            }
        }


        class ActionSliderCard {
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
                const element = document.createElement('li');
                      element.classList.add('action-slider-item', 'glide__slide');
                    
                    element.innerHTML = `
                    <svg class="action-slider-item__icon">
                        <use xlink:href="/img/stack/sprite.svg#slider-compare"/>
                    </svg>
                    <a class="action-slider-item__link" href="#">
                        <img class="action-slider-item__image" src=${this.src} alt=${this.alt}>
                    </a>
                    <div class="action-slider-item__content">
                        <a class="action-slider-item__content-link" href="#">
                            <div class="action-slider-item__content-title">${this.title}</div>
                        </a>
                        <p class="action-slider-item__content-status">${this.status}</p>
                        <div class="action-slider-item__content-wrapper">
                            <div class="action-slider-item__content-inner">
                                <span class="action-slider-item__content-value">${this.price}</span>
                                <span class="action-slider-item__content-currency">грн</span>
                                <span class="action-slider-item__content-amount">${this.amount}</span>
                            </div>
                            <svg class="action-slider-item__content-icon">
                                <use xlink:href="/img/stack/sprite.svg#cart"/>
                            </svg>
                        </div>
                    </div>                                
                `   ;
                this.parent.append(element);
            }
        }

        
        class PartnerSliderCard {
            constructor(src, alt, parentSelector) {
                this.src = src;
                this.alt = alt;
                this.parent = document.querySelector(parentSelector);
            }
    
            render() {
                const element = document.createElement('li');
                      element.classList.add('partner-slider-item', 'glide__slide');
                      element.innerHTML = `<img class="partner-slider-item__image" src=${this.src} alt=${this.alt}>`;
                    this.parent.append(element);
            }
        }

        new NewSliderCard(
            "img/index/slider-img1.png",
            "img",
            "Петунія Софістика F1",
            20,
            "В наявності",
            "1 шт",
            ".news-slider .news-slider__list"
            ).render();
            
        new NewSliderCard(
            "img/index/slider-img2.png",
            "img",
            "Скор 250 ЕС к.э.",
            589,
            "В наявності",
            "1 шт",
            ".news-slider .news-slider__list"
        ).render();
        
        new NewSliderCard(
            "img/index/slider-img3.png",
            "img",
            "Скор 250 ЕС к.э.",
            200,
            "В наявності",
            "1 шт",
            ".news-slider .news-slider__list"
            ).render();
            
        new NewSliderCard(
            "img/index/slider-img4.png",
            "img",
            "Петунія Софістика F1",
            20,
            "В наявності",
            "1 шт",
            ".news-slider .news-slider__list"
        ).render();
                
        new NewSliderCard(
            "img/index/slider-img1.png",
            "img",
            "Петунія Софістика F1",
            200,
            "В наявності",
            "1 шт",
            ".news-slider .news-slider__list"
        ).render();
            
        new ActionSliderCard(
            "img/index/slider-img1.png",
            "img",
            "Петунія Софістика F1",
            20,
            "В наявності",
            "1 шт",
            ".action-slider .action-slider__list"
        ).render();
        new ActionSliderCard(
            "img/index/slider-img2.png",
            "img",
            "Скор 250 ЕС к.э.",
            589,
            "В наявності",
            "1 шт",
            ".action-slider .action-slider__list"
        ).render();
        
        new ActionSliderCard(
            "img/index/slider-img3.png",
            "img",
            "Скор 250 ЕС к.э.",
            200,
            "В наявності",
            "1 шт",
            ".action-slider .action-slider__list"
        ).render();
    
        new ActionSliderCard(
            "img/index/slider-img4.png",
            "img",
            "Петунія Софістика F1",
            20,
            "В наявності",
            "1 шт",
            ".action-slider .action-slider__list"
        ).render();
    
        new ActionSliderCard(
            "img/index/slider-img1.png",
            "img",
            "Петунія Софістика F1",
            200,
            "В наявності",
            "1 шт",
            ".action-slider .action-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img1.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img2.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img3.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img4.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img5.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img1.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();

        new PartnerSliderCard(
            "img/index/partner-slider-img2.png",
            "img",
            ".partner-slider .partner-slider__list"
        ).render();
        };
        
        export default slidersCard;