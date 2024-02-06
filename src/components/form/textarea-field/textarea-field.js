import {qs, qsa} from '../../../js/helpers/query'

const textareaFields = qsa('.textarea-field')

if (textareaFields.length !== 0) {
  textareaFields.forEach(textareaField => {
    const textarea = qs('.textarea-field__textarea', textareaField)
    const labelBg = qs('.textarea-field__label-bg', textareaField)

    if (labelBg && textarea.value.trim().length > 0) {
      labelBg.style.display = 'block'
    }

    textarea.addEventListener('input', (e) => {
      if (e.target.value.length > 0) {
        labelBg.style.display = 'block'
      } else {
        labelBg.style = ''
      }
    })
  })
}