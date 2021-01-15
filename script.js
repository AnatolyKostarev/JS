function hello() {
    console.log('Hello!', this);
};

hello(); /*  Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}, еак как .this внутри
              функции не видит контекста и обращается к глобальному окпужению браузера window*/

const person = {
    name: 'Anatoly',
    age: 45,
    sayHello: hello
};

console.log(person); // выведет {name: "Anatoly", age: 45, sayHello: ƒ}. В качестве .this контекстом будет функция hello()
console.log(person.sayHello()); // выведет Hello! {name: "Anatoly", age: 45, sayHello: ƒ} и вместо ключевого .this будет выведен объект
console.log(window.hello()); // контекстом .this всегда будет объект, стоящий слева от точки


// Взаимодействие с контекстом BIND

// Создаем еще одну функцию в объекте person, которая будет ссылаться на функцию hello() и контекстом будет голбальное окно window, а не объекта person

person.sayHelloWindow = hello.bind(this); // добавлено свойство объекта person с ключем и значением sayHellowindow: hello()
console.log(person.sayHelloWindow()); // выведет Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.log(person); //выведет объект  {name: "Anatoly", age: 45, sayHello: ƒ, sayHelloWindow: ƒ}

person.logInfo = function(job, phone) {
    console.group(`${this.name} Info:`);
    console.log(`Name is ${this.name}`); /* добавляем элемент объекта person со свойством logIInfo и функцией. this равно person,  так как новой свойство задано в                                       объекте  person*/
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`); // без this, т.к. аргумент функции
    console.log(`Phone is ${phone}`);
    console.groupEnd();
};

person.logInfo();

const person1 = {
    name: 'Lena',
    age: 30
}

// МЕТОД BIND

//Добавим аргументы для ф-ии logInfo => job, phone str.27 above
// Нужно вывести в консоль имя Лена и ее возраст, используя logIngo()
// С помощью метода .bind создаем функцию по выводу контекста объекта person1

// person.logInfo.bind(person1); // выведет Name is Lena Age is 30. Для this контекстом будет объект person1

// const fnLenaInfoLog = person.logInfo.bind(person1); // 1 способ связать контекст объекта и задать функцию с арг job, phone
// fnLenaInfoLog('Front-end', '+7-985-563-22-23'); /* Lena Info:
                                                    // Name is Lena
                                                    // Age is 30
                                                    // Job is Front-end
                                                    // Phone is +7-985-563-22-23 */

// Второй способ вывода данных объекта person1

// const fnLenaLogInfo = person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23');
// fnLenaLogInfo();

//Третий способ метода .bind 

person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23')();

// Отличие метода .bind от .call заключается в том, что первый возвращает новую  функцию с вызываемым контекстом объектая и которую мы можем вызвать потом.
// Метод .call передает конекст в функцию и параметры и сразу вызывает эту ф-ию. 

//МЕТОД CALL аргументы передаются "списком"

person.logInfo.call(person1, 'Front-end', '+7-985-563-22-23');

//МЕТОД APPLY аргументы передаются [array]

person.logInfo.apply(person1, ['Front-end', '+7-985-563-22-23']);




//==================================

//Контекст и прототипы

// Задан массивю Необходимо задать функцию, которая позволит умножать каждое из значений массива на определенное число, которое мы будем передавать

const multiple = [1, 2, 3, 4, 5, 6, 7];

// const multBy = function(arr, n) {
//     return arr.map(function(i) {
//         return i *n;
//     });
// }


//Решение с помощью прототипа, чтобы можно было работать с любым массивом используя конекст и this

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
    });
}
console.log(multiple.multBy(11));

