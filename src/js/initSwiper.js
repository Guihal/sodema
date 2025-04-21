import { elementReady } from './utils/elementReady'

export async function initSwiper() {
    const element = await elementReady('.hero-swiper .swiper')

    new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.hero-swiper_next',
            prevEl: '.hero-swiper_prev',
        },
        pagination: {
            el: '.hero-swiper_pag',
            type: 'bullets',
        },
    })
}
