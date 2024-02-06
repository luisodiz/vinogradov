import {qs, qsa} from '../../js/helpers/query'

const addToFavoritesButtons = qsa('.add-to-favorites')

if (addToFavoritesButtons.length) {
  addToFavoritesButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('add-to-favorites_active')
    })
  })
}