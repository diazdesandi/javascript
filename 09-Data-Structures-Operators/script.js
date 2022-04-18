'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal syntax
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta: ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////// Working with strings Part 2 //////////////////
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

// Ok to use.
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// Better to use.
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail); // false

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

const annoucement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate')); // It's working now
console.log(annoucement.replace(/door/g, 'gate')); // Old version of replaceAll

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // Convert everything to lowercase to ease the comparison
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////// Working with strings Part 1 //////////////////
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4)); // Portion at where the extraction starts // Substring

// console.log(airline.slice(0, airline.indexOf(' '))); // 'TAP'
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // 'Air Portugal'

// console.log(airline.slice(-2)); // 'al
// console.log(airline.slice(1, -1)); // 'AP Air Portuga'

// // Example
// const checkMiddleSeat = function (seat) {
//   // B and E are the middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('Middle seat');
//   } else {
//     console.log('Not a middle seat');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // Why strings have methods?
// // JavaScript converts strings to objects.
// console.log(new String('jonas'));
// console.log(typeof new String('jonas')); // Convert to object, converts back when operations are done on it

//////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Code OK
// const events = [...new Set(gameEvents.values())]; // Missed ... in the beginning to get an array
// console.log(events);

// // 2. Code OK
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Old code (still works)
// // const arr = [...gameEvents.keys()];
// // console.log(`An event happened, on average, every ${90 / arr.length} minutes`);

// // New code
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4. Code OK
// // for (const [key, value] of gameEvents) {
// //   if (key < 45) {
// //     console.log(`[FIRST HALF] ${key}: ${value}`);
// //   } else {
// //     console.log(`[SECOND HALF] ${key}: ${value}`);
// //   }
// // }
// // Better solution:
// for (const [min, event] of gameEvents) {
//   const half = min < 45 ? 'FIRST' : 'SECOND ';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// ///////////////////////// MAPS ITERATION ////////////////////////////////
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert objects to mpas
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours)); // Converted to iterable
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = +prompt('Your answer:');
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// // Conver map to array
// console.log(...question);
// // console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

/////////////////// Maps fundamentals ///////////////////
/* 
  A map is a data structure that we can use to map values to keys.
  So, just like an object, data is stored in key value pairs in maps.
  Now, the big difference between objects and maps is that in maps, the keys can have any type
  So, in objects, the keys are basically always strings. But in maps, we can have any type of key.
  It could even be objects, or arrays, or other maps.
*/

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set([1, 2], 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2])); // Not the same object as the one in the map

/////////////////// SETS ///////////////////
// A set is basically just a collection of unique values.
// So that means that a set can never have any duplicates.

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // How to retrieve the values of a set?
// // there is no way of getting values out of a set.
// // It's better to use an array instead.

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]; // Creates a new array with unique values
// console.log(staffUnique);

// // Counting letters in a string
// console.log(new Set('jonasschmedtmann').size);

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// // for (let i = 0; i < game.scored.length; i++) {
// //   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// // }
// // Fixed code
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2.
// const scores = game.scored.map((player) => player.length);
// const average = scores.reduce((acc, curr) => acc + curr) / scores.length;

// Fixed code
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3. Couldn't figure out how to do this one, but I think it's pretty simple. Need to print names instead of "undefined".
// // const odds = Object.values(game.odds);
// // Object.entries(game.odds).forEach((value) => {
// //   console.log(`Odd of victory ${game.team1}: ${value}`);
// // });

// // Fixed code
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

// 4. Bonus
// const scorers = {
//   [game.scored[0]]: 1,
//   [game.scored[1]]: 1,
//   [game.scored[2]]: 2,
//   [game.scored[3]]: 1,
// };
// const properties = Object.keys(scorers);
// let openStr = `The following players scored in ${game.team1} and ${game.team2}: `;
// for (const property of properties) {
//   openStr += `${property} (${scorers[property]}), \n`;
// }
// console.log(openStr);

// Fixed code
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/////////// Looping Objects: Object Keys, Values, and Entries ///////////
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Loop through the object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/////////// Optional Chaining (?.) ///////////
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // With optional chaining:
// // Only work if openingHours is defined and openingHours.mon is defined,
// // otherwise return undefined
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

/////////// Looping Arrays: The for-of Loop ///////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

///////////////////////////////////////
// Coding Challenge #1

/* 
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// // Old code
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// // console.log(players1);
// // console.log(players2);

// // New code
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// // Old code
// // const gk = players1[0];
// // const fieldPlayers = players1.slice(1);
// // console.log(gk);
// // console.log(fieldPlayers);

// // New code
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// // Old code
// // const allPlayers = players1.concat(players2);
// // console.log(allPlayers);

// // New code
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// // Old code
// // const players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic']);

// // New code
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5.
// // Old code
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// // console.log(team1, draw, team2);

// // New code
// const {
//   odds: { team1, x, team2 },
// } = game;
// console.log(team1, x, team2);

// // 6.
// // Old code
// // const scoredGoals = game.scored;
// // let totalScore = 0;
// // const printGoals = function (playerScored) {
// //   for (let i = 0; i < playerScored.length; i++) {
// //     console.log(`${playerScored[i]} scored a goal!`);
// //     totalScore += 1;
// //   }
// //   console.log(`Total goals scored: ${totalScore}`);
// // };
// // printGoals(scoredGoals);

// // New code
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`Total goals scored: ${players.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals(...game.scored); // Spread operator, since we're passing in an array

// // 7.
// // Old code
// // const team1Odds = game.odds.team1;
// // const team2Odds = game.odds.team2;
// // const result = team1Odds || team2Odds;
// // console.log(result);

// // New code
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assigment operator
// // the logical OR assignment operator will assign a value to a variable
// // if that exact variable is falsy right now.
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10; // same as above, don't really work
// // rest2.numGuests ||= 10;

// // This one works with nullish asignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMUS>'; // Undefined because property doesn't exist
// // rest2.owner = rest2.owner && '<ANONYMUS>';
// rest1.owner &&= '<ANONYMUS>';
// rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

// //////////// NULLISH COALESCING OPERATOR ////////////
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// // Since 0 is a falsy value, the value of numGuests will be used instead
// console.log(guests);

// // Fixed:
// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////// SHORT CIRCUITING ////////////
// Use ANY data type, return ANY data type, short-circuiting
// OR operator short-circuits when the first operand is truth.
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// // Hello is a truthy value, 23 is a truthy value, null is a falsy value, then result is false.
// console.log('Hello' && 23 && null && 'Jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// the AND operator will return the first falsy value
// or the last value if all of them are truthy.
// So the OR operator will return the first truthy value of all the operands,
// or simply the last value if all of them are falsy.

//////////// REST OPERATOR ////////////
// Rest operator is used to collect the remaining arguments into an array

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // REST, becuase on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // Functions
// // Packaging arguments into an array
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPasta('mushrooms');

//////////// SPREAD OPERATOR ////////////
// Spread operator is to pack an array.
// Manual
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Using spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// // Same as:
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects.
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
// console.log(...str); // Doesn't work with template strings

// // Real - world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // Instead of ^ we do this:
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// // Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Destructuring menu to set a default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////////////////////////////////////
// Destructuring array
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories; // Leave empty place to skip one element
// console.log(main, secondary);

// // Switching variables without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Switching variables destructuring
// [main, secondary] = [secondary, main]; // Swap values
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // With nested arrays
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested; // Destructuring nested array, destructuring inside destructuring
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
