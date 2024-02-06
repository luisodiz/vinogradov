import {Collapse} from 'bootstrap'
import {authModalInstance} from '../../components/modals/auth-modal/auth-modal'
import {regModalInstance} from '../../components/modals/registration-modal/registration-modal'
import {qs, qsa} from '../../js/helpers/query'
import '../../components/main-slider/main-slider'
import Swiper, {Navigation, Pagination} from 'swiper'
import { ResizeObserver as Polyfill } from '@juggle/resize-observer'

(function () {
  const productsSliderContainer = qs('.home__products-slider-section')
  if (productsSliderContainer) {
    new Swiper(qs('.products-slider__swiper', productsSliderContainer), {
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: qs('.products-slider__left', productsSliderContainer),
        nextEl: qs('.products-slider__right', productsSliderContainer),
      },
      pagination: {
        el: qs('.products-slider__pagination', productsSliderContainer),
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
  }

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

  // Скрытие части текста
  const ResizeObserver = window.ResizeObserver || Polyfill
  const textBlock = document.querySelector('.master__text-block')

  if (textBlock) {
    const blockquote = textBlock.querySelector('.master__blockquote')
    let blockQuoteText = blockquote.textContent.trim(),
      blockQuoteTextCopy = blockQuoteText

    const moreEl = document.createElement('span')
    moreEl.classList.add('show-more-text')
    moreEl.textContent = 'еще'
    let isMoreElAdded = false

    const moreElClickHandle = (e) => {
      blockquote.textContent = blockQuoteTextCopy
      moreEl.style.display = 'none'
    }

    const ro = new ResizeObserver((entries, observer) => {
      const { inlineSize: width } = entries[0].contentBoxSize[0]

      if (width < 1440) {
        blockQuoteText = blockQuoteText.slice(0, 255)
        blockquote.textContent = blockQuoteText
        blockquote.insertAdjacentElement('afterend', moreEl)

        if (!isMoreElAdded) {
          isMoreElAdded = true
          moreEl.addEventListener('click', moreElClickHandle)
        }
      } else {
        blockquote.textContent = blockQuoteTextCopy

        if (isMoreElAdded) {
          moreEl.removeEventListener('click', moreElClickHandle)
          moreEl.remove()
          isMoreElAdded = false
        }
      }
    })

    ro.observe(document.body)
  }
})()






