import {qs, qsa} from '../../js/helpers/query'
import Swiper, {Navigation, Pagination} from 'swiper'

const brandSliders = qsa('.brand-slider')

if (brandSliders && brandSliders.length) {
  brandSliders.forEach(slider => {
    new Swiper(qs('.brand-slider__swiper', slider), {
      modules: [Pagination],
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        el: qs('.brand-slider__pagination', slider),
        clickable: true
      },
      observer: true,
      on: {
        init: function (swiper) {
          swiper.slideTo(1)
        }
      }
    })
  })
}