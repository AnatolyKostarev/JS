Функция для удаления нескольких элементов из массива removeElements(array, item1, ... itemN).

Например:

const array = [1, 2, 3, 4, 5, 6, 7];

removeElements(array, 5, 1, 6);

console.log(array);

// Результат: [2, 3, 4, 7]

или

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElements(array, 'Lima', 'Berlin', 'Kiev');

console.log(array);

// Результат: ['Beijing', 'Saratov']
