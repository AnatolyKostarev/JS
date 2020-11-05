// Добавление класса с помощью class.List.add

//Объявление переменной с помощью let для заголовка формы

let textTitle = document.querySelector('.text_title');

//Удаление класса заголовка ТРЕБУЕТСЯ НАЗВАНИЕ
textTitle.classList.remove('text_title');

//Присвоение нового класса заголовку и смена цвета с черного на красный
textTitle.classList.add('text_title_color');

// Обработчик событий

// Объвление переменной saveButton и присвоение ей элемента but_save: КНОПКА СОХРАНИТЬ

let saveButton = document.querySelector('.but_save');

// Добавление обработчика событий и вывод в консоль "Кнопка нажата!"

saveButton.onclick = function() {
    console.log('Кнопка нажата!');
}

// Работа с текстовым содержимым 

// Объявление переменной message и присвоение элемента 'p'

let message = document.querySelector('p')

//Вывод в консоль содержимого параграфа, тега <p>

console.log(message.textContent);