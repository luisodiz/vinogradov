import {Collapse, Tab} from 'bootstrap'
import {authModalInstance} from '../../components/modals/auth-modal/auth-modal'
import {regModalInstance} from '../../components/modals/registration-modal/registration-modal'
import Swiper, {Navigation, Pagination, Thumbs, FreeMode, Controller} from 'swiper'
import Plyr from 'plyr'
import {initProductSlider} from '../../components/products-slider-section/products-slider-section'

(function () {
  const productPhotos = document.querySelector('.product-photos')

  if (productPhotos) {
    const thumbsContainer = productPhotos.querySelector('.slider-thumbs-container')
    const thumbsSlider = productPhotos.querySelector('.slider-thumbs .swiper')
    const mainSlider = productPhotos.querySelector('.slider-main .swiper')

    const thumbsSwiper = new Swiper(thumbsSlider, {
      modules: [Controller, Navigation],
      direction: 'vertical',
      slidesPerView: 'auto',
      navigation: {
        prevEl: thumbsContainer.querySelector('.slider-thumbs-nav__prev'),
        nextEl: thumbsContainer.querySelector('.slider-thumbs-nav__next'),
      },
      breakpoints: {
        0: {
          spaceBetween: 5,
        },
        1400: {
          spaceBetween: 10
        }
      }
    })

    const mainSwiper = new Swiper(mainSlider, {
      modules: [Pagination, Thumbs, Controller],
      slidesPerView: 1,
      pagination: {
        el: mainSlider.querySelector('.swiper-pagination'),
        clickable: true
      },
      thumbs: {
        swiper: thumbsSwiper
      },
      on: {
        init(swiper) {
          const activeSlide = swiper.slides[swiper.activeIndex]
          const video = activeSlide.querySelector('.slider-main__video')

          if (video) {
            video.currentTime = 0
            video.play()
          }
        },
        slideChange(swiper) {
          const activeSlide = swiper.slides[swiper.activeIndex]
          const videoAtActiveSlide = activeSlide.querySelector('.slider-main__video')

          if (videoAtActiveSlide) {
            videoAtActiveSlide.currentTime = 0
            videoAtActiveSlide.play()
          }
        }
      }
    })
  }

  // Добавить в избранное
  const addToFavorite = document.querySelector('.slider-main__add-to-favorite')
  if (addToFavorite) {
    addToFavorite.addEventListener('click', () => {
      addToFavorite.classList.toggle('slider-main__add-to-favorite_active')
    })
  }


  // Выбор размера
  const productDescSlider = document.querySelector('.product-desc__slider')

  if (productDescSlider) {
    const productDescSwiperEl = productDescSlider.querySelector('.swiper')
    new Swiper(productDescSwiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 4,
      modules: [Navigation],
      navigation: {
        prevEl: productDescSlider.querySelector('.product-desc__slider-nav-prev'),
        nextEl: productDescSlider.querySelector('.product-desc__slider-nav-next'),
      }
    })

    productDescSwiperEl.addEventListener('click', (e) => {
      const slides = productDescSwiperEl.querySelectorAll('.swiper-slide')
      const slideTarget = e.target.closest('.swiper-slide')

      if (slideTarget) {
        slides.forEach(s => s.classList.remove('swiper-slide_selected'))
        slideTarget.classList.add('swiper-slide_selected')
      }
    })
  }

  // Видео плеер
  const videoPlayer = document.querySelector('.video-plyr')
  if (videoPlayer) {
    const video = videoPlayer.querySelector('.video-plyr__video'),
      poster = videoPlayer.querySelector('.video-plyr__poster')

    let plyr = null

    if (poster && video) {
      plyr = new Plyr(video, {
        settings: [],
        hideControls: false
      })

      plyr.on('ended', () => {
        poster.style.display = 'block'
      })

      poster.addEventListener('click', () => {
        poster.style.display = 'none'
        plyr.play()
      })
    } else if (video) {
      plyr = new Plyr(video, {
        settings: [],
        hideControls: false
      })

      plyr.on('ended', () => {
        poster.style.display = 'block'
      })
    }
  }


  // Слайдеры
  // Секция "В другом исполнении"
  const otherPerformanceSection = document.querySelector('.product-detail__other-performance')
  if (otherPerformanceSection) {
    initProductSlider(otherPerformanceSection)
  }

  // Секция "Рекомендуем"
  const recommendSection = document.querySelector('.product-detail__recommend')
  if (recommendSection) {
    initProductSlider(recommendSection)
  }

})()