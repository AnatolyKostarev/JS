// Использование условной конструкции if, else

// Дан код, который необходимо переписать с помощью условной конструкции if, else

// let age = prompt('Возраст?', 18);
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';
// alert( message );

let age = prompt('Возраст?', 18);

if (age < 3) {
  alert(message = ' Здравствуй, малыш!');
} else if (age < 18) {
  alert(message = 'Привет!');
} else if (age < 100) {
  alert(message = 'Здравствуйте!');
} else {
  alert(message = 'Какой необычный возраст!');
}
