import {clickOutside} from '../../js/helpers/clickOutside'

(function () {
  const filter = document.querySelector('.filter')

  if (filter) {
    const handleBodyClick = e => {
      const clickOutsideFilter = clickOutside(filter, e)

      if (clickOutsideFilter && !e.target.closest('.filter')) {
        const filterItems = document.querySelectorAll('.filter__item')
        filterItems.forEach(item => {
          const dropdown = item.querySelector('.filter__dropdown')
          if (dropdown) {
            dropdown.classList.remove('filter__dropdown_shown')
          }
          item.classList.remove('filter__item_active')
        })
      }
    }

    document.addEventListener('click', handleBodyClick)

    // Часть фильтра до кнопки "Еще"
    const hideMainAllDropdowns = (items, currentItem) => {
      items.forEach(item => {
        if (item !== currentItem) {
          const dropdown = item.querySelector('.filter__dropdown')
          if (dropdown) {
            dropdown.classList.remove('filter__dropdown_shown')
          }
          item.classList.remove('filter__item_active')
        }

        const more = document.querySelector('.filter__item_more')
        if (more) {
          const moreItems = more.querySelectorAll('.filter__dropdown-item')
          moreItems.forEach(moreItem => {
            moreItem.classList.remove('filter__dropdown-item_active')
            const subdrop = moreItem.querySelector('.subdrop')
            subdrop.classList.remove('subdrop_shown')
          })
        }
      })
    }

    const filterItems = filter.querySelectorAll('.filter__item')

    filterItems.forEach(item => {
      item.addEventListener('click', e => {
        const target = e.target.closest('.filter__button')

        if (target) {
          if (!item.classList.contains('filter__item_mobile-toggler', 'filter__item_reset')) {
            hideMainAllDropdowns(filterItems, item)
            item.classList.toggle('filter__item_active')
          }

          const dropdown = item.querySelector('.filter__dropdown')

          if (dropdown) {
            dropdown.classList.toggle('filter__dropdown_shown')
          }
        }
      })
    })


    // Часть фильтра под кнопкой "Еще"
    const filterMore = filter.querySelector('.filter__item_more')

    const hideAllSubdrops = (items, currentItem) => {
      items.forEach(item => {
        if (item !== currentItem) {
          const subdrop = item.querySelector('.subdrop')
          subdrop.classList.remove('subdrop_shown')
        }
      })
    }

    if (filterMore) {
      filterMore.addEventListener('click', e => {
        const targetButton = e.target.closest('.filter__dropdown-button')
        if (targetButton) {
          const item = targetButton.closest('.filter__dropdown-item')
          const allItems = filterMore.querySelectorAll('.filter__dropdown-item')

          hideAllSubdrops(allItems, item)

          const subdrop = item.querySelector('.subdrop')
          subdrop.classList.toggle('subdrop_shown')
        }
      })
    }

    // Открытие фильтра
    const filterMobileWrap = document.querySelector('.filter-mobile-wrap')

    if (filterMobileWrap) {
      const filterMobile = document.querySelector('.filter-mobile')
      const filterMobileToggler = document.querySelector('.filter__item_mobile-toggler')
      const filterMobileClose = document.querySelector('.filter-mobile__close')
      const body = document.body

      const backdropFilter = document.createElement('div')
      backdropFilter.classList.add('backdrop-filter')

      const backdropHandler = () => {
        filterMobileWrap.style = ''
        filterMobile.classList.remove('active')
        backdropFilter.classList.remove('shown')
        backdropFilter.removeEventListener('click', backdropHandler)
        filterMobileClose.removeEventListener('click', backdropHandler)
        backdropFilter.remove()
        body.classList.remove('hidden')
      }

      filterMobileToggler.addEventListener('click', () => {
        filterMobileWrap.style.height = window.innerHeight + 'px'
        filterMobile.classList.add('active')
        const footer = document.querySelector('.footer')
        footer.insertAdjacentElement('afterend', backdropFilter)
        backdropFilter.classList.add('shown')
        backdropFilter.addEventListener('click', backdropHandler)
        filterMobileClose.addEventListener('click', backdropHandler)
        body.classList.add('hidden')
      })
    }
  }
})()