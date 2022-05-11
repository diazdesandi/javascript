'use strict';

// 208. Constructor Functions and the new Operator
// A constructor function is a function that is used to create objects, and is called with the new keyword.
// Arrow function doesn't work here.

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a function inside a constructor.
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// // 1. New empty object is created.
// // 2. Function is called, this = {} (new empty object).
// // 3. New empty object is linked to prototype.
// // 4. Function automatically returns {}.

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);

// // 209. Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(matilda.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// // 211. Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// // Object.prototype (top of protoype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
}

// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
}

// 4.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);