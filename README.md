# JS
studying and practice JS


# Функции высшего порядка


## Задача 1

1.	Реализуйте функцию iterate(object, callback), которая будет итерировать все ключи переданного объекта, вызывая  
для каждого callback со следующим контрактом callback(key, value, object). Например:

        const obj = { a: 1, b: 2, c: 3 };
        iterate(obj, (key, value) => {
            console.log({ key, value });
        });

    Вывод:

        { key: 'a', value: 1 }
        { key: 'b', value: 2 }
        { key: 'c', value: 3 }


## Задача 2

2.	Реализуйте функцию store(value), которая сохранит значение в замыкании возвращаемой функции,  
а после ее вызова вернет значение из замыкания, как в примере:

        const read = store(5);
        const value = read();
        console.log(value); // Output: 5


## Задача 3

3.	Реализуйте функцию contract(fn, ...types), которая оборачивает fn (первый аргумент) и проверяет типы аргументов  
(все аргументы кроме первого и последнего) и результата (последний аргумент), гегенрируя исключение TypeError, если типы не совпадают.  
 Как в следующем примере:

        const add = (a, b) => a + b;
        const addNumbers = contract(add, Number, Number, Number);
        const res = addNumbers(2, 3);
        console.dir(res); // Output: 5

    и

        const concat = (s1, s2) => s1 + s2;
        const concatStrings = contract(concat, String, String, String);
        const res = concatStrings('Hello ', 'world!');
        console.dir(res); // Output: Hello world!


