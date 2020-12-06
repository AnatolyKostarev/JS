const array = [10, -1, -1, -1];                     // в константу присвоен массив значений
const reducer = (accumulator, currentValue) => {    // объявлена функция обратного вызова reducer()
    return accumulator + currentValue;              // 
}
alert(`Сумма элементов массива - ${array.reduce(reducer)} - Метод Array.prototype.reduce()`);


// Функция обратного вызова будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

//                  previousValue	currentValue	  index	        array	        возвращаемое значение
// первый вызов	          0	            10	            1	    [10, -1, -1, -1]	          10
// второй вызов	         10	            -1	            2	    [10, -1, -1, -1]               9
// третий вызов	          9	            -1	            3	    [10, -1, -1, -1]               8
// четвёртый вызов	      8	            -1	            4	    [10, -1, -1, -1] 	           7


//Значение, возвращённое методом reduce() будет равным последнему результату выполнения функции обратного вызова (7).

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce