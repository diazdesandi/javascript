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
*/

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
