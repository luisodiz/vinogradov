(function () {
  const checkboxes = document.querySelectorAll('.checkbox-field')

  if (checkboxes && checkboxes.length) {

    const handleClick = (input) => {
      input.checked = !input.checked;
    }

    checkboxes.forEach(checkboxField => {
      const mask = checkboxField.querySelector('.checkbox-field__mask')
      const input = checkboxField.querySelector('.checkbox-field__checkbox')

      mask.addEventListener('click', () => handleClick(input))
    })
  }
})()