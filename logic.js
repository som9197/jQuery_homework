//Global Variables
//-----------------------------------

//Crystal Variables
var crystal = {
    yellow:
    {
        name: "yellow",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    pink:
    {
        name: "pink",
        value: 0
    },
    blue:
    {
        name: "blue",
        value: 0
    },
};

//Scores
var currentScore = 0;
var targetScore  = 0; 

//Wins & Losses
var winCount     = 0;
var lossCount    = 0;



//Functions
//-----------------------------------
//helper
var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

//start and restart game
var startGame = function(){
    
    //reset current score
    currentScore = 0;

    //set target score
    targetScore = getRandom(19,120);

    //set different values for crystals
    crystal.blue.value     = getRandom(1,12);
    crystal.yellow.value   = getRandom(1,12);
    crystal.pink.value     = getRandom(1,12);
    crystal.green.value    = getRandom(1,12);

    //change html as needed
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    //Testing
    console.log("------");
    console.log("Target Score: " + targetScore);
    console.log("Blue:"+crystal.blue.value);
    console.log("Yellow:"+crystal.yellow.value);
    console.log("Pink:"+crystal.pink.value);
    console.log("Green:"+crystal.green.value);
    
}

// Respond to clicks

var addValues = function(crystal) {
    
    //Change currentScore
    currentScore = currentScore + crystal.value; 

    //Change HTML
    $("#yourScore").html(currentScore);

    //Call the checkWin Function
    checkWin();


    console.log("YourScore: "+currentScore);
}

//Check Wins / Losses / Reset
var checkWin = function () {

    if(currentScore > targetScore){
        alert("Sorry. You Lost!");
        console.log("You Lost");

        //Add to Loss Counter
        lossCount++;

        //update html
        $("#lossCount").html(lossCount);

        //Restart the game
        startGame();
    }

    else if(currentScore == targetScore){
        alert("Congratulations! You Won!");
        console.log("You Won!");

        //Add to Win Counter
        winCount++;

        //update html
        $("#winCount").html(winCount);

        //Restart the game
        startGame();
    }
}

//Main Process
//-----------------------------------
//Start Game
startGame();
$("#blue").click(function(){
    
    addValues(crystal.blue);
});

$("#yellow").click(function(){
    addValues(crystal.yellow);
});

$("#pink").click(function(){
    addValues(crystal.pink);
});

$("#green").click(function(){
    addValues(crystal.green);
});
