(function () {
  const menuLinks = document.querySelectorAll('.mobile-menu-list__link')
  const menuContent = document.querySelector('.menu__content')
  const mobileBack = document.querySelector('.mobile-menu-back')

  if (menuLinks && menuLinks.length) {
    menuLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const li = e.target.closest('.mobile-menu-list__item')
        if (li) {
          const categoryName = li.querySelector('.mobile-menu-list__link span').textContent
          const menuBackCategory = mobileBack.querySelector('.mobile-menu-back__category')
          menuBackCategory.textContent = categoryName
        }

        menuContent.style.transform = 'translateX(-50%)'
      })
    })
  }

  const menuBack = mobileBack.querySelector('.mobile-menu-back__button')

  menuBack.addEventListener('click', () => {
    menuContent.style.transform = 'translateX(0)'
  })
})()