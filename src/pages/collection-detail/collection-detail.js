import {Collapse} from 'bootstrap'
import {authModalInstance} from '../../components/modals/auth-modal/auth-modal'
import {regModalInstance} from '../../components/modals/registration-modal/registration-modal'
import { ResizeObserver as Polyfill } from '@juggle/resize-observer'

import '../../components/filter/filter'


(function () {
  // Скрытие части текста
  const ResizeObserver = window.ResizeObserver || Polyfill
  const textBlock = document.querySelector('.collection-detail__info-body-inner')

  if (textBlock) {
    const textItems = textBlock.querySelectorAll('p')

    if (textItems && textItems.length) {
      const texts = [...textItems].map(text => text.textContent)
      const textsCopy = [...texts]
      const maxLength = 222
      let textLength = 0
      let textLengthBeforeLastShownItem = 0
      let lastIdx = null

      texts.forEach((text, idx) => {
        if (maxLength > textLength) {
          textLength += text.length
          lastIdx = idx
          if (idx > 0) {
            textLengthBeforeLastShownItem += texts[idx - 1].length
          }
        }
      })

      // Длина текста, который должен быть виден в конечном счете при ресайзе
      let lastVisibleTextLength = 0

      if (textLengthBeforeLastShownItem > 0) {
        lastVisibleTextLength = maxLength - textLengthBeforeLastShownItem
      } else {
        lastVisibleTextLength = maxLength
      }

      // Расчитать оставшуюся видимую часть текста
      const newTexts = texts.reduce((acc, item, idx) => {
        if (idx < lastIdx) {
          acc.push(item)
        }

        if (idx === lastIdx) {
          let newItem = item.slice(0, lastVisibleTextLength + 1)
          acc.push(newItem)
        }

        return acc
      }, [])

      const createParagraphsFromArr = arr => {
        return arr.map(item => {
          const pEl = document.createElement('p')
          pEl.textContent = item
          return pEl
        })
      }

      const moreEl = document.createElement('span')
      moreEl.classList.add('show-more-text')
      moreEl.textContent = 'еще'
      let isMoreElAdded = false

      const moreElClickHandle = (e) => {
        const allParagraphs = createParagraphsFromArr(textsCopy)
        textBlock.append(...allParagraphs)
        moreEl.classList.add('hidden')
      }

      const ro = new ResizeObserver((entries, observer) => {
        const { inlineSize: width } = entries[0].contentBoxSize[0]

        if (width < 1440) {
          textBlock.innerHTML = ''
          const textElements = createParagraphsFromArr(newTexts)
          moreEl.classList.remove('hidden')
          textElements[textElements.length - 1].insertAdjacentElement('beforeend', moreEl)
          textBlock.append(...textElements)

          if (!isMoreElAdded) {
            isMoreElAdded = true
            moreEl.addEventListener('click', moreElClickHandle)
          }
        } else {
          textBlock.innerHTML = ''
          textBlock.append(...createParagraphsFromArr(textsCopy))

          if (isMoreElAdded) {
            moreEl.removeEventListener('click', moreElClickHandle)
            moreEl.classList.add('hidden')
            moreEl.remove()
            isMoreElAdded = false
          }
        }
      })

      ro.observe(document.body)
    }
  }
})()