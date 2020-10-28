// Поиск класса кнопки
document.querySelector('.order-text__button');
//Вывод в консоль найденного класса кнопки
console.log(document.querySelector('.order-text__button'));
//Добавление класса кнопки. Кнопка становится красной
document.querySelector('.order-text__button').classList.add('button-o');
//Удаление класса кнопки. Кнопка приобретает изначальный вид
document.querySelector('.order-text__button').classList.remove('button-o');