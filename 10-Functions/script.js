'use strict';
/*
//////////////////// Default Parameters ////////////////////
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   Setting default values for parameters.
  //   ES5
  //   numPassengers = numPassengers || 1; // If numPassengers is undefined, set it to 1.
  //   price = price || 199; // If price is undefined, set it to 199.
  //   With ES6, we can use default parameters directly in the function definition.
  //  function(flightNum, numPassengers = 1, price = 199)
  // And we can do operations on the default values depending on the value of other parameters.
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000); // numPassengers is undefined, so it will use the default value of 1.


//////////////////// How Passing Arguments Works: Value vs. Reference ////////////////////
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // We are manipulating the value of the object.

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

// The interaction of multiple functions with the same object can create unexpected results.
newPassport(jonas);
checkIn(flight, jonas);
*/

//////////////////// Functions Accepting Callback Functions ////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); // Prints the name of the function (fn.name)
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JavaScript uses callbacks all the time.
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//////////////////// Functions Returning Functions ////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey'); // greeterHey is a now a function.
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // Challenge
// // Rewriting function using arrow functions.
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

//////////////////// The call and apply Methods ////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iatacode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // We are copying the function to use it on other objects.

// // Doesn't work.
// // book(23, 'Sarah Williams');

// // Call method.
// book.call(eurowings, 23, 'Sarah Williams'); // Allows to manually set the function.
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iatacode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method.
// // Receives an array of arguments.
// const flightData = [583, 'George Cooper'];
// // book.apply(swiss, flightData);

// // Modern JavaScript uses:
// book.call(swiss, ...flightData);

// //////////////////// The bind Method ////////////////////
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// bookEW(23, 'Steven Williams'); // We no longer need to manually set the function (already has the this keyword).

// const bookEW23 = bookEW.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

// const addVAT = addTax.bind(null, 0.23); // Setting the first argument to null because we are not using this.

// // addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// // Challenge
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//////////////////// Coding Challenge #1 ////////////////////
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0 : JavaScript', '1 : Python', '2 : Rust', '3 : C++'],
  // answers: [],
  answers: new Array(4).fill(0), // New array code.
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // if (Number.isInteger(answer) && answer >= 0 && answer <= 3) {
    //   console.log(answer);
    //   this.answers.push(answer);
    //   this.displayResults('string', this.answers);
    // } else {
    //   alert('Invalid answer!');
    // }
    // New code
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus:
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

//////////////////// Immediately Invoked Function Expressions (IIFE) ////////////////////

// const runOnce = function () {
//   console.log('This will never run again!');
// };
// runOnce();

// // IIFE (Immediately Invoked Function Expression)
// // Declare a function that runs immediately.
// (function () {
//   console.log('This will never run again!');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate); // ReferenceError: isPrivate is not defined

// (() => console.log('This will ALSO never run again!'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(notPrivate);

//////////////////// Closures ////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker(); // 1 passenger
// booker(); // 2 passengers
// booker(); // 3 passengers

// console.dir(booker);

/*
Closure makes a function remember all the variables that existed at the 
function's birthplace essentially, so we can imagine the secure booking 
as being the  birthplace of this function. So of the Booker function, 
essentially. And so this function remembers everything at its birthplace, 
by the time it was created.

A function has access to the variable envieronment (VE) of the execution 
context in which it was created.

Closure: VE attached to the function, exactly as it was a tthte time and 
place the function was created.

So in a sense, the scope chain is actually preserved through the closure, 
even when a scope has already been destroyed because its execution context 
is gone.

A closure gives a function access to all the variables of it's parent function,
even after that parent function has returned. The function keeps a reference to 
it's outer scope, which preserves the scope chain throughout time.
*/

//////////////////// More Closure Examples ////////////////////
// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

//////////////////// Challenge 2 ////////////////////
/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
});
