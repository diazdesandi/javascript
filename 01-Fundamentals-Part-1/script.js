/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');
let op = 40 + 8 + 23 - 10;
console.log(op);

console.log("Jonas");
console.log(23);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Bug
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

// En desuso.
var job = 'programmer';
job = 'teacher';

const now = 2037;
const ageSarah = now - 2018;
const ageJonas = now - 1991;
console.log(ageJonas, ageSarah);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Operadores de asignacion.
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparadores
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);

let xx, yy;
xx = yy = 25 - 10 - 5; // xx = yy = 10, xx = 10
console.log(xx, yy);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula(you can even implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
    - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
let markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95, markBMI, johnBMI, markHigherBMI;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI: " + markBMI + "," + "John BMI: " + johnBMI + "," + " MarkHigherBMI: " + markHigherBMI);

markMass = 95, markHeight = 1.88, johnMass = 85, johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI: " + markBMI + "," + "John BMI: " + johnBMI + "," + " MarkHigherBMI: " + markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';
console.log(jonas);

// Template literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof Nan);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // = 10
console.log('23' + '10' + 3); // = 23103
console.log('23' / 2); // = 11.5


let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}

const age = 18;
if (age === 18) console.log('You just beacame an adult');

// ==  works with numbers and strings
if (age == 18) console.log('You just beacame an adult');


const favuorite = Number(prompt("What's your favourite number?"));
console.log(favuorite);
console.log(typeof favuorite);

if (favuorite === 23) {
    console.log('23 is an amazing number');
} else if (favuorite === 7) {
    console.log('7 is an amazing number');
} else if (favuorite === 9) {
    console.log('9 is an amazing number');
}
else {
    console.log('Number is not 23 or 7 or 9');
}

if (favuorite !== 23) console.log('Why not 23?');

const hasDriverslicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverslicence && hasGoodVision); // A && B = true
console.log(hasDriverslicence || hasGoodVision); // A || B = true
console.log(!hasDriverslicence); // !A = false

if (hasDriverslicence && hasGoodVision) {
    console.log('You can drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriverslicence && hasGoodVision && isTired);

if (hasDriverslicence && hasGoodVision && !isTired) {
    console.log('You can drive');
} else {
    console.log('Someone else should drive...');
}


Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
    4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
    - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    - Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    - Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(`Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`);

if (scoreDolphins === scoreKoalas) {
  console.log("Draw");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win");
} else {
  console.log("Koalas win");
}

// Bonus 1 & Bonus 2
console.log(`Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`);

if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Draw");
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win");
} else {
  console.log("No team wins");
}
*/

/*
const day = "saturday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding metup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Invalid day");
}

const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
*/

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
    1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
    2. Print a string to the console containing the bill value, the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
    - Data 1: Test for bill values 275, 40 and 430 Hints:
        To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300
*/

const bill = Number(prompt("What's the bill?"));
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
const tipValue = bill * tip;
const total = bill + tipValue;
console.log(
  `The bill was ${bill}, the tip was ${tipValue}, and the total value ${total}`
);
