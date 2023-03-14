'use strict';

document.getElementById('start').addEventListener('click', function () {
    let removePanel = document.getElementById('start-panel');
    let addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})


let dices = document.getElementsByClassName('dice');
for (let dice of dices) {
    dice.addEventListener('click', function () {
        if (this.style.backgroundColor === 'yellow') {
            dice.style.backgroundColor = 'white'
        } else {
            this.style.backgroundColor = 'yellow'
        }
    })
}