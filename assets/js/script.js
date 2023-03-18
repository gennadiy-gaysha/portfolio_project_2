'use strict';
//Starting the game by switching between start-panel and play-area panel

document.getElementById('start').addEventListener('click', function () {
    const removePanel = document.getElementById('start-panel');
    const addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})

//Hold the dice number on click

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
 *  Switching between white and yellow (hold dice) bg color - become active
 * after clicking "Roll Dice" button (synchronized with the eventListener above)
 * */

function holdButtonColor() {
    if (this.style.backgroundColor === 'yellow') {
        this.style.backgroundColor = 'white'
    } else {
        this.style.backgroundColor = 'yellow'
    }
}


// Add eventListener to "Roll Dice" (#roll--dice) button 
let counter = 3; //this global variable is used only once when the game starts
document.getElementById('roll--dice').addEventListener('click', function () {

    if (counter > 0) {
        //Calling this function here allows us to remove the red cap and make the dice numbers visible
        revealDice();

        const diceImages = document.getElementsByClassName('unhold-dice');
        for (let diceImage of diceImages) {
            let diceNumber = Math.floor(Math.random() * 6 + 1);
            const imageURL = `assets/img/${diceNumber}.png`
            diceImage.src = imageURL;
            displayCurrentScore();
        }
        //Adding this eventListener here allows us to chage the color (from white to yellow and vice versa) 
        //of the dice only after the 'Roll dice' button is clicked (but not before!)
        const dices = document.getElementsByClassName('dice');
        for (let dice of dices) {
            dice.addEventListener('click', holdButtonColor)
        };

        //Adding this eventListener here allows us to write down (fix) current score only after
        //the 'Roll dice' button is clicked (but not before!)
        // ============================================================================
        // document.getElementById('current-sixes-score').addEventListener('click', addScore);
        // ============================================================================
        const currentScores = document.getElementsByClassName('current-score');
        for (let currentScore of currentScores) {
            currentScore.addEventListener('click', addScore);
        }

        // ============================================================================
    } else {
        alert('Please, choose the line to enter your current score');
    }
    counter -= 1;
    //Adding this statement here prevents from changing dice color just after the third throw
    if (counter === 0) {
        const dices = document.getElementsByClassName('dice');
        for (let dice of dices) {
            dice.removeEventListener('click', holdButtonColor)
        };
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

/** 
 * Displays current possible score for the lines in score table
 * by retrieving dice number from img src attribute value
 * */

function displayCurrentScore() {

    //Left panel of score table

    let arr = [];
    for (let diceImage of diceImages) {
        arr.push(diceImage.getAttribute('src'));
    }

    let arr1 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 1)
        .reduce((acc, val) => acc + val, 0);
    let arr2 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 2)
        .reduce((acc, val) => acc + val, 0);
    let arr3 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 3)
        .reduce((acc, val) => acc + val, 0);
    let arr4 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 4)
        .reduce((acc, val) => acc + val, 0);
    let arr5 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 5)
        .reduce((acc, val) => acc + val, 0);
    let arr6 = arr.map((item) => parseInt(item.match(/\d+/)))
        .filter((item) => item === 6)
        .reduce((acc, val) => acc + val, 0);
    let chance = arr.map((item) => parseInt(item.match(/\d+/))).reduce((acc, val) => acc + val, 0);

    //Right panel of score table

    let threeOfAKind = 0;
    let fourOfAKind = 0;
    let smallStraight = 0;
    let largeStraight = 0;
    let fullHouse = 0;
    let yahtzee = 0;

    //Array of dice numbers for the right side panel 
    let arrRight = arr.map((item) => parseInt(item.match(/\d+/)));

    /**
     * Calculates possible score options in Right panel lines:
     */

    function rightPanelScore(diceRoll) {

        //1. Calculating score for Small Straight, Large Straight and Yahtzee lines:

        const setRight = new Set([...arrRight]);

        if (setRight.size === 5 && !setRight.has(6)) {
            smallStraight = 30;
        } else if (setRight.size === 5 && !setRight.has(1)) {
            largeStraight = 40;
        } else if (setRight.size === 1) {
            yahtzee = 50;
        }

        //2. Calculating score for Three of a kins, Four of a kind and Yahtzee lines:

        const counts = {};
        for (const i of diceRoll) {
            counts[i] = (counts[i] || 0) + 1;
        }
        for (const count of Object.values(counts)) {
            if (count >= 4) {
                threeOfAKind = 30;
                fourOfAKind = 40;
            } else if (count >= 3 && setRight.size === 2) {
                fullHouse = 25;
            } else if (count >= 3) {
                threeOfAKind = 30;
            }
        }
    }
    rightPanelScore(arrRight);

    document.getElementById('current-ones-score').textContent =
        document.getElementById('fixed-ones-score').textContent = arr1;
    document.getElementById('current-twos-score').textContent =
        document.getElementById('fixed-twos-score').textContent = arr2;
    document.getElementById('current-threes-score').textContent =
        document.getElementById('fixed-threes-score').textContent = arr3;
    document.getElementById('current-fours-score').textContent =
        document.getElementById('fixed-fours-score').textContent = arr4
    document.getElementById('current-fives-score').textContent =
        document.getElementById('fixed-fives-score').textContent = arr5;
    document.getElementById('current-sixes-score').textContent =
        document.getElementById('fixed-sixes-score').textContent = arr6;

    document.getElementById('current-threeOf-score').textContent = threeOfAKind;
    document.getElementById('current-fourOf-score').textContent = fourOfAKind;
    document.getElementById('current-fhouse-score').textContent = fullHouse;
    document.getElementById('current-sstraight-score').textContent = smallStraight;
    document.getElementById('current-lstraight-score').textContent = largeStraight;
    document.getElementById('current-yahtzee-score').textContent = yahtzee;
    document.getElementById('current-chance-score').textContent = chance;

}

/**
 * Assigns value to global variable after the game starts
 */

function enterScore() {
    counter = 3;
}

/**
 * Starting state of the dices at the beginning of each iteration (3 throw in one turn)
 */
function initialState() {
    //white background
    const dices = document.getElementsByClassName('dice');
    for (let dice of dices) {
        dice.style.backgroundColor = 'white';
    }
    //ready to get random numbers
    const diceImages = document.getElementsByClassName('dice-image');
    for (let diceImage of diceImages) {
        diceImage.classList.add('unhold-dice');
    }
    //red capped
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

/**
 * Allows to write down the current score to "Sixes" line by clicking on it 
 * (possible only after clicking 'Roll Dice' button) and add it to Left and Total lines:
 *  */

// ===================================================================================
/*
function addSixes() {
    //assigns value 3 to global variable counter
    enterScore();
    //After writing down (fixing) the score these elements become visible (display: block)
    const fixedSixes = document.getElementById('fixed-sixes-score');
    //After writing down (fixing) the score these elements become invisible (display: none)
    const currentSixes = document.getElementById('current-sixes-score');

    const sixes = document.getElementById('sixes');
    const left = document.getElementById('left');
    const total = document.getElementById('total');

    fixedSixes.textContent = currentSixes.textContent;
    const fixedSixesNumber = parseInt(fixedSixes.textContent);

    //Adds current score to the "Left" value in the score-container
    let leftNumber = parseInt(left.textContent)
    leftNumber += fixedSixesNumber;
    left.textContent = leftNumber;

    //Adds current score to the "Total" value in the score-container
    let totalNumber = parseInt(total.textContent)
    totalNumber += fixedSixesNumber;
    total.textContent = totalNumber;

    //Changes color of the fixed score line from black to red;
    fixedSixes.style.color = 'red';
    sixes.style.color = 'red';
    fixedSixes.classList.remove('hidden');
    currentSixes.classList.add('hidden');
    //Calling this function here allows us return dices to the starting point, when they are red-capped,
    //have white background (.dice) and ready to get random numbers (.dice-image, class="unhold-dice") 
    initialState();
    deleteCurrentScore();
}
*/
// ================================================================================
function addScore() {
    const removeCurrents = document.getElementsByClassName('current-score');
    const addFixeds = document.getElementsByClassName('fixed-score');

    for (let removeCurrent of removeCurrents) {
        if (!this.classList.contains('hidden')) {
            removeCurrent.classList.add('hidden');
        }

    }
    for (let addFixed of addFixeds) {
        if (this.classList.contains('hidden')) {
            addFixed.classList.remove('hidden');
        }
    }
}


/**
 * Resets all the score lines that were not clicked after fixing current score
 */

function deleteCurrentScore() {
    const removeEls = document.getElementsByClassName('current-score');
    for (let removeEl of removeEls) {
        removeEl.textContent = 0;
    }
};