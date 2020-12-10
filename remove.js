'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) => {  // объявляем стрелочную функцию
  const index = array.indexOf(item);      // константе index присваиваем значение элемента массива, найденного с помощью метода arr.indexOf(item, from)
  if (index !== -1) {                    // метод arr.indexOf(item, from) возвращает индекс, на котором был найден искомый элемент, в противном случае -1
                                         // поэтому проверяем index на неравенство -1, т.е. найден искомый элемент
    array.splice(index, 1);               //с помощью метода arr.splice удаляем один найденный элемент с позиции index
  }
};
removeElement(array, 5);
console.log(array); //(6) [1, 2, 3, 4, 6, 7]