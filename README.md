# Проверка синтаксиса

Каким будет результат выполнения этого кода?

        let user = {
        name: "Джон",
        go: function() { alert(this.name) }
        }

        (user.go)()

Код выдаст ошибку ReferenceError: Cannot access 'user' before initialization потому что
после user = {....} пропущена ";"


# Объясните значение "this"

В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

        let obj, method;

        obj = {
        go: function() { alert(this); }
        };

        obj.go();               // (1) [object Object]

        (obj.go)();             // (2) [object Object]

        (method = obj.go)();    // (3) undefined

        (obj.go || obj.stop)(); // (4) undefined


## Вот как это объясняется.

1. Это обычный вызов метода объекта через точку ., и this ссылается на объект перед точкой.

2. Здесь то же самое. Круглые скобки (оператор группировки) тут не изменяют порядок выполнения операций – доступ к методу через точку в любом случае срабатывает первым.

3. Здесь мы имеем более сложный вызов (expression).method(). Такой вызов работает, как если бы он был разделён на 2 строчки:

f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
f();        // вызов функции, на которую ссылается f
Здесь f() выполняется как функция, без передачи значения this.

4. Тут похожая ситуация на случай (3) – идёт потеря значения this.

Чтобы объяснить поведение в примерах (3) и (4), нам нужно помнить, что доступ к свойству (через точку или квадратные скобки) возвращает специальное значение ссылочного типа (Reference Type).

За исключением вызова метода, любая другая операция (подобно операции присваивания = или сравнения через логические операторы, например ||) превращает это значение в обычное, которое не несёт информации, позволяющей установить this.


# Использование "this" в литерале объекта

Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

        function makeUser() {
        return {
            name: "Джон",
            ref: this
        };
        };

        let user = makeUser();

        alert( user.ref.name ); // Каким будет результат?

        Ошибка.

Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова метода.

Здесь значение this внутри makeUser() является undefined, потому что makeUser() вызвана как функция, не через «точку» как метод.

Литерал объекта сам по себе не влияет на this. Значение this одно для всей функции и блоков кода в ней, литеральные объекты не меняют его.

Таким образом, при создании объекта ref: this берёт текущее значение this функции makeUser().

А вот противоположный случай:

        function makeUser() {
        return {
            name: "Джон",
            ref() {
            return this;
            }
        };
        };

        let user = makeUser();

        alert( user.ref().name ); // Джон

Теперь это работает, поскольку user.ref() вызывается как метод. И значением this становится объект перед точкой ..


# Создайте калькулятор

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

        let calculator = {
        // ... ваш код ...
        };

        calculator.read();
        alert( calculator.sum() );
        alert( calculator.mul() );


# Цепь вызовов

Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

        let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() { // показывает текущую ступеньку
            alert( this.step );
        }
        };

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

        ladder.up();
        ladder.up();
        ladder.down();
        ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

        ladder.up().up().down().showStep(); // 1