'use strict';

const persons = {
  lenin: {born: 1870, died: 1924},
  mao: {born: 1893, died: 1976},
  gandhi: {born: 1869, died: 1948},
  hirihito: {born: 1901, died: 1989},
};

const ages = persons => {
  const ages = {};
  for (const name in persons) {
    const person = persons[name];
    ages[name] = person.died - person.born;
  }
  return ages;
};

console.log(ages(persons));
   
  
    