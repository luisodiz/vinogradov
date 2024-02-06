import {Modal} from 'bootstrap'
import {regModalInstance} from '../registration-modal/registration-modal'

const authModalEl = document.querySelector('.auth-modal')

let authModalInstance = null

if (authModalEl) {
  authModalInstance = new Modal(authModalEl)

  const switchToRegistrationModal = document.querySelector('.auth-modal__registration')

  switchToRegistrationModal.addEventListener('click', e => {
    e.preventDefault()
    authModalInstance.hide()
    regModalInstance.show()
  })
}

export {authModalInstance}