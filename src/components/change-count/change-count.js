(function () {
  const changeCountItems = document.querySelectorAll('.change-count')

  if (changeCountItems && changeCountItems.length) {
    changeCountItems.forEach(el => {
      const minus = el.querySelector('.change-count__button_minus'),
        plus = el.querySelector('.change-count__button_plus'),
        input = el.querySelector('.change-count__input')

      let value = +input.value

      plus.addEventListener('click', () => {
        value += 1
        input.value = value
      })

      minus.addEventListener('click', () => {
        if (input.value > 0) {
          value -= 1
        }
        input.value = value
      })
    })
  }
})()