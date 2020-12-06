const sum4 = ()=> {

    let i = 0;

    // объявление переменной для суммрования аргументов функции и присвоение значения 0
    let result = 0;

    // объявление пустого массива
    let dataOfArguments = [];

    // объявление переменной (пользователем черезе модалку браузера) и присвоение ей количества аргументов, которые должны быть суммированы
    let valueOfArguments = Number(prompt('Введите количество аргументов для сложения', ''));

    // обявление цикла while, в котором будет создаваться массив и вычисляться сумма элементов массива
    while (i < valueOfArguments) {

        // добавление в конец массива элементов, введенных пользователем
        dataOfArguments.push(Number(prompt(`Введите ${i+1}-ое число`, '')));

        // суммирование элементов массива
        result += dataOfArguments[i];
        i++; 

    };
    alert(`Задан массив из чисел [${dataOfArguments}]`);

    let num;

    let resultAdd = 0;

    let newDataOfArguments = dataOfArguments;

    for (num of newDataOfArguments) {
       
        resultAdd += num;
    };
        alert(`Сумма всех элементов массива равна ${resultAdd} - ЦИКЛ FOR...OF`);
};
sum4();


