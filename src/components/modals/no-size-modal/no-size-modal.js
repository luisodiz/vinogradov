import {Modal} from 'bootstrap'

const noSizeModalEl = document.querySelector('.no-size-modal')

let noSizeModalInstance = null

if (noSizeModalEl) {
  noSizeModalInstance = new Modal(noSizeModalEl)

  const sizeList = noSizeModalEl.querySelector('.no-size-list')

  if (sizeList) {
    sizeList.addEventListener('click', e => {
      const targetItem = e.target.closest('.no-size-list__item')

      if (targetItem) {
        const sizeListItems = sizeList.querySelectorAll('.no-size-list__item')
        sizeListItems.forEach(item => item.classList.remove('no-size-list__item_active'))
        targetItem.classList.add('no-size-list__item_active')
      }
    })
  }
}

export {noSizeModalInstance}