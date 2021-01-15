# JS
studying and practice JS

##  Взаимодействие с контекстом. Метод.THIS

        function hello() {
            console.log('Hello!', this);
        };

        hello();    

Объявлена функция hello(), результатом выполнения которой будет вывод в консоль следующего сообщения:

"Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}"

Так как .this объявлен внутри функции и не видит контекста, то обращается к глобальному окружению  Window.


Добавим объект:

        const person = {
            name: 'Anatoly',
            age: 45,
            sayHello: hello
        };

        console.log(person);

Выведет в консоль свойства объекта: {name: "Anatoly", age: 45, sayHello: ƒ}.
В качестве .this контекстом будет функция hello().

        console.log(person.sayHello());

Выведет в консоль: Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}.

        console.log(window.hello());

Выведет в консоль: Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}

Таким образом, видно, что контекстом .this всегда будет объект, стоящий слева от точки. Например, person будет контекстом this для person.hello().


## Взаимодействие с контекстом. Метод .BIND, .CALL, .APPLY

Суть метода .BIND заключается в том, что он возвращает новую функцию с контекстом передаваемого объекта, которую можно вызвать сразу или по мере необходимости.

Создадим еще одну свойство в виде функции в объекте person, которая будет ссылаться на функцию hello() и контекстом которой будет голбальное  Window,
а не объекта person.

        person.sayHelloWindow = hello.bind(this);

Данная запись добавляет свойство объекта person с ключем и значением sayHellowindow: hello().

        console.log(person.sayHelloWindow());

Выведет в консоль: Hello! Window {window: Window, self: Window, document: document, name: "", location: Location, …}.

        console.log(person); //выведет объект  {name: "Anatoly", age: 45, sayHello: ƒ, sayHelloWindow: ƒ}


Добавим новое свойство объекта person с ключем logInfo и значением функции c аргументами job, phone. Контекстом для .this является объект person

        person.logInfo = function(job, phone) {
            console.group(`${this.name} Info:`);
            console.log(`Name is ${this.name}`);
            console.log(`Age is ${this.age}`);
            console.log(`Job is ${job}`);
            console.log(`Phone is ${phone}`);
            console.groupEnd();
        };

        person.logInfo('Front-end', '+7 916 339 77 61');

Выедет в консоль:

        Anatoly Info:
        Name is Anatoly
        Age is 45
        Job is Front-end
        Phone is +7 916 339 77 61

Добавим еще один объект:

        const person1 = {
            name: 'Lena',
            age: 30
        };

Необходимо вывести в консоль свойства объекта person1, а именно: имя Lena, возраст 30. Для этого используем метод .bind.

1. способ: связать контекст объекта и вернуть функцию; вызвать функцию с аргументами job, phone.

        const fnLenaInfoLog = person.logInfo.bind(person1);
        fnLenaInfoLog('Front-end', '+7-985-563-22-23'); 

2. способ: связать контекст объекта и вернуть функцию с переданными в нее аргументами job, phone; вызвать функцию.

        const fnLenaInfoLog = person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23');
        fnLenaInfoLog(); 

3. способ: связать контекст объекта и вернуть функцию с переданными в нее аргументами job, phone с одновременным вызовом функции.

        person.logInfo.bind(person1, 'Front-end', '+7-985-563-22-23')();


Выведет в консоль:

        Lena Info:
        Name is Lena
        Age is 30
        Job is Front-end
        Phone is +7-985-563-22-23

Также эту задачу можно решить с использованием метода .CALL или .APLLY.

Отличие первого метода от второго соответственно заключается в том, что при использовании первого метода аргументы передаются списком, при использовании
вторго метода аргументы передаются в виде массива ['Front-end', '+7-985-563-22-23'].

МЕТОД CALL аргументы передаются "списком"

        person.logInfo.call(person1, 'Front-end', '+7-985-563-22-23');

МЕТОД APPLY аргументы передаются массивом [array]

        person.logInfo.apply(person1, ['Front-end', '+7-985-563-22-23']);

Отличие метода .bind от .call/apply заключается в том, что он возвращает новую  функцию с вызываемым контекстом объекта, и которую можно вызвать сразу или при
необходимости. Методы .call/apply передают контекст объекта и параметры в функцию и сразу вызывают её.


## Взаимодействие с контекстом. Прототипы.

Задан массив чисел. Необходимо задать функцию, которая позволит умножать каждое из значений массива на определенное число, которое будет передавать пользователь.

1. способ:

        const multiple = [1, 2, 3, 4, 5, 6, 7];

            const multBy = function(arr, n) {
                return arr.map(function(i) {
                    return i * n;
                });
            };

2. способ позволяет создать функцию, которая будет работать с любым массивом, используя контекст и .this.

        Array.prototype.multBy = function(n) {
            return this.map(function(i) {
                return i * n;
            });
        };

        console.log(multiple.multBy(11));

Выведет в консоль:

        (7) [11, 22, 33, 44, 55, 66, 77]
            0: 11
            1: 22
            2: 33
            3: 44
            4: 55
            5: 66
            6: 77
            length: 7