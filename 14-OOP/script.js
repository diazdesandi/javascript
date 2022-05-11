'use strict';

// 208. Constructor Functions and the new Operator
// A constructor function is a function that is used to create objects, and is called with the new keyword.
// Arrow function doesn't work here.

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a function inside a constructor.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New empty object is created.
// 2. Function is called, this = {} (new empty object).
// 3. New empty object is linked to prototype.
// 4. Function automatically returns {}.

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// 209. Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(matilda.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// 211. Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of protoype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);