'use strict';

const contracts = function(fn) {
    return function(...args) {
        if (args.length != fn.length) {
            throw new Error('Submit required number of params');
        }
        if (typeof fn(...args) == 'string') {
            throw new TypeError('TypeError');
        }
        return fn(...args);
    }
}

const add = (a, b) => a + b;

const addNumber = contracts(add);
const res = addNumber(2, 3);
console.log(res);  


const contract = function(fn1) {
    return function(...types) {
        if (types.length != fn1.length) {
            throw new Error('Submit required number of params');
        }
        if (typeof fn1(...types) != 'string') {
            throw new TypeError('TypeError');
        }
        return fn1(...types);
    }
}

const concat = (s1, s2) => s1 + s2;
const concatString = contract(concat);
const res1 = concatString('Hello ', 'world!');
console.log(res1);