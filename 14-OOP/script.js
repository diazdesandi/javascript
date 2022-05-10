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
console.log(jonas);

// 1. New empty object is created.
// 2. Function is called, this = {} (new empty object).
// 3. New empty object is linked to prototype.
// 4. Function automatically returns {}.

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);