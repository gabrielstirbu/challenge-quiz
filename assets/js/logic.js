// GIVEN I am taking a code quiz
// DOM elements
var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesDiv = document.getElementById("choices");
var timeSpan = document.getElementById("time");

//Empty var (starting point)
var currentQuestionIndex = 0;
var timeLeft = 15;
var score = 0;
var timerInterval;

// WHEN I click the start button
// Function to start the quiz
function startQuiz() {
    // Hide the start screen and show the questions screen
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    // Start the timer
    startTimer();
}


// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score