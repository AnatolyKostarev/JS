# JS
studying and practice JS
Счетчик количество нажатий на кнопку

//объявляем переменную и присваиваем значение
let likesNumber = document.querySelector('.likes-number'); 

//объявляем переменную для подсчета кликов и присваиваем значение равное нулю
let counter = 0; 

// объявляем переменную для кнопки
let heart = document.querySelector('.heart');

//подключаем обработчик события для переменной heart - кнопки.
heart.onclick = function () { 

    //выводим на экран значение переменной после клика по кнопке
    likesNumber.textContent = ++counter; 

    // подключаем инструкцию, позволяющую добавлять и убирать класс кнопки
    heart.classList.toggle('added'); 
};