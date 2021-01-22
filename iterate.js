'use strict';

const obj = {a: 1, b: 2, c:3};                                      // объявлен объект со свойствами

const iterate = (object, callback) => {                             // объявлена функция с аргументами, принимающими объект и функцию
    callback();                                                     // вызов функции, которая становится аргументом ф-ии iterate();
    console.dir(object);                                            // вывод свойств объекта в консоль
}

const showObject = function(key) {                                  // объявлена ф-ия, итерирующая ключи переданного объекта
    for (key in obj) {
        console.log(`{ key: '${key}', value: ${obj[key]} }`);       // вывод в консоль ключа и знаяения свойства объекта
    }
}

obj.d = 4;                                                          // добавлено свойство объекта obj с ключем d и присвоением ему значения 4
iterate(obj, showObject);                                           // вызов ф-ии iterate()