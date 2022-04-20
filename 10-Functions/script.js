'use strict';

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
