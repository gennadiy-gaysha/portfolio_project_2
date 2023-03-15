'use strict';

document.getElementById('start').addEventListener('click', function () {
    const removePanel = document.getElementById('start-panel');
    const addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})


const dices = document.getElementsByClassName('dice');
for (let dice of dices) {
    dice.addEventListener('click', function () {
        if (this.style.backgroundColor === 'yellow') {
            this.style.backgroundColor = 'white'
            this.classList.add('some-class');
        } else {
            this.style.backgroundColor = 'yellow'
            this.classList.remove('some-class');
        }
    })
}

const divRoll = document.getElementById('roll--dice')
divRoll.addEventListener('click', function () {
    // holdNumber();
    revealDice();
    const diceImages = document.getElementsByClassName('dice-image')
    for (let diceImage of diceImages) {
        const diceNumber = Math.floor(Math.random() * 6 + 1);
        const imageURL = `assets/img/${diceNumber}.png`
        diceImage.src = imageURL;

    }
})

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



function holdNumber() {
    for (let dice of dices) {
        if (dice.style.backgroundColor === 'yellow') {
            console.log(dice.innerHTML);
        }
    }
}