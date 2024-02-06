import {clickOutside} from '../../js/helpers/clickOutside'

(function () {
  const menu = document.querySelector('.header-bottom__nav')

  if (menu) {
    const menuItems = menu.querySelectorAll('.header-bottom__nav-item')

    menuItems.forEach(item => {
      item.addEventListener('click', e => {
        menuItems.forEach(item => item.classList.remove('active'))

        item.classList.add('active')
      })
    })

    document.body.addEventListener('click', e => {
      if (clickOutside(menu, e)) {
        menuItems.forEach(item => item.classList.remove('active'))
      }
    })
  }
})()