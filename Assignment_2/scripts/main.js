// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Professor's example
var Button = (function () {
    function Button(path, x, y) {
        this._x = x;
        this._y = y;
        this._image = new createjs.Bitmap(path);
        this._image.x = this._x;
        this._image.y = this._y;
        this._image.addEventListener("mouseover", this._buttonOver);
        this._image.addEventListener("mouseout", this._buttonOut);
        this._image.addEventListener("mousedown", this._buttonDown);
        this._image.addEventListener("mouseup", this._buttonUp);
    }
    // PUBLIC PROPERTIES
    Button.prototype.setX = function (x) {
        this._x = x;
    };
    Button.prototype.getX = function () {
        return this._x;
    };
    Button.prototype.setY = function (y) {
        this._y = y;
    };
    Button.prototype.getY = function () {
        return this._y;
    };
    Button.prototype.getImage = function () {
        return this._image;
    };
    // PRIVATE EVENT HANDLERS
    Button.prototype._buttonOut = function (event) {
        event.currentTarget.alpha = 1; // 100% Alpha 
    };
    Button.prototype._buttonOver = function (event) {
        event.currentTarget.alpha = 0.7;
    };
    Button.prototype._buttonDown = function (event) {
        event.currentTarget.alpha = 0.3;
    };
    Button.prototype._buttonUp = function (event) {
        event.currentTarget.alpha = 0.7;
    };
    return Button;
})();
var canvas;
var stage;
var tiles = [];
var reelContainers = [];

// GAME CONSTANTS
var NUM_REELS = 3;

// GAME OBJECTS
var game;
var btnBet1;
var btnBet5;
var btnBet10;
var btnBet100;
var background;
var btnSpin;
var betMoney;
var addedBet;
var textMoney;
var textBet;
var textWinnings;
var textJackpot;

// Bet Items
var apple = 0;
var diamond = 0;
var emerald = 0;
var gold = 0;
var iron = 0;
var stone = 0;
var wood = 0;
var dirt = 0;

// Player Info
var winNumber = 0;
var lossNumber = 0;
var winnings = 0;
var playerBet = 0;
var youHave = 1000;
var jackPot = 5000;

function resetItem() {
    apple = 0;
    diamond = 0;
    emerald = 0;
    gold = 0;
    iron = 0;
    stone = 0;
    wood = 0;
    dirt = 0;
}


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

function btnSpinClicked(event) {
    if (youHave != 0) {
        if (playerBet != 0) {
            youHave = youHave - playerBet;
            console.log("Spin Button Clicked");
            spinResult = Reels();


            // Iterate over the number of reels
            for (var index = 0; index < NUM_REELS; index++) {
                reelContainers[index].removeAllChildren();
                setTimeout(function () { }, 1000);
                tiles[index] = new createjs.Bitmap("images/items/itm" + spinResult[index] + ".png");
                reelContainers[index].addChild(tiles[index]);
            }
            determineWinnings();
            game.removeChild(textMoney)
            addYouHaveText();
        }
        else {
            alert("Are you kidding me? You cannot win any money without paying!");
        }
    }
    else {
        alert("You don't have any money now.")
        restart();
    }

}

function restart() {
    if (confirm("Restart the game?")) {
        game.removeChild(textMoney);
        game.removeChild(textBet);
        for (var index = 0; index < NUM_REELS; index++) {
            reelContainers[index].removeAllChildren();
        }
        playerBet = 0;
        youHave = 1000;
        jackPot = 5000;
        addBetText();
        addYouHaveText();
    }    
}

function nothing() { }

function btnResetClicked(event) {
    game.removeChild(textBet);
    playerBet = 0;
    console.log(playerBet);
    addBetText();
}

function btnBet1Clicked(event) {
    game.removeChild(textBet);
    if (playerBet + 1 > youHave) {
        playerBet = youHave;
    }
    else {
        playerBet = playerBet + 1;
    }
    console.log(playerBet);
    addBetText();
}

function btnBet5Clicked(event) {
    game.removeChild(textBet);
    if (playerBet + 5 > youHave) {
        playerBet = youHave;
    }
    else {
        playerBet = playerBet + 5;
    }
    console.log(playerBet);
    addBetText();
}

function btnBet10Clicked(event) {
    game.removeChild(textBet);
    if (playerBet + 10 > youHave) {
        playerBet = youHave;
    }
    else {
        playerBet = playerBet + 10;
    }
    console.log(playerBet);
    addBetText();
}

function btnBet100Clicked(event) {
    game.removeChild(textBet);
    if (playerBet + 100 > youHave) {
        playerBet = youHave;
    }
    else {
        playerBet = playerBet + 100;
    }
    console.log(playerBet);
    addBetText();
}

function btnBetMaxClicked(event) {
    game.removeChild(textBet);
    playerBet = youHave;
    console.log(playerBet);
    addBetText();
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

function addBetText() {
    textBet = new createjs.Text(playerBet, "bold 86px Arial");
    game.addChild(textBet);
    textBet.x = 10;
    textBet.y = 10;    
}

function addYouHaveText() {
    textMoney = new createjs.Text(youHave, "bold 86px Arial");
    game.addChild(textMoney);
    textMoney.x = 10;
    textMoney.y = 100;
}

function createUI() {
    background = new createjs.Bitmap("images/slot machine-V3.png");
    game.addChild(background); // Add the background to the game container 

    addBetText();
    addYouHaveText();
    

    for (var index = 0; index < NUM_REELS; index++) {
        reelContainers[index] = new createjs.Container();
        game.addChild(reelContainers[index]);
    }
    reelContainers[0].x = 113;
    reelContainers[0].y = 281;
    reelContainers[1].x = 213;
    reelContainers[1].y = 281;
    reelContainers[2].x = 310;
    reelContainers[2].y = 281;

    console.log(playerBet);

    /*
    // Spin Button Format
    spinButton = new Button("assets/images/spinButton.png", 410, 545);
    game.addChild(spinButton.getImage());
    */

    //Reset Button
    btnReset = new Button("images/btnReset.png", 53, 481);
    game.addChild(btnReset.getImage());    
   
    //Bet+1 Button
    btnBet1 = new Button("images/btnBet1.png", 118, 481);
    game.addChild(btnBet1.getImage());
    
    //Bet+5 Button
    btnBet5 = new Button("images/btnBet5.png", 183, 481);
    game.addChild(btnBet5.getImage());
    
    //Bet+10 Button
    btnBet10 = new Button("images/btnBet10.png", 248, 481);
    game.addChild(btnBet10.getImage());    

    //Bet+100 Button
    btnBet100 = new Button("images/btnBet100.png", 313, 481);
    game.addChild(btnBet100.getImage());
    
    //Bet Max Button
    btnBetMax = new Button("images/btnBetMax.png", 378, 481);
    game.addChild(btnBetMax.getImage());
        


    // Spin Button
    btnSpin = new Button("images/btnSpin.png", 474, 229);
    game.addChild(btnSpin.getImage());

    
    
    btnSpin.getImage().addEventListener("click", btnSpinClicked);
    btnReset.getImage().addEventListener("click", btnResetClicked);
    btnBet1.getImage().addEventListener("click", btnBet1Clicked);
    btnBet5.getImage().addEventListener("click", btnBet5Clicked);
    btnBet10.getImage().addEventListener("click", btnBet10Clicked);
    btnBet100.getImage().addEventListener("click", btnBet100Clicked);
    btnBetMax.getImage().addEventListener("click", btnBetMaxClicked);

    /*
    //Testing Item Locations(x, y)
    itmApple = new Button("images/items/itmEmerald.png", 113, 281);
    game.addChild(itmApple.getImage());

    itmApple = new Button("images/items/itmWood.png", 213, 281);
    game.addChild(itmApple.getImage());

    itmApple = new Button("images/items/itmIron.png", 310, 281);
    game.addChild(itmApple.getImage());
    */

    
}

function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                betLine[spin] = "Dirt";
                dirt++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                betLine[spin] = "Wood";
                wood++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "Stone";
                stone++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "Iron";
                iron++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "Gold";
                gold++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "Emerald";
                emerald++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "Diamond";
                diamond++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "Apple";
                apple++;
                break;
        }
    }
    return betLine;
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (dirt == 0) {
        if (wood == 3) {
            winnings = playerBet * 10;
        }
        else if (stone == 3) {
            winnings = playerBet * 20;
        }
        else if (iron == 3) {
            winnings = playerBet * 30;
        }
        else if (gold == 3) {
            winnings = playerBet * 40;
        }
        else if (emerald == 3) {
            winnings = playerBet * 50;
        }
        else if (diamond == 3) {
            winnings = playerBet * 75;
        }
        else if (apple == 3) {
            winnings = playerBet * 100;
        }
        else if (wood == 2) {
            winnings = playerBet * 2;
        }
        else if (stone == 2) {
            winnings = playerBet * 2;
        }
        else if (iron == 2) {
            winnings = playerBet * 3;
        }
        else if (gold == 2) {
            winnings = playerBet * 4;
        }
        else if (emerald == 2) {
            winnings = playerBet * 5;
        }
        else if (diamond == 2) {
            winnings = playerBet * 10;
        }
        else if (apple == 2) {
            winnings = playerBet * 20;
        }
        else {
            winnings = playerBet * 1;
        }

        if (apple == 1) {
            winnings = playerBet * 5;
        }
        winNumber++;        
        resetItem();
        youHave = youHave + winnings;
        console.log("You win " + winnings + "!");
        console.log(youHave);
        
        //showWinMessage();
    }
    else {
        winnings = 0;
        lossNumber++;
        console.log(dirt + ", " + wood + ", " + stone);
        resetItem();
        console.log("You Lose!");
        console.log(youHave);
        //showLossMessage();
    }

}


function main() {
    game = new createjs.Container(); // Instantiates the Game Container

    createUI();

    stage.addChild(game); // Adds the Game Container to the Stage
}
//# sourceMappingURL=game.js.map