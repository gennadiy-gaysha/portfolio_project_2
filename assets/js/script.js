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
        if (this.classList.contains('hold-dice')) {
            this.classList.remove('hold-dice');
        } else {
            this.classList.add('hold-dice');
        }
    })
}

//Hold the button eventListener (color)

const dices = document.getElementsByClassName('dice');
for (let dice of dices) {
    dice.addEventListener('click', function () {
        if (this.style.backgroundColor === 'yellow') {
            this.style.backgroundColor = 'white'
            console.log(this.style.backgroundColor);
        } else {
            this.style.backgroundColor = 'yellow'
        }
    })
}

// Add eventListener to roll--dice button 

document.getElementById('roll--dice').addEventListener('click', function () {
    revealDice();
    const diceImages = document.getElementsByClassName('hold-dice')
    for (let diceImage of diceImages) {

        let diceNumber = Math.floor(Math.random() * 6 + 1);
        const imageURL = `assets/img/${diceNumber}.png`
        diceImage.src = imageURL;
        displayCurrentScore();
    }
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

// Displays current possible score for the line

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

//Writing down the current score to "Sixes" line:

document.getElementById('current-sixes-score').addEventListener('click', function () {
    const fixedSixes = document.getElementById('sixes-score');
    const currentSixes = document.getElementById('current-sixes-score');
    const sixes = document.getElementById('sixes');
    const left = document.getElementById('left');
    const total = document.getElementById('total');

    fixedSixes.textContent = currentSixes.textContent;
    left.textContent = currentSixes.textContent;
    total.textContent = currentSixes.textContent;
    fixedSixes.style.color = 'red';
    sixes.style.color = 'red';
    fixedSixes.classList.remove('hidden');
    currentSixes.classList.add('hidden');
})