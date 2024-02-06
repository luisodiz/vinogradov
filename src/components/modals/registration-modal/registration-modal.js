import {Modal} from 'bootstrap'
import {authModalInstance} from '../auth-modal/auth-modal'

const regModalEl = document.querySelector('.registration-modal')

let regModalInstance = null

if (regModalEl) {
  regModalInstance = new Modal(regModalEl)

  const switchToAuthModal = document.querySelector('.registration-modal__auth')
  switchToAuthModal.addEventListener('click', e => {
    e.preventDefault()
    regModalInstance.hide()
    authModalInstance.show()
  })
}

export {regModalInstance}