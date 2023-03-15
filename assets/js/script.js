'use strict';

document.getElementById('start').addEventListener('click', function () {
    const removePanel = document.getElementById('start-panel');
    const addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})


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



document.getElementById('roll--dice').addEventListener('click', function () {
    revealDice();
    const diceImages = document.getElementsByClassName('hold-dice')
    for (let diceImage of diceImages) {

        let diceNumber = Math.floor(Math.random() * 6 + 1);
        const imageURL = `assets/img/${diceNumber}.png`
        diceImage.src = imageURL;

    }
})

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

document.getElementById('ones-score').addEventListener('click', function () {
    let arr = []
    for (let diceImage of diceImages) {
        arr.push(diceImage.getAttribute('src'));
    }

    let arr2 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 6)
        .reduce((acc, val) => acc + val, 0);

    document.getElementById('ones-score').textContent = arr2;
})