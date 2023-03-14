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
            dice.style.backgroundColor = 'white'
        } else {
            this.style.backgroundColor = 'yellow'
        }
    })
}

const divRoll = document.getElementById('roll--dice')
divRoll.addEventListener('click', function () {
    const diceImages = document.getElementsByClassName('dice-image')
    for (let diceImage of diceImages) {
        const diceNumber = Math.floor(Math.random() * 6 + 1);
        const imageURL = `assets/img/${diceNumber}.png`
        diceImage.src = imageURL;

    }
})