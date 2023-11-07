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
    // Load the first question
    loadQuestion(currentQuestion[i]);
}

// Function to load a question
function loadQuestion(i) {
    questionTitle.textContent = questions[i].question;
    choicesDiv.innerHTML = "";

    for (let i = 0; i < questions[i].answers.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = questions[i].answers[i];
        choiceButton.addEventListener("click", handleAnswerClick);
        choicesDiv.appendChild(choiceButton);
    }
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
      timeLeft--;
      timeSpan.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
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