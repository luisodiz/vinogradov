import {qs, qsa} from '../../../js/helpers/query'
import {clickOutside} from '../../../js/helpers/clickOutside'
import '../../../components/header-bottom/header-bottom'
import '../../../components/menu/menu'

(function () {
  const searchToggle = qs('.header-top__actions-button_search')
  const search = qs('.header-top__search')
  const searchForm = qs('.search')
  const phoneSelect = qs('.header-top__phone-select')
  const auth = qs('.header-top__auth-block')
  const closeSearch = qs('.search__close-wrap', search)
  const input = qs('.header-top .search__input', search)
  const searchList = qs('.search-list', search)
  const body = qs('body')
  const headerMobileLogo = qs('.header-top__logo')
  const headerBurger = qs('.header-top__burger')
  let isInputInFocus = false
  const mobileMenu = qs('.menu_mobile')
  const mobileMenuBackdrop = qs('.menu-backdrop')
  const mobileMenuClose = qs('.menu_mobile .menu__close')
  const menuSearchButton = qs('.menu__search')
  const mobileSearch = qs('.search-mobile')
  const mobileSearchInput = qs('.search-mobile .input-field__input')
  const mobileSearchList = qs('.menu__search-list')

  const handleOutsideSearchListClick = (e) => {
    if (clickOutside(searchList, e) && !e.target.closest('.search')) {
      if (!searchList.classList.contains('search-list_hidden')) {
        searchList.classList.add('search-list_hidden')
      }
    }
  }

  closeSearch.addEventListener('click', () => {
    search.classList.remove('search_shown')
    searchToggle.classList.remove('header-top__actions-button_hidden')
    phoneSelect.classList.remove('header-top__phone-select_hidden')
    auth.classList.remove('auth-modal-block_hidden')
    headerMobileLogo.classList.remove('header-top__logo_hidden')
    headerBurger.classList.remove('header-top__burger_hidden')
    searchForm.reset()

    isInputInFocus = !isInputInFocus
  })

  searchToggle.addEventListener('click', () => {
    searchToggle.classList.add('header-top__actions-button_hidden')
    phoneSelect.classList.add('header-top__phone-select_hidden')
    auth.classList.add('auth-modal-block_hidden')
    headerMobileLogo.classList.add('header-top__logo_hidden')
    headerBurger.classList.add('header-top__burger_hidden')
    search.classList.add('search_shown')

    isInputInFocus = !isInputInFocus

    if (isInputInFocus) {
      input.focus({
        focusVisible: true
      })
    }
  })

  input.addEventListener('input', (e) => {
    if (e.target.value.length >= 3 && searchList) {
      searchList.classList.remove('search-list_hidden')
    } else {
      searchList.classList.add('search-list_hidden')
    }
  })

  body.addEventListener('click', handleOutsideSearchListClick)

  headerBurger.addEventListener('click', () => {
    mobileMenu.classList.add('shown')
    mobileMenuBackdrop.classList.remove('hidden')
    body.classList.add('hidden')
    mobileMenu.style.height = window.innerHeight + 'px'
  })

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('shown')
    mobileMenuBackdrop.classList.add('hidden')
    body.classList.remove('hidden')
    mobileSearchInput.value = ''
    mobileSearch.classList.remove('shown')
    mobileSearchList.classList.add('search-list_hidden')
  })

  mobileMenuBackdrop.addEventListener('click', () => {
    body.classList.remove('hidden')
    mobileMenuBackdrop.classList.add('hidden')
    mobileMenu.classList.remove('shown')
    mobileSearchInput.value = ''
    mobileSearch.classList.remove('shown')
    mobileSearchList.classList.add('search-list_hidden')
  })

  menuSearchButton.addEventListener('click', () => {
    mobileSearch.classList.add('shown')
  })

  mobileSearchInput.addEventListener('input', (e) => {
    if (e.target.value.length >= 3) {
      mobileSearchList.classList.remove('search-list_hidden')
    } else {
      mobileSearchList.classList.add('search-list_hidden')
    }
  })
})()
