﻿// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;

// GAME OBJECTS
var game;
var btnBet1;
var btnBet5;
var btnBet10;
var btnBet100;
var background;
var btnSpin;
var betMaxButton;
var betOneButton;
var resetButton;
var powerButton;

// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

// GAMELOOP
function gameLoop() {
    stage.update();
}

function spinButtonClicked() {
    console.log("Spin Button Clicked");
}

function spinButtonOut() {
    spinButton.alpha = 1; // 100% Alpha
}

function spinButtonOver() {
    spinButton.alpha = 0.7;
}

function createUI() {
    background = new createjs.Bitmap("images/slot machine-V3.png");
    game.addChild(background); // Add the background to the game container

    
    //Reset Button
    btnReset = new createjs.Bitmap("images/btnReset.png");
    game.addChild(btnReset);
    btnReset.x = 53;
    btnReset.y = 481;
    
    //Bet+1 Button
    btnBet1 = new createjs.Bitmap("images/btnBet1.png");
    game.addChild(btnBet1);
    btnBet1.x = 118;
    btnBet1.y = 481;

    //Bet+5 Button
    btnBet5 = new createjs.Bitmap("images/btnBet5.png");
    game.addChild(btnBet5);
    btnBet5.x = 183;
    btnBet5.y = 481;

    //Bet+10 Button
    btnBet10 = new createjs.Bitmap("images/btnBet10.png");
    game.addChild(btnBet10);
    btnBet10.x = 248;
    btnBet10.y = 481;

    //Bet+100 Button
    btnBet100 = new createjs.Bitmap("images/btnBet100.png");
    game.addChild(btnBet100);
    btnBet100.x = 313;
    btnBet100.y = 481;

    //Bet Max Button
    btnBetMax = new createjs.Bitmap("images/btnBetMax.png");
    game.addChild(btnBetMax);
    btnBetMax.x = 378;
    btnBetMax.y = 481;
    


    // Spin Button
    btnSpin = new createjs.Bitmap("images/btnSpin.png");
    game.addChild(btnSpin);
    btnSpin.x = 475;
    btnSpin.y = 229;

    /*
    // Spin Button Event Listeners
    spinButton.addEventListener("click", spinButtonClicked);
    spinButton.addEventListener("mouseover", spinButtonOver);
    spinButton.addEventListener("mouseout", spinButtonOut);

    // Bet Max Button
    betMaxButton = new createjs.Bitmap("assets/images/betMaxButton.png");
    game.addChild(betMaxButton);
    betMaxButton.x = 325;
    betMaxButton.y = 560;

    // Bet One Button
    betOneButton = new createjs.Bitmap("assets/images/betOneButton.png");
    game.addChild(betOneButton);
    betOneButton.x = 235;
    betOneButton.y = 560;

    // Reset Button
    resetButton = new createjs.Bitmap("assets/images/resetButton.png");
    game.addChild(resetButton);
    resetButton.x = 150;
    resetButton.y = 560;

    // Power Button
    powerButton = new createjs.Bitmap("assets/images/powerButton.png");
    game.addChild(powerButton);
    powerButton.x = 55;
    powerButton.y = 560;
    */
}

function main() {
    game = new createjs.Container(); // Instantiates the Game Container

    createUI();

    stage.addChild(game); // Adds the Game Container to the Stage
}
//# sourceMappingURL=game.js.map