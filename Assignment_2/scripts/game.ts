// CreateJS Boilerplate for COMP397
/// <reference path="lib/createjs-lib.d.ts" />
/// <reference path="lib/easeljs.d.ts" />
/// <reference path="lib/tweenjs.d.ts" />
/// <reference path="lib/soundjs.d.ts" />
/// <reference path="lib/preloadjs.d.ts" />

// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage


// GAME OBJECTS
var game: createjs.Container; // Main Game Container Object
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var betMaxButton: createjs.Bitmap;
var betOneButton: createjs.Bitmap;
var resetButton: createjs.Bitmap;
var powerButton: createjs.Bitmap;


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

    // Spin Button
    spinButton = new createjs.Bitmap("assets/images/spinButton.png");
    game.addChild(spinButton);
    spinButton.x = 410;
    spinButton.y = 545;

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

}


function main() {
    game = new createjs.Container(); // Instantiates the Game Container

    createUI();

    stage.addChild(game); // Adds the Game Container to the Stage
    

}



