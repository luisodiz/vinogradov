import Nouislider from 'nouislider'
import 'nouislider/dist/nouislider.css'

(function () {
  const selectPrices = document.querySelectorAll('.select-price')

  if (selectPrices && selectPrices.length) {
    selectPrices.forEach(select => {
      const range = select.querySelector('.select-price__range')
      const input1 = select.querySelector('.select-price__input1')
      const input2 = select.querySelector('.select-price__input2')
      const inputs = [input1, input2]

      Nouislider.create(range, {
        start: [500, 999999],
        connect: true,
        step: 1,
        range: {
          'min': [500],
          'max': [999999]
        },
      })

      range.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle])
      })

      const setRange = (i, value) => {
        let arr = [null, null]
        arr[i] = value
        range.noUiSlider.set(arr)
      }

      inputs.forEach((el, idx) => {
        el.addEventListener('change', e => {
          setRange(idx, e.currentTarget.value)
        })
      })
    })
  }
})()