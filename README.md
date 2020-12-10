# JS
studying and practice JS

1.	Реализуйте функцию removeElement(array, item) для удаления элемента item из массива array. 

Например:

const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 5);

console.log(array);

// Результат: [1, 2, 3, 4, 6, 7]

или

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElement(array, 'Lima'); // удалит 'Lima' из массива

removeElement(array, 'Berlin'); // не удалит ничего

console.log(array);

// Результат: ['Kiev', 'Beijing', 'Saratov']


Для поиска в массиве используем метод arr.indexOf(array, item)

arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.

Далее используем метод arr.splice для удаления найденного элемента массива из заданного массива
