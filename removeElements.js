'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElements = (array, ...items) => {
  for (const item of items) {           // using for...of cycle to find elemets to remove
    const index = array.indexOf(item);  
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

removeElements(array, 5, 1, 6);
console.log(array); // (4) - arr.length, [2, 3, 4, 7]