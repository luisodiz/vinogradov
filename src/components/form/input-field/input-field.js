import {qs, qsa} from '../../../js/helpers/query'
import Inputmask from 'inputmask/lib/inputmask'

const inputFields = qsa('.input-field')

if (inputFields.length !== 0) {
  inputFields.forEach(inputField => {
    const input = qs('.input-field__input', inputField)
    const label = qs('.input-field__label', inputField)
    const {mask} = input.dataset

    if (mask) {
      Inputmask({ mask, jitMasking: true }).mask(input)
    }

    if (input.getAttribute('type') === 'password') {
      const passwordToggle = qs('.input-field__pass-toggle', inputField)

      if (passwordToggle) {
        passwordToggle.addEventListener('click', function () {
          if (this.classList.contains('input-field__pass-toggle_pass-hidden')) {
            this.classList.remove('input-field__pass-toggle_pass-hidden')
            input.setAttribute('type', 'text')
          } else {
            this.classList.add('input-field__pass-toggle_pass-hidden')
            input.setAttribute('type', 'password')
          }
        })
      }
    }
  })
}