'use strict';

// Scoping in practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   const firstName = 'Steve';

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steve';
//       const str = `You are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas'; // Global scope
// calcAge(1991);

//  Hoisting and TDZ in Practice

// Variable Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher'; // Still in temporal dead zone
// const year = 1991; // Still in temporal dead zone

// // Function Hoisting
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   /*
//   When a function is declared,
//   it is hoisted to the top of the current scope.
//   */
//   return a + b;
// }

// const addExpr = function (a, b) {
//   /*
//   When defined with const or let,
//   the variable is in the temporal dead zone
//   */
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1; // Will create variable in window object. (can be accessed from anywhere)
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//console.log(this);
/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // It's own this keyword
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //console.log(this); // This from the global scope
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // This points to the jonas object

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Method borrowing
matilda.calcAge(); // This points to the matilda object (not the jonas object)

const f = jonas.calcAge;
f(); // This points to the global object
*/

// var firstName = 'Matilda';
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // Preserve the this keyword
    // const isMillenial = function () {
    // console.log(self);
    // console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    // },

    // Solution 2
    // Using arrow functions because uses the this keyword from the parent object

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
  // Arrow functions don't have their own this keyword,
  // they inherit it from the parent function
  // Never use arrow functions for methods
};

jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arguments keyword doesn't work with arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend: ', friend);
// console.log('Me: ', me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {}; // Error

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Preserve the original object, only at first level (shallow copy)(not deep clone)
const jessicaCopy = Object.assign({}, jessica2); // Creates a new copy of the object
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

// Changes on both objects
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
