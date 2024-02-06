import Swiper, {Navigation, Pagination} from 'swiper'

const initProductSlider = container => {
  const swiperEl = container.querySelector('.products-slider__swiper')

  if (swiperEl) {
    const prevButton = container.querySelector('.products-slider__left'),
      nextButton = container.querySelector('.products-slider__right'),
      pagination = container.querySelector('.products-slider__pagination')

    return new Swiper(swiperEl, {
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: prevButton,
        nextEl: nextButton,
      },
      pagination: {
        el: pagination,
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 6
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      observer: true
    })
  } else {
    return null
  }
}

export {
  initProductSlider
}