'use strict';
//Starting the game by switching between start-panel and play-area panel

let diceSound = new Audio('assets/js/dice-roll.mp3');
let enterScoreSound = new Audio('assets/js/enter-score.mp3');
let yahtzeeSound = new Audio('assets/js/yahtzee.mp3');
let yahtzeeFiftySound = new Audio('assets/js/yahtzee_50.mp3');
let bonusSound = new Audio('assets/js/bonus.mp3');

document.getElementById('rules-button').addEventListener('click', function () {
    document.getElementById('play-area').style.display = 'none';
    document.getElementById('game-rules').style.display = 'block';

})

document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('play-area').style.display = 'block';
    document.getElementById('game-rules').style.display = 'none';
})

document.getElementById('start').addEventListener('click', function () {
    const removePanel = document.getElementById('start-panel');
    const addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

    //Add clicking Enter or Spacebar button to fire rollDice function


    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            document.getElementById('roll--dice').style.boxShadow = '5px 5px 0 rgb(14, 14, 14)';
            document.getElementById('roll--dice').style.transform = 'translate(0, 5px)';

        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            document.getElementById('roll--dice').style.boxShadow = '5px 10px 0 rgb(14, 14, 14)';
            document.getElementById('roll--dice').style.transform = 'translate(0, 0)';

            rollDice();
        }
    });
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
document.getElementById('roll--dice').addEventListener('click', rollDice)

document.getElementById('roll--dice').addEventListener('mousedown', function () {
    this.style.boxShadow = '5px 5px 0 rgb(14, 14, 14)';
    this.style.transform = 'translate(0, 5px)';
});
document.getElementById('roll--dice').addEventListener('mouseup', function () {
    this.style.boxShadow = '5px 10px 0 rgb(14, 14, 14)';
    this.style.transform = 'translate(0, 0)';
});

function rollDice() {

    if (counter > 0) {
        //Calling this function here allows us to remove the red cap and make the dice numbers visible
        revealDice();

        //Add sound effect
        diceSound.volume = 0.2;
        diceSound.play();


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
        // =========================================================================
        //document.getElementById('current-sixes-score').addEventListener('click', addSixes);
        // =========================================================================
        const currentScoreLeft = document.querySelectorAll('.left-current-score');
        currentScoreLeft.forEach(element => {
            element.addEventListener('click', addScoreLeft);
        });

        const currentScoreRight = document.querySelectorAll('.right-current-score');
        currentScoreRight.forEach(element => {
            element.addEventListener('click', addScoreRight);
        });

        // =========================================================================
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
}
// ======================================================================
let leftScoreCount = 0;
let bonusSoundPlayed = false;

function addScoreLeft(event) {
    leftScoreCount++;
    enterScore(); //counter returns to 3 after score is added

    enterScoreSound.play();

    const currentScoreLeft = document.querySelectorAll('.left-current-score');
    const currentScoreRight = document.querySelectorAll('.right-current-score');

    //Current score passed to the fixed score
    this.nextElementSibling.textContent = event.target.textContent;
    // =======================================================================
    const currentFixed = event.target.textContent;
    const left = document.getElementById('left');
    const total = document.getElementById('total');


    const currentFixedNumber = parseInt(currentFixed);

    //Adds current score to the "Left" value in the score-container
    let leftNumber = parseInt(left.textContent)
    leftNumber += currentFixedNumber;
    left.textContent = leftNumber;

    //Adds current score to the "Total" value in the score-container
    let totalNumber = parseInt(total.textContent)
    totalNumber += currentFixedNumber;
    total.textContent = totalNumber;

    const bonusText = document.getElementById('bonus');
    const bonus = document.getElementById('fixed-bonus-score');
    const bonusRight = document.getElementById('bonus-right');
    if (parseInt(left.textContent) >= 63 && !bonusSoundPlayed) {
        bonus.textContent = 35;
        bonusRight.textContent = 35;
        leftNumber += parseInt(bonus.textContent);
        left.textContent = leftNumber;
        totalNumber += parseInt(bonus.textContent);
        total.textContent = totalNumber;
        bonus.style.color = 'red'
        bonusText.style.color = 'red'
        bonusSound.volume = 0.2;
        bonusSound.play();
        bonusSoundPlayed = true;
    }
    // =======================================================================


    // Hides the clicked current-score element
    event.target.classList.add('hidden');

    //Displays fixed score element that was generated
    this.nextElementSibling.classList.remove('hidden');
    this.nextElementSibling.style.color = 'red';
    this.previousElementSibling.style.color = 'red';

    //Removes eventListener from each elements with class 'current-score' time the '.current-score' 
    //element is clicked
    currentScoreLeft.forEach(element => {
        element.removeEventListener('click', addScoreLeft);
    });

    currentScoreRight.forEach(element => {
        element.removeEventListener('click', addScoreRight);
    });

    initialState();
    deleteCurrentScore();
    endGame();
}

// ================================================================================
//Right panel score function
// ================================================================================
let rightScoreCount = 0;
//Yahtzee_50 points won sound
let yahtzeePlaySound = false;

function addScoreRight(event) {
    rightScoreCount++;
    enterScore(); //counter returns to 3 after score is added
    enterScoreSound.play();


    const currentScoreLeft = document.querySelectorAll('.left-current-score');
    const currentScoreRight = document.querySelectorAll('.right-current-score');

    //Current score passed to the fixed score
    this.nextElementSibling.textContent = event.target.textContent;
    // =======================================================================
    const currentFixed = event.target.textContent;
    const right = document.getElementById('right');
    const total = document.getElementById('total');


    const currentFixedNumber = parseInt(currentFixed);

    //Adds current score to the "Left" value in the score-container
    let rightNumber = parseInt(right.textContent)
    rightNumber += currentFixedNumber;
    right.textContent = rightNumber;

    //Adds current score to the "Total" value in the score-container
    let totalNumber = parseInt(total.textContent)
    totalNumber += currentFixedNumber;
    total.textContent = totalNumber;
    // =======================================================================


    // Hides the clicked current-score element
    event.target.classList.add('hidden');

    //Displays fixed score element that was generated
    this.nextElementSibling.classList.remove('hidden');
    this.nextElementSibling.style.color = 'red';
    this.previousElementSibling.style.color = 'red';

    //Removes eventListener from each elements with class 'current-score' time the '.current-score' 
    //element is clicked
    currentScoreLeft.forEach(element => {
        element.removeEventListener('click', addScoreLeft);
    });

    currentScoreRight.forEach(element => {
        element.removeEventListener('click', addScoreRight);
    });

    if (document.getElementById("fixed-yahtzee-score").textContent === '50' && !yahtzeePlaySound) {
        yahtzeeFiftySound.volume = 0.4;
        yahtzeeFiftySound.play();
        yahtzeePlaySound = true;
    }

    initialState();
    deleteCurrentScore();
    endGame();
}

function endGame() {
    if (leftScoreCount === 6 && rightScoreCount === 7) {
        yahtzeeSound.play();
        document.getElementById('play-area').style.display = 'none';
        document.getElementById('end-game').style.display = 'block';
        document.getElementById('score').innerHTML = `${document.getElementById('total').textContent}`

        const scoreObject = addResult(document.getElementById('total').textContent);
        const tableBody = document.querySelector("#resultsTable tbody");
        // ==========================================================================================================

        // Loop through the game results array and create a row for each game
        scoreObject.results.forEach((game) => {
            // Create a new row element
            const row = document.createElement("tr");

            // Create a date cell and add it to the row
            const dateCell = document.createElement("td");
            dateCell.textContent = new Date(game.date).toLocaleString();
            row.appendChild(dateCell);

            // Create a cell for each player's score and add them to the row

            const scoreCell = document.createElement("td");
            scoreCell.textContent = game.score;
            row.appendChild(scoreCell);


            // Add the row to the table body
            tableBody.appendChild(row);
            // ==========================================================================================================
        });


    }
}

document.getElementById('start-new-game').addEventListener('click', startNewGame);

function startNewGame() {
    document.getElementById('play-area').style.display = 'block';
    document.getElementById('end-game').style.display = 'none';

    const allZeroes = document.getElementsByClassName('current-score');
    const fixedScores = document.getElementsByClassName('fixed-score');
    const lineNames = document.getElementsByClassName('line-name');
    const scores = document.getElementsByClassName('score');

    for (let allZero of allZeroes) {
        allZero.classList.remove('hidden');
    }

    for (let fixedScore of fixedScores) {
        fixedScore.classList.add('hidden');
    }

    for (let lineName of lineNames) {
        lineName.style.color = 'black'
    }

    for (let score of scores) {
        score.textContent = 0;
    }

    document.getElementById('fixed-bonus-score').style.display = 'block';
    document.getElementById('fixed-bonus-score').style.color = 'black';
    document.getElementById('fixed-bonus-score').textContent = 0;
    document.getElementById('bonus-right').style.display = 'block';

    rightScoreCount = 0;
    leftScoreCount = 0;
}

//Restart Game button

document.getElementById('restart').addEventListener('click', startNewGame);

// ======================================================================
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
                threeOfAKind = 30;
            } else if (count >= 3) {
                threeOfAKind = 30;
            }
        }
    }
    rightPanelScore(arrRight);

    document.getElementById('current-ones-score').textContent = arr1;
    document.getElementById('current-twos-score').textContent = arr2;
    document.getElementById('current-threes-score').textContent = arr3;
    document.getElementById('current-fours-score').textContent = arr4
    document.getElementById('current-fives-score').textContent = arr5;
    document.getElementById('current-sixes-score').textContent = arr6;

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
 * when they are red-capped, have white background (.dice) and ready to get random numbers (.dice-image, class="unhold-dice") 
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
    // This blocks changing dice color from white to yellow until the "Roll Dice" button will be clicked again
    for (let dice of dices) {
        dice.removeEventListener('click', holdButtonColor)
    };
}

/**
 * Resets all the score lines that were not clicked after fixing current score
 */

function deleteCurrentScore() {
    const removeElsLeft = document.getElementsByClassName('left-current-score');
    const removeElsRight = document.getElementsByClassName('right-current-score');

    for (let removeEl of removeElsLeft) {
        removeEl.textContent = 0;
    }

    for (let removeEl of removeElsRight) {
        removeEl.textContent = 0;
    }
};

// ===============================================================================
//Max Score
// ===============================================================================
// Create an empty object to store the results
const yahtzeeResults = {
    results: []
};
//line 291
// Define a function to add new results to the object
function addResult(score) {
    const result = {

        date: new Date(),
        date2: new Date(),
        score: score
    };

    yahtzeeResults.results.push(result);

    return yahtzeeResults;
}