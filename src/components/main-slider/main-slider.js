import Swiper, {Navigation, Pagination} from 'swiper'
import {qs} from '../../js/helpers/query'

new Swiper(qs('.main-slider__swiper'), {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.main-slider__right',
    prevEl: '.main-slider__left'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
})
