# JS
studying and practice JS


Итерирование циклами

Реализуйте функцию sum(...args), которая суммирует все свои аргументы, пятью разными способами.

Примеры вызовов с результатами:

const a = sum(1, 2, 3) // a === 6

const b = sum(0) // b === 0

const c = sum() // c === 0

const d = sum(1, -1, 1) // d === 1

const e = sum(10, -1, -1, -1) // e === 7

1.	Цикл for

2.	Цикл for..of

3.	Цикл while

4.	Цикл do..while

5.	Метод Array.prototype.reduce()

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Array.prototype.reduce()

Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

Синтаксис

array.reduce(callback[, initialValue])

Параметры

callback

Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

accumulator

Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).

currentValue

Текущий обрабатываемый элемент массива.

index
Необязательный
Индекс текущего обрабатываемого элемента массива.

array
Необязательный
Массив, для которого была вызвана функция reduce.

initialValue
Необязательный
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

Описание

Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента:
1. начальное значение (или значение от предыдущего вызова callback), 
2. значение текущего элемента,
3. текущий индекс и массив, по которому происходит итерация.
4. значение, возвращённое методом reduce()

При первом вызове функции, параметры accumulator и currentValue могут принимать одно из двух значений. Если при вызове reduce() передан аргумент initialValue, то значение accumulator будет равным значению initialValue, а значение currentValue будет равным первому значению в массиве. Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.


Цикл «do…while»

Проверку условия можно разместить под телом цикла, используя специальный синтаксис do..while:

do {
  // тело цикла
} while (condition);

Цикл сначала выполнит тело, а затем проверит условие condition, и пока его значение равно true, он будет выполняться снова и снова.

Например:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным. На практике чаще используется форма с предусловием: while(…) {…}.


Цикл «while»

Цикл while имеет следующий синтаксис:

while (condition) {
  // код
  // также называемый "телом цикла"
}

Код из тела цикла выполняется, пока условие condition истинно.

Например, цикл ниже выводит i, пока i < 3:

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}

Одно выполнение тела цикла по-научному называется итерация. Цикл в примере выше совершает три итерации.

Если бы строка i++ отсутствовала в примере выше, то цикл бы повторялся (в теории) вечно. На практике, конечно, браузер не позволит такому случиться, он предоставит пользователю возможность остановить «подвисший» скрипт, а JavaScript на стороне сервера придётся «убить» процесс.

Любое выражение или переменная может быть условием цикла, а не только сравнение: условие while вычисляется и преобразуется в логическое значение.

Например, while (i) – более краткий вариант while (i != 0):

let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}