//Вывод максимального значения одномерного массива

let myArray = [10, 25, 15, 7, 45];

const arrayMax = (array) => {
    return array.reduce(function(a, b) {
        return Math.max(a, b);
    });
}
alert(`Maximum value of array is  ${arrayMax(myArray)}`);

//Вывод минимального значения одномерного массива

const arrayMin = (array) => {
    return array.reduce(function(a, b) {
        return Math.min(a, b);
    });
}
alert(`Minimum value of array is  ${arrayMin(myArray)}`);

// Вывод максимального и минимального значения двумерного массива

let myArraySecond = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let out_array = [];

myArraySecond.forEach(function(v) {
  
	Array.prototype.push.apply(out_array, v);
  
});

let min = Math.min.apply(null, out_array);
let max = Math.max.apply(null, out_array);

alert(`Maximum value of two-dimensional array is ${max}`);
alert(`Minimum value of two-dimensional array is ${min}`);