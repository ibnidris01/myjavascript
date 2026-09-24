// // // let nr1 = 4;
// // // let nr2 = 5;
// // // let nr3 = 2;
// // // console.log(nr1++ - ++nr2);

// // let result =`The blog called $ {title} by $ {author} has $ {likes} likes`;
// // console.log(result);

// console.log('*')
// console.log('**')
// console.log('***')
// console.log('****')


// class Student {
//   #score; // private property

//   constructor(name, score) {
//     this.name = name;
//     this.#score = score;
//   }

//   getScore() {
//     return this.#score;
//   }

//   setScore(newScore) {
//     if (newScore >= 0) {
//       this.#score = newScore;
//     }
//   }
// }

// const student1 = new Student("Ali", 80);
// console.log(student1.getScore());



// class Vehicle {
//   start() {
//     console.log("Vehicle is starting");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log("Car starts with a key");
//   }
// }

// const myCar = new Car();
// myCar.start();



// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return "Hello, my name is " + this.name;
//   }
// }

// class Teacher extends Person {
//   teach() {
//     return "I am teaching JavaScript";
//   }
// }

// const teacher1 = new Teacher("Amina");
// console.log(teacher1.greet());
// console.log(teacher1.teach());




// class Animal {
//   sound() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log("Cat meows");
//   }
// }

// const animals = [new Dog(), new Cat()];

// animals.forEach(animal => animal.sound());



// let count = 0;

// function increase() {
//   count++;
//   document.getElementById("count").innerText = count;
// }

// function decrease() {
//   count--;
//   document.getElementById("count").innerText = count;
// }

// function reset() {
//   count = 0;
//   document.getElementById("count").innerText = count;
// }

// function add() {
//   let a = Number(document.getElementById("num1").value);
//   let b = Number(document.getElementById("num2").value);
//   document.getElementById("result").innerText = "Result: " + (a + b);
// }

// function subtract() {
//   let a = Number(document.getElementById("num1").value);
//   let b = Number(document.getElementById("num2").value);
//   document.getElementById("result").innerText = "Result: " + (a - b);
// }

// function multiply() {
//   let a = Number(document.getElementById("num1").value);
//   let b = Number(document.getElementById("num2").value);
//   document.getElementById("result").innerText = "Result: " + (a * b);
// }

// function divide() {
//   let a = Number(document.getElementById("num1").value);
//   let b = Number(document.getElementById("num2").value);
//   document.getElementById("result").innerText = "Result: " + (a / b);
// }

// couter

// let x = 10; // global scope

// function test() {
//   let y = 5; // function scope
//   console.log(x + y);
// }

// test();



// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// let myCounter = counter();

// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());






// function addTwo(x) {
//   return x + 2;
// }

// function multiplyByThree(x) {
//   return x * 3;
// }

// let result = multiplyByThree(addTwo(4));

// console.log(result);



// function compose(f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// }

// let composedFunction = compose(multiplyByThree, addTwo);

// console.log(composedFunction(4));






  let button = document.getElementById("btn");

  button.addEventListener("click", function () {
    console.log("Button was clicked");
  });




button.addEventListener("mouseover", function () {
  console.log("Mouse over button");
});

button.addEventListener("mouseout", function () {
  console.log("Mouse left button");
});