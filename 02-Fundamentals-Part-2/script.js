"use strict";

// let hasDriverslicense = false;
// const passTest = true;

// if (passTest) hasDriverslicense = true;
// if ((hasDriverslicense = true)) {
//   console.log("You can drive!");
// }

// Functions

// function logger() {
//   console.log("My name is Jonas");
// }

// Calling / Invoking / Running a function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calAge1(1991);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Bob"));
/*
// Coding Challenge #1
const scoreDolphins = 44 + 23 + 71;
const scoreKoalas = 65 + 54 + 49;
// const scoreDolphins = 85 + 54 + 41;
// const scoreKoalas = 23 + 34 + 27;

const calcAverage = function (scores) {
  const avgScore = scores / 3;
  return avgScore;
};

function checkWinner(scoreDolphins, scoreKoalas) {
  const avgDolphins = calcAverage(scoreDolphins);
  const avgKoalas = calcAverage(scoreKoalas);
  let win;
  if (avgDolphins >= 2 * avgKoalas) {
    win = console.log("Dolphins win!");
    return win;
  } else if (avgDolphins * 2 <= avgKoalas) {
    win = console.log("Koalas win!");
    return win;
  } else if (avgDolphins === avgKoalas) {
    win = console.log("It's a draw!");
    return win;
  } else {
    console.log("Something went wrong");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

// Arrays

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// // Array starts at 0
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// const newlength = friends.push("Jay");
// console.log(friends);
// console.log(newlength);

// // Add elements beginning of the array
// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); // Last element of the array
// const popped = friends.pop();
// console.log(friends);

// friends.shift(); // First element of the array
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// Coding challenge #2
/*
// const bill = Number(prompt("How much was your bill?"));
const tips = [];
let c = 0;
function fnBill(bill) {
  const bills = new Array(125, 555, 44);
  bill = bills[c];
  c = c + 1;
  return bill;
}

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  const tipValue = bill * tip;
  const total = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${total}`
  );
  tips.push(tipValue);
  return;
}

calcTip(fnBill());
calcTip(fnBill());
calcTip(fnBill());
console.log(tips);

// Array
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
];

// Object
const jonas = {
  // Properties
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]); // We can put any operation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestIn = prompt(
  "What do you want to know about Jonas?, choose from: age, job, friends"
);

if (jonas[interestIn]) {
  console.log(jonas[interestIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
);

const jonas2 = {
  // Properties
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: false,

  // Methods

  // Version 1 - wrong
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // Version 2 - good
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  // Version 3 - store value in the object
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old, and works as a ${
      this.job
    } and he has ${this.hasDriversLicense ? "license" : "no license"}`;
  },
};

console.log(jonas2.calcAge());

console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);

// Challenge
// Jonas is a 46 years old teacher, and he has a driver's license
console.log(jonas2.getSummary());

*/

// Coding Challenge 3
/*
const mark = {
  // Properties
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  // Properties
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName} (${mark.BMI}) has a higher BMI of ${john.firstName} (${john.BMI})`
  );
} else if (mark.BMI < john.BMI) {
  console.log(
    `${john.firstName} (${john.BMI}) has a higher BMI of ${mark.firstName} (${mark.BMI})`
  );
} else if (mark.BMI === john.BMI) {
  console.log(`${mark.firstName} and ${john.firstName} have the same BMI`);
} else {
  console.log("Something went wrong");
}


// Loops

// For loops keeps running while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log("Lifting weights repetition " + rep);
// }

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
// continue - skips the current iteration and goes to the next one
// break - breaks the loop
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- STARTING EXERCISE ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
  console.log(exercise);
}

// While loop

for (let rep = 1; rep <= 10; rep++) {
  console.log("FOR Lifting weights repetition " + rep);
}

let rep = 1;
while (rep <= 10) {
  console.log("WHILE Lifting weights repetition " + rep);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Dice rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}
*/

// Coding challenge 4
const tips = [];
const totals = [];
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

function calcTip() {
  for (let i = 0; i < bills.length; i++) {
    // Determine percentage based on tipping rules
    let percentage;
    if (bills[i] < 50) {
      percentage = 0.2;
    } else if (bills[i] >= 50 && bills[i] < 200) {
      percentage = 0.15;
    } else {
      percentage = 0.1;
    }
    // Add results to the corresponding arrays
    tips[i] = bills[i] * percentage;
    totals[i] = bills[i] + tips[i];
  }
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

calcTip();
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
