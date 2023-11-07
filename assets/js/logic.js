// GIVEN I am taking a code quiz
// DOM elements
var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesDiv = document.getElementById("choices");
var timeSpan = document.getElementById("time");
var feedbackDiv = document.getElementById("feedback");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var finalScoreSpan = document.getElementById("final-score");

//Empty var (starting point)
var currentQuestionIndex = 0;
var timeLeft = 3;
var score = 0;
var timerInterval;

// WHEN I click the start button
startButton.addEventListener("click", startQuiz);
// Function to start the quiz
function startQuiz() {
    // Hide the start screen and show the questions screen
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    // Start the timer
    startTimer();
    // Load the first question
    loadQuestion(currentQuestionIndex);
}

// Function to load a question
function loadQuestion(index) {
    questionTitle.textContent = questions[index].question;
    choicesDiv.innerHTML = "";

    for (let i = 0; i < questions[index].answers.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = questions[index].answers[i];
        choiceButton.addEventListener("click", handleAnswerClick);
        choicesDiv.appendChild(choiceButton);
    }
}
// THEN a timer starts 
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


// Play the correct sound
function playCorrectSound() {
    var correctSound = document.getElementById("correctSound");
    correctSound.play();
}

// Play the incorrect sound
function playIncorrectSound() {
    var incorrectSound = document.getElementById("incorrectSound");
    incorrectSound.play();
}

// Function to handle user's answer click
function handleAnswerClick(event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswer = questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswerIndex];

    if (selectedAnswer === correctAnswer) {
        // Correct answer
        score += 1;
        feedbackDiv.textContent = "Correct!";
        playCorrectSound(); // Play the correct sound
    } else {
        // Incorrect answer
        timeLeft -= 1;
        feedbackDiv.textContent = "Incorrect!";
        playIncorrectSound(); // Play the incorrect sound
    }

    feedbackDiv.classList.remove("hide");


    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}
// Event for submit button
submitButton.addEventListener("click", handleSubmit);


// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    timeSpan.textContent = timeLeft;
    finalScoreSpan.textContent = score;
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
}
