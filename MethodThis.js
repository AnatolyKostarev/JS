'use strict';

// Task 1 - проверка синтаксиса

let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  };
  
    (user.go)() //выдаст ошибку, так как в строке 6 после } нет ";"

  // Task 2 - Объясните значение "this"

    let obj, method;

    obj = {
      go: function() { alert(this); }
    };
    
    obj.go();               // (1) [object Object]
    
    (obj.go)();             // (2) [object Object]
    
    (method = obj.go)();    // (3) undefined
    
    (obj.go || obj.stop)(); // (4) undefined


   //Task 3 - Использование "this" в литерале объекта 

    // function makeUser() {
    //     return {
    //       name: "Джон",
    //       ref: this
    //     };
    //   };
      
    //   let user = makeUser();
      
    //   alert( user.ref.name ); // ERROR

    function makeUser1() {
        return {
            name: "John",
            ref() {
                return this;
            }
        };
    };

    let user1 = makeUser1();
    alert(user1.ref().name);


    
    //Task 4 - создайте калькулятор

    let calculator = {
        sum()  {
            return this.a + this.b;
        },

        mul()  {
            return this.a * this.b;
        },

        read() {
            this.a = +prompt('Number a?',);
            this.b = +prompt('Number b?',);
        }
    };
    calculator.read();
    alert(`Сумма a и b равна ${calculator.sum()}`);
    alert(`Произведение a и b равно ${calculator.mul()}`);


    // let ladder = {
    //     step: 0,
    //     up() {
    //       this.step++;
    //     },
    //     down() {
    //       this.step--;
    //     },
    //     showStep: function() { // показывает текущую ступеньку
    //       alert( this.step );
    //     }
    //   };

    // ladder.up();
    // ladder.up();
    // ladder.down();
    // ladder.showStep();


    let ladder = {
        step: 0,
        up() {
          this.step++;
          return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep() {
          alert( this.step );
          return this;
        },
      };
      
      ladder.up().up().down().up().down().showStep();