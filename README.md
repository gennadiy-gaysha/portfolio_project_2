# Yahtzee

![RPSLS mockup images](assets/img/responsiveness.png)

Yahtzee is a popular dice game that is played with five standard six-sided dice. The game consists of a
series of rounds, and each round involves rolling the dice up to three times in an attempt to get certain
combinations of dice faces.

## Basic rules of Yahtzee:

- At the beginning of each round, the player rolls all five dice.
- After the first roll, the player can choose to keep any number of dice and re-roll the rest. The player can do this up to two more times.
- Once the player has finished rolling the dice, they must choose a category to score. There are 13 categories, each with different requirements:
    - Ones: Score the total of all dice showing the number 1.
    - Twos: Score the total of all dice showing the number 2.
    - Threes: Score the total of all dice showing the number 3.
    - Fours: Score the total of all dice showing the number 4.
    - Fives: Score the total of all dice showing the number 5.
    - Sixes: Score the total of all dice showing the number 6.
    - Bonus: The Left section is the first six rows - ones, twos, threes, fours, fives and sixes. If the sum of your score in the Left
section is greater than or equal to 63, you automatically get 35 bonus points.
    - Three of a kind: Score the total of all dice if there are at least three of the same number.
    - Four of a kind: Score the total of all dice if there are at least four of the same number.
    - Full house: Score 25 points if there are three of one number and two of another.
    - Small straight: Score 30 points if there are four sequential numbers.
    - Large straight: Score 40 points if there are five sequential numbers.
    - Yahtzee: Score 50 points if all five dice show the same number.
    - Chance: Score the total of all dice, regardless of the numbers.

Once the player has chosen a category to score, they cannot choose that category again for the rest of the game.
The game continues for 13 rounds, after which the player with the highest total score wins.

These are the basic rules of Yahtzee, but there are many variations and additional rules that can be added to make the game more interesting or challenging.

Visit the deployed website [here](https://gennadiy-gaysha.github.io/portfolio_project_2/).

## Table of Contents

1. [User Experience (UX)](#User-experience-UX)
    1. [Project Goals](#project-goals)
    2. [User Stories](#User-stories)
    3. [Color Scheme](#color-scheme)
    4. [Typography](#typography)
    5. [Mockup](#mockup)
2. [Features](#features)
    1. [General](#general)
    2. [Home Section](#home-section)
    3. [Instructions Section](#instructions-section)
    4. [Game section](#game-section)
    5. [Result Section](#result-section)
    6. [404 Error Page](#404-error-page)
3. [Technologies Used](#technologies-used)
    1. [Languages Used](#languages-used)
    2. [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
4. [Testing](#testing)
    1. [Testing User Stories](#testing-User-stories)
    2. [Code Validation](#code-validation)
    3. [Accessibility](#accessibility)
    4. [Tools Testing](#tools-testing)
    5. [Manual Testing](#manual-testing)
5. [Finished Product](#finished-product)
6. [Deployment](#deployment)
    1. [GitHub Pages](#github-pages)
7. [Credits](#credits)
    1. [Content](#content)
    2. [Media](#media)
    3. [Code](#code)
8. [Acknowledgements](#acknowledgements)

***

## User Experience (UX)

### Project Goals

* The website should offer a layout that is straightforward to comprehend and traverse.

* The website should contain complementary colors that interactivity to engage the player in the game play.

* Responsive design should make the game accessible on different devices.

* The website should comprise rule section that is easily accessible to the player..

* It should also include a maximum score table with the history of the maximum scores gained.

* The game should contain sound effects that create an immersive gaming atmosphere.

### User Stories

* As a player, I want that the game's website is simple to explore and use.

* As a player, I wish for the game to be entertaining and captivating.

* As a player, I would like to have effortless availability to the game rules.

* As a player, I expect the game controls to be readily accessible while playing.

* As a player, I wish the ability to retain my gained score history to compare it with my current rusult.

* As a player, I would like to play the game on various devices.

* As a player, I want to experience lifelike sound effects to be realistic.

### Color Scheme

![Color scheme image](assets/img/color-scheme.png)

The website used a variety of colors. However, the colors that form the primary palette are as follows (from left to right):
- #ededed and #222222  - font colors
- #0000ff - main-panel backgroud color
- #624afe - border of main panel color
- #a0a0a0 - roll dice button color
- #008000 - dice area background color
- #bebebe - score and score history background color
- #eb2294 - auxiliary buttons background color
- #ffff00 - hold dice background color
- #ff0000 - dice cup color

### Typography

This site was diceded to realize in retro style of late 1980s, i. e in the style of that time when computers designed for mass Users were just beginning to appear. Therefore main font used in the site is Press Start 2P, with Sans Serif as the fallback font in case Press Start 2P is not being imported correctly. 

### Mockup

For this project it was decided to use simple and straightforward website design that wouldn't take much time to create. At the same time, I wanted to maximize the potential of JS to make the site interactive. That's why the decision was to write code for the Yahtzee game. I used the website design that it had when I first encountered the game more than 30 years ago. Below, is included two screenshots of that design that I found online. They were the basis for this site: Start panel image & Play area image.

<br>

![Start panel image](assets/img/start-mockup.png)

<br>

![Play area image](assets/img/play-area-mockup.png)

[Back To The Table of Contents](#table-of-contents)

## Features

### General

 - The website has been designed with a focus on the laptop User experience.

 - The website has a responsive design that works seamlessly across all screen sizes and device types.

#### Start panel
- Start panel contains h1 heading - the name of the game (i.e. YAHTZEE) and "Start game" button.

- "Start game" button is div with eventListener (event - 'click') attached to it. Clicking this button switches the game to Play panel.
<br>

![Start panel](assets/img/start-panel.png)
<br>

#### Play panel

- Playing area. 

    - Includes 6 divs that represent 5 dices and "Roll dice" button. Css pseudoclass :active applies styles to these elements and imitate clicking effect. Below this row there is interactive information line which tells the player the number of throws left.
    - In case, if after a series of three throws, the User presses "Roll dice" button for the fourth time before recording the score, a warning message appears that the round is over, and the score needs to be recorded.
    <br>

![Playing area](assets/img/play-area.png)
<br>

<br>

![Alert message](assets/img/alert.png)
<br>

- Score area.

    - Allows the User to choose the line to write down the current score. Here also are presented total score and bonus point. Used fields are marked in red font.
    <br>

![Score area](assets/img/score-area.png)
<br>

- Auxiliary buttons area.

    - A row of three functional buttons, namly:
        - "Game rules" button with eventListener (event - 'click') that switches to Game rules panel;
        - "Restart game" button with eventListener (event - 'click') that allows to restart the game at any time;
        - "Max score" button - switches User to the Max score panel.
    <br>

![Auxiliary buttons area](assets/img/auxiliary-buttons-area.png)
<br>

#### End game panel

- Shows the number of points won in the last game.
- Below the final result is located the "Play again" button that returns the User to the play panel.
    <br>

![End game panel](assets/img/end-game-panel.png)
<br>

#### Game rules panel

- It describes the general rules of the game that were used as a basis for writing the JS code.
- To return to the game panel, there is a button "Back to play" located at the bottom of the game rules.
    <br>

![Game rules panel](assets/img/game-rules-panel.png)

<br>

![Game rules panel - bottom](assets/img/game-rules-bottom.png)
<br>

#### Max score panel

- Depicts 15 highes historical scores alongs with the date and time they were gained.
- To return to the game panel, there is a button "Back to play" located at the bottom of the panel.
    <br>

![Max score panel](assets/img/max-score-panel.png)

<br>

#### Locking of portrait screen orientation.

- Since landscape screen orientation is the most convenient for Users in this game, a lock of portrait screen orientation was applied to mobile devices. For this reason a message is displayed on a screen, asking the User to rotate their mobile device.
<br>

![Locking portrait mode](assets/img/lock-portrait.png)

<br>

### 404 Error Page

- When a User clicks on a broken link or enters an invalid URL, the server responds with a 404 error page, indicating that the requested page or resource does not exist on the server. For better User experience this page was customized by including "Back to play" button that can help the User find what they are looking for.
<br>

![Error 404 page](assets/img/error-404.png)

<br>

[Back To The Table of Contents](#table-of-contents)

## Technologies Used

### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

* [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the font Press Start 2P into the style.css file. These font is used throughout the site.

* [GitPod](https://gitpod.io/)
     - GitPod was used for writing code, committing, and then pushing to GitHub.

* [GitHub](https://github.com/)
     - GitHub was used to store the project after pushing.

* [Am I Responsive?](https://ui.dev/amiresponsive?url=https://gennadiy-gaysha.github.io/portfolio_project_2/index.html)
    - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used during development process for code review and to test responsiveness.

* [W3C Markup Validator](https://validator.w3.org/)
    - W3C Markup Validator was used to validate the HTML code.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - W3C CSS Validator was used to validate the CSS code.

* [JSHint](https://jshint.com/) 
    - The JSHints JavaScript Code Quality Tool was used to validate the site's JavaScript code.

[Back To The Table of Contents](#table-of-contents)

## Testing

### Testing User Stories

* As a player, I want that the game's website is simple to explore and use.

    - All buttons have labels corresponding to their functional purpose.

    - The information bar in the [Playing area](#play-panel) informs the User about the number of remaining throws or asks the User to record the current score after using all attempts.

* As a player, I wish for the game to be entertaining and captivating.
    - Bright complementary colors and retro design immerse the User in the atmosphere of the 80s, when computer games were just starting to appear.
    - The simplicity of the design doesn't distract the User from unnecessary details and allows them to focus directly on the game.
    - Sound effects create a lively atmosphere.
    - The ability to save 15 results with the highest historical score allows the User to compete with themselves to get on the leaderboard.
    - The ability to roll the dices by pressing the enter or spacebar key provides additional convenience for the User.
    - If the User is not satisfied with their current score, they can restart the game at any time by clicking the "Restart game" button.
    
* As a player, I would like to have effortless availability to the game rules.

    - The rules of the game are described in the [Rules section](#game-rules-panel), which the User can access at any time by clicking the button at the bottom of the panel.

* As a player, I expect the game controls to be readily accessible while playing.

    - An imitation clicking effect has been applied to all the buttons for a more interactive User experience.
    - All main ("Roll dice", "Hold dice") and 3 auxiliary ("Game rules", "Restart game" and "Max score") buttons are presented in the [Playing area](#play-panel)
    - The User can easily return back to play from any panel by clicking on "Back to play" button.

* As a player, I wish the ability to retain my gained score history.
    - The score area allows the user to enter their current score and displays the total score and bonus points. The fields for entering the score are highlighted in red font for easy identification. 
    - [Max score panel](#max-score-panel) depicts 15 highes historical scores alongs with the date and time they were gained.

* As a player, I would like to play the game on various devices.

    - Responsive design across all device sizes was applied.

* As a player, I want to experience lifelike sound effects.
    - To make this game more natural and engaging, there were 5 sound effects applied:
        - Roll-dice sound
        - Entered current score sound
        - Bonus won sound
        - Yahtzee won sound
        - End of the game sound

    ### Code Validation

- HTML 
    - Main page - no errors were returned when passing through the official [W3C validator - index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgennadiy-gaysha.github.io%2Fportfolio_project_2%2Findex.html)
    - Error 404 page - no errors were returned when passing through the official [W3C validator - rent.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgennadiy-gaysha.github.io%2Fportfolio_project_2%2F404.html)
- CSS 
    - style.css - no errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgennadiy-gaysha.github.io%2Fportfolio_project_2%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS 
    - script.js - no errors were found when passing through the official [JSHints JavaScript Code Quality Tool](https://jshint.com/)
    - common.js - no errors were found when passing through the official [JSHints JavaScript Code Quality Tool](https://jshint.com/)

### Accessibility

- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Lighthouse in Devtools
    - **index.html**

    ![Lighthouse report for landing page image](assets/img/lighthouse-index.png)

    - **404.html**

    ![Lighthouse report for treatmenst page image](assets/img/lighthouse-error.png)


### Tools Testing

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

    - Chrome DevTools was used during the development process to test, explore and modify HTML elements and CSS styles and lookin for errors in JS code.

### Manual Testing

* Browser Compatibility 

    - All site functions work correctly and the same in browsers that have different engines, i.e. Chrome, Firefox and Safari:

Browser | Outcome | Pass/Fail  
--- | --- | ---
Google Chrome | No problems related to the appearance, responsiveness or functionality of the website | Pass
Safari | No problems related to the appearance, responsiveness or functionality of the website | Pass
Mozilla Firefox | No problems related to the appearance, responsiveness or functionality of the website | Pass
Microsoft Edge | No problems related to the appearance, responsiveness or functionality of the website | Pass
<br>


* Testing Style And Functionality

| Feature | Element | Test | Outcome  | Pass/Fail |
|---|---|---|---|---|
| Start panel | "Start game" button | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Start game" button | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Start game" button | Functionality | Clicking the button redirects to Play Panel | Pass |
| Play panel - Playing area | An interactive information line | Functionality | An interactive infoline shows the actual number of throws left | Pass |
|  | "Roll dice" & "Hold dice" buttons | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Roll dice" & "Hold dice" buttons | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Roll dice" | Functionality | Clicking the button rolls the dice (generating five random numbers on   them) | Pass |
|  | "Roll dice" | Functionality | Three dice rolls are possible in one turn | Pass |
|  | "Roll dice" | Functionality | After   the third roll, an interactive information line prompts the user to write   down their current score | Pass |
|  | "Roll dice" | Functionality | After   attempting to click the button four times in a row, an alert message appears | Pass |
|  | "Roll dice" & "Hold dice" buttons | Functionality | Clicking   the 'Roll Dice' button does not roll the dice that are being held | Pass |
|  | "Hold dice" buttons (row of five dice) | Functionality | After   clicking on a dice, it becomes held and its color changes to yellow | Pass |
|  | "Hold dice" buttons (row of five dice) | Functionality | After   unclicking a dice, it becomes unheld and its color changes to white | Pass |
|  | "Roll dice" & "Hold dice" buttons | Functionality | After   the third roll, it is not possible to hold the dice, and they remain white   even after clicking on them | Pass |
| Play Panel - Score area | Score table values of current score | Style | Hovering over the values sets the cursor property to "pointer" | Pass |
|  | Score table values of current score | Style | Hovering over the values changes their background and font colors | Pass |
|  | Score table values of current score | Functionality | Before the "Roll dice" button is clicked for the   first time, they become inactive | Pass |
|  | Score table values of current score | Functionality | When   the 'Roll dice' button is clicked, the correct score values are displayed   based on the score rules | Pass |
|  | Score table values of current score | Functionality | When the "Roll dice" button is clicked, they become   active and it is possible to write down the current score | Pass |
|  | Score table current score lines | Functionality | After writing down the current score the line changes its   color to red | Pass |
|  | Score table current score lines | Functionality | After writing down the current score all the score lines become inactive | Pass |
|  | Score table current score lines | Functionality | After writing down the current score all the buttons in Playing area and   interactive infoline reset to start position | Pass |
| Play Panel | 3 pink auxiliary buttons | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | 3 pink auxiliary buttons | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Game rules" auxiliary button | Functionality | Clicking on the button redirects the User to appropriate panel hiding the   Play panel | Pass |
|  | "Restart game" auxiliary button | Functionality | Clicking   on the button, after the current score is written down, all the buttons in   the playing area and the interactive infoline reset to their starting   positions | Pass |
|  | "Max score" auxiliary button | Functionality | Clicking on the button redirects the User to appropriate panel hiding the   Play panel | Pass |
| Game Rules panel | "Back to play" button | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Back to play" button | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Back to play" button | Functionality | Clicking the button redirects the User to Play panel hiding the Game   Rules panel | Pass |
| Max Score panel | "Back to play" button | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Back to play" button | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Back to play" button | Functionality | Clicking the button redirects the User to Play panel hiding the Max Score   panel | Pass |
|  | Max Score table | Functionality | In   the table, the numbered historical scores with the date and time is   automatically recorded in descending order | Pass |
|  | Max Score table | Functionality | The   table contains 15 rows of data | Pass |
|  | Max Score table | Functionality | All the table data are saved on User computer (Local Storage   API) | Pass |
|  | Max Score table | Functionality | Table   data are stored on the user's computer in the browser's Local Storage. | Pass |
|  | Max Score table | Functionality | The table data will be available to the user even after they close the   browser or shut down their computer | Pass |
| End of the Game panel | Interactive infoline | Functionality | The   score that the player has earned is shown on the infoline | Pass |
|  | "Play again" button | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Play again" button | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Play again" button | Functionality | Clicking the button redirects the User to Play panel hiding the End of   the Game Panel panel | Pass |
| Site   responsiveness | All panels | > 1500 | Look   good and function on the chosen screen size using the Chrome devtools toolbar | Pass |
|  |  | <= 1500 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 1350 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 1200 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 1100 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 920 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 850 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 768 | Look good and function on the chosen screen size using the   Chrome devtools toolbar | Pass |
|  |  | <= 567 | A   panel with an informational message appears, suggesting that the user rotate   their mobile device to landscape mode | Pass |
| 404 Error page | Page itself | Functionality | Appears   when a user attempts to access a page that does not exist on the website | Pass |
|  | "Back to play" button | Style | Hovering over the button sets the cursor property to "pointer" | Pass |
|  | "Back to play" button | Style | Clicking on the button mimics the effect of physically clicking the   button | Pass |
|  | "Back to play" button | Functionality | Clicking the button redirects the User to Play panel hiding the 404 Error   page | Pass |

[Back to top ⇧](#rpsls)

## Finished Product

Page / Section | Image
--- | ---
Desktop Version | ![Desktop version image](assets/readme-files/desktop-version.png)
Home Section | ![Home section image](assets/readme-files/full-home-section.png)
Feedback Popup | ![Feedback popup image](assets/readme-files/full-feedback-popup.png)
Instructions Section | ![Home section image](assets/readme-files/full-instructions-section.png)
Game Section | ![Game section image](assets/readme-files/full-game-section.png)
Rules Popup | ![Rules popup image](assets/readme-files/full-rules-popup.png)
Result Sections | ![Result section image](assets/readme-files/result-section.png)
Landscape Orientation Blocker | ![Landscape image](assets/readme-files/landscape-blocker.png)
404 Error Page | ![404 error page image](assets/readme-files/404-error-page.png)

[Back to top ⇧](#rpsls)

## Deployment

* This website was developed using [GitPod](https://www.gitpod.io/), which was then committed and pushed to GitHub using the GitPod terminal.

### GitHub Pages

* Here are the steps to deploy this website to GitHub Pages from its GitHub repository:

    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).

    2. At the top of the Repository, locate the Settings button on the menu.

        - Alternatively click [here](https://raw.githubUsercontent.com/) for a GIF demostration of the process.

    3. Scroll down the Settings page until you locate the Pages section.

    4. Under Source, click the dropdown called None and select Master Branch.

    5. The page will refresh automatically and generate a link to your website.

[Back to top ⇧](#rpsls)

## Credits

### Content

* The instructions and rules were taken from the [Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock).

### Media

* The main image was taken from [TeePublic](https://www.teepublic.com/t-shirt/17021-rock-paper-scissors) and was designed by [Samiel](https://www.teepublic.com/User/samiel).

* The GIF used in the 404 error page was taken from [GIPHY](https://giphy.com/gifs/paper-bag-breathing-aa9VQ6gg5wCBy).

* The background video was taken from [Pexels](https://www.pexels.com/video/arrow-shape-design-on-green-background-4665103/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) and was created by [Miguel Á. Padriñán](https://www.pexels.com/@padrinan?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels). 

### Code

* [Stack Overflow](https://stackoverflow.com/), [CSS-Tricks](https://css-tricks.com/) and [W3Schools](https://www.w3schools.com/) were consulted on a regular basis for inspiration and sometimes to be able to better understand the code being implement.

* The code for the carousel is a modified version of the CSS-Tricks code found [here](https://css-tricks.com/css-only-carousel/ ).

* The code for the popups is a modified version of the W3Schools code found [here](https://www.w3schools.com/howto/howto_js_popup_form.asp).

* The code to apply the full screen background was found at [CSS-Tricks](https://css-tricks.com/full-page-background-video-styles/).

[Back to top ⇧](#rpsls)

## Acknowledgements

* My partner, for her unconditional love, help and continued support in all aspects of life to make possible for me to complete this project.

* My family, for their valuable opinions, critics and support during the design and development process.

* My tutor, Marcel, for his invaluable feedback and guidance.

* My friend, Miguel, for all the late calls, support and ideas that made me challenge myself.

* Code Institute and its amazing Slack community for their support and providing me with the necessary knowledge to complete this project.

[Back to top ⇧](#rpsls)