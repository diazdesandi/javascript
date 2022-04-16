'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// Button handler
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'No number entered';
        displayMessage('No number entered');
        // When player wins.
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct number';
        displayMessage('Correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong 
        // REFACTOR CODE
    } else if (guess !== secretNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game over');
            document.querySelector('.score').textContent = 0;
        }
    }
        // When guess is too high.
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low.
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


// Coding challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function,restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message,number,score and guess input fields
// 4. Also restore the original background color(#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20
    displayMessage('Guess a number');
    // document.querySelector('.message').textContent = 'Guess a number';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});