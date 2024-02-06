import {qs, qsa} from '../../js/helpers/query'
import Swiper, {Navigation, Pagination} from 'swiper'
import cutLongString from '../../js/helpers/cutLongStrings'

const newsSliders = qsa('.news-slider')

if (newsSliders && newsSliders.length) {
  newsSliders.forEach(slider => {
    const descOfSlides = qsa('.blog-article__desc', slider)

    if (descOfSlides && descOfSlides.length) {
      descOfSlides.forEach(desc => {
        cutLongString(desc, 100)
      })
    }

    new Swiper(qs('.news-slider__swiper', slider), {
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: qs('.news-slider__left', slider),
        nextEl: qs('.news-slider__right', slider),
      },
      pagination: {
        el: qs('.news-slider__pagination', slider),
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
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
  })
}