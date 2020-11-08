//Обработчик событий onclick. Счетчик количества нажатий на кнопку

let likesNumber = document.querySelector('.likes-number'); //объявляем переменную и присваиваем значение
let counter = 0; //объявляем переменную для подсчета кликов и присваиваем значение равное нулю

let heart = document.querySelector('.heart'); // объявляем переменную для кнопки
heart.onclick = function () { //подключаем обработчик события для переменной heart - кнопки.
    likesNumber.textContent = ++counter; //выводим на экран значение переменной после клика по кнопке
    heart.classList.toggle('added'); // подключаем инструкцию, позволяющую добавлять и убирать класс кнопки
};