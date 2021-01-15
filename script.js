function hello() {
    console.log('Hello!', this);
};

hello();

const person = {
    name: 'Anatoly',
    age: 45,
    sayHello: hello
};

console.log(person); 
console.log(person.sayHello()); 
console.log(window.hello()); 

// Взаимодействие с контекстом BIND

// Создаем еще одну функцию в объекте person, которая будет ссылаться на функцию hello() и контекстом будет голбальное окно window, а не объекта person

person.sayHelloWindow = hello.bind(this); 
console.log(person.sayHelloWindow()); 
console.log(person); 

person.logInfo = function(job, phone) {
    console.group(`${this.name} Info:`);
    console.log(`Name is ${this.name}`); /* добавляем элемент объекта person со свойством logIInfo и функцией. this равно person,  так как новой свойство задано в                                       объекте  person*/
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`); // без this, т.к. аргумент функции
    console.log(`Phone is ${phone}`);
    console.groupEnd();
};

person.logInfo('Front-end', '+7 916 339 77 61');

const person1 = {
    name: 'Lena',
    age: 30
};

person.logInfo.bind(person1);

const fnLenaInfoLog = person.logInfo.bind(person1);
fnLenaInfoLog('Front-end', '+7-985-563-22-23'); 

const fnLenaLogInfo = person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23');
fnLenaLogInfo(); 

person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23')();

person.logInfo.call(person1, 'Front-end', '+7-985-563-22-23');

person.logInfo.apply(person1, ['Front-end', '+7-985-563-22-23']);




//==================================

//Контекст и прототипы

// Задан массивю Необходимо задать функцию, которая позволит умножать каждое из значений массива на определенное число, которое мы будем передавать

const multiple = [1, 2, 3, 4, 5, 6, 7];

// const multBy = function(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     });
// };


//Решение с помощью прототипа, чтобы можно было работать с любым массивом используя конекст и this

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
    });
}
console.log(multiple.multBy(11));

