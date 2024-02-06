import {qs} from '../../js/helpers/query'
import {clickOutside} from '../../js/helpers/clickOutside'

const headerPhoneSelect = qs('.phone-select')

if (headerPhoneSelect) {
  const mainPhone = qs('header .phone-select__main-phone', headerPhoneSelect)
  const body = qs('body')
  const listWrap = qs('.phone-select__list-wrap', headerPhoneSelect)

  const handleBodyClick = e => {
    const clickOutsideList = clickOutside(listWrap, e)

    if (clickOutsideList && !e.target.closest('.phone-select')) {
      listWrap.classList.remove('phone-select__list-wrap_shown')
      mainPhone.classList.remove('phone-select__main-phone_shown-list')
    }
  }

  mainPhone.addEventListener('click', e => {
    e.preventDefault()
    listWrap.classList.toggle('phone-select__list-wrap_shown')

    if (listWrap.classList.contains('phone-select__list-wrap_shown')) {
      body.addEventListener('click', handleBodyClick)
      mainPhone.classList.add('phone-select__main-phone_shown-list')
    } else {
      body.removeEventListener('click', handleBodyClick)
      mainPhone.classList.remove('phone-select__main-phone_shown-list')
    }
  })
}