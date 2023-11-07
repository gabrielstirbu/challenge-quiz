// DOM elements
var highscoresList = document.getElementById("highscores");
var goBackButton = document.querySelector("a");
var clearButton = document.getElementById("clear");

// Function to display high scores
function displayHighScores() {
    // Retrieve high scores from storage (you need to implement this)
    var highScores = getHighScores();

    // Clear the existing list
    highscoresList.innerHTML = "";
}

// Function to clear high scores
function clearHighScores() {
    // Clear high scores from storage (you need to implement this)
    clearHighScoresData();

    // Refresh the high scores list
    displayHighScores();
}

// Display high scores when the page loads
displayHighScores();