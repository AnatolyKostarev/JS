// Получение данных из поля ввода и вывод в консоль

let input = document.querySelector('.name');
console.log(input.value);

//Обработчик событий onsubmit. Вывод сообщения при клике на кнопку

let paragraph = document.querySelector('.text_subtitle');
let email = document.querySelector('.name');
let someForm = document.querySelector('.form');
someForm.onsubmit = function (evt) {
    evt.preventDefault();
    paragraph.textContent = 'Инструкция выслана на почту: ' + email.value;
};

// Задача по приоритетам

let counting = (55 * ((7 + 2) / (4 + 2)));
console.log(counting);