import {Collapse} from 'bootstrap'
import {authModalInstance} from '../../components/modals/auth-modal/auth-modal'
import {regModalInstance} from '../../components/modals/registration-modal/registration-modal'

import {qs, qsa} from "../../js/helpers/query";
import Swiper, {Navigation, Pagination} from "swiper";

(function () {
  const collectionItems = qsa('.collections-item')
  if (collectionItems && collectionItems.length) {
    collectionItems.forEach(collectionItem => {
      const productsSlider = qs('.products-slider', collectionItem)
      new Swiper(qs('.products-slider__swiper', productsSlider), {
        slidesPerView: 2,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: qs('.products-slider__left', productsSlider),
          nextEl: qs('.products-slider__right', productsSlider),
        },
        pagination: {
          el: qs('.products-slider__pagination', productsSlider),
          clickable: true
        },
        breakpoints: {
          0: {
            spaceBetween: 6
          },
          768: {
            spaceBetween: 20
          },
          1400: {
            spaceBetween: 20
          }
        },
        observer: true
      })
    })
  }
})()