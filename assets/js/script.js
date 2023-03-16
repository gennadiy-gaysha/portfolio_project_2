'use strict';
//Starting the game by switching between start-panel and play-area panel

document.getElementById('start').addEventListener('click', function () {
    const removePanel = document.getElementById('start-panel');
    const addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})

//Hold the button eventListener (number)

const diceImages = document.getElementsByClassName('dice-image');
for (let diceImage of diceImages) {
    diceImage.addEventListener('click', function () {
        if (this.classList.contains('unhold-dice')) {
            this.classList.remove('unhold-dice');
        } else {
            this.classList.add('unhold-dice');
        }
    })
}

/**
 *  Switching between white and yellow (hold dice) color
 * after clicking "Roll Dice" button by adding eventListener to it
 * */

function holdButtonColor() {
    if (this.style.backgroundColor === 'yellow') {
        this.style.backgroundColor = 'white'
        console.log(this.style.backgroundColor);
    } else {
        this.style.backgroundColor = 'yellow'
    }
}


// Add eventListener to roll--dice button 
let counter = 3;
document.getElementById('roll--dice').addEventListener('click', function () {

    if (counter > 0) {
        revealDice();
        const diceImages = document.getElementsByClassName('unhold-dice')
        for (let diceImage of diceImages) {

            let diceNumber = Math.floor(Math.random() * 6 + 1);
            const imageURL = `assets/img/${diceNumber}.png`
            diceImage.src = imageURL;
            displayCurrentScore();
        }
        //This allows us to chage the color (white to yellow and vice versa) of the dice only when 
        //'Roll dice' button is clicked (but not before!)
        const dices = document.getElementsByClassName('dice');
        for (let dice of dices) {
            dice.addEventListener('click', holdButtonColor)
        };

        document.getElementById('current-sixes-score').addEventListener('click', addSixes);
    } else {
        alert('Please, choose the line to enter your current score');

    }


    counter -= 1;
    console.log(counter);

})

/** 
 *  Removes the red cap and make the dices visible
 */

function revealDice() {
    const redDices = document.getElementsByClassName('red');
    const diceImages = document.getElementsByClassName('dice-image');
    for (let redDice of redDices) {
        redDice.classList.add('hidden');
    }
    for (let diceImage of diceImages) {
        diceImage.classList.remove('hidden');
    }
}

/** 
 * Displays current possible score for the line in score table
 * */

function displayCurrentScore() {
    let arr = []
    for (let diceImage of diceImages) {
        arr.push(diceImage.getAttribute('src'));
    }

    let arr2 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 6)
        .reduce((acc, val) => acc + val, 0);

    document.getElementById('current-sixes-score').textContent = arr2;
}

/**
 * Writing down the current score to "Sixes" line after clicking 'Roll Dice' button 
 * and add it to Left and Total lines:
 *  */

let scoreEntered = false;

function enterScore() {
    counter = 3;
}

function addSixes() {
    enterScore();
    const fixedSixes = document.getElementById('sixes-score');

    const currentSixes = document.getElementById('current-sixes-score');
    const sixes = document.getElementById('sixes');
    const left = document.getElementById('left');
    const total = document.getElementById('total');

    fixedSixes.textContent = currentSixes.textContent;
    const fixedSixesNumber = parseInt(fixedSixes.textContent);

    let leftNumber = parseInt(left.textContent)
    leftNumber += fixedSixesNumber;
    left.textContent = leftNumber;

    let totalNumber = parseInt(total.textContent)
    totalNumber += fixedSixesNumber;
    total.textContent = totalNumber;

    fixedSixes.style.color = 'red';
    sixes.style.color = 'red';
    fixedSixes.classList.remove('hidden');
    currentSixes.classList.add('hidden');
    initialState();
}

function initialState() {
    const dices = document.getElementsByClassName('dice');
    for (let dice of dices) {
        dice.style.backgroundColor = 'white';
    }

    const diceImages = document.getElementsByClassName('dice-image');
    for (let diceImage of diceImages) {
        diceImage.classList.add('unhold-dice');
    }

    const redDices = document.getElementsByClassName('red');
    for (let redDice of redDices) {
        redDice.classList.remove('hidden');
    }
    for (let diceImage of diceImages) {
        diceImage.classList.add('hidden');
    }

    // This blocks changing dice color from white to yellow until the "Roll Dice button will be clicked again"
    for (let dice of dices) {
        dice.removeEventListener('click', holdButtonColor)
    };
}