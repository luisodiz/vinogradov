function cutLongString(element, count_lit){
  console.log(element)
  // текст в блоке
  var text = element.textContent;
  // длина текста в блоке
  var all_len = text.length;
  // хранилище для нового текста
  var new_text;

  // если текст больше заданного лимита, то обрезаем его
  if (all_len > count_lit){
    // обрезаем текст и добавляем три точки в конец
    new_text = text.substr(0, (count_lit - 3)) + '...';

    // заменяем текст в блоке
    element.textContent = new_text;
  }
}

export default cutLongString