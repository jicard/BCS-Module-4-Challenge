//Define "questions" variable, give each question a title string, choices array, and answer string (each question is an object)
var questions = [
    {
      title: 'All of these are example of data types EXCEPT:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: 'all of the above',
    },
    {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
  
//Start quiz at question 1, set 15 seconds per question, set starting score to 0
var currentQuestionIndex = 0;
var time = questions.length * 15;
var score = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');
var startScreen = document.getElementById("start-screen");
var scoreboard = document.getElementById("scores");
var timerDiv = document.getElementById("timerdiv");
var timecount = document.getElementById("time");
var allDone = document.getElementById("end-screen");
var highScores = document.getElementById("scorediv");

//Set what to show on initial page load
window.onload = function onload() {
    timerDiv.style.display = "none";
    allDone.style.display = "none";
    highScores.style.display = "none";
    //Remove these comments for a laugh
    //var img = document.createElement("img");
    //img.src = "https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png";
    //var div = document.getElementById("start-screen");
    //div.appendChild(img);
}

//Event listener for Start Quiz button
startBtn.addEventListener("click", startQuiz)

//Function to hide home page, show timer, render the first question, and start the timer
function startQuiz() { 
    scoreboard.style.display = "none";    
    startScreen.style.display = "none";
    timerDiv.style.display = "block";
    getQuestion()
    clockTick();
}

//Checks question index to decide whether to end quiz or give a question, renders question and defines each choice as correct/incorrect
function getQuestion() {
    if (currentQuestionIndex === questions.length) {
        quizEnd();
        return null;
    }
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = ''; 
    var ul = document.createElement("ul");
    choicesEl.appendChild(ul);
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "choice");
        ul.appendChild(li)
        li.textContent = (currentQuestion.choices[i]);
        if (currentQuestion.choices[i] === currentQuestion.answer) {
            li.setAttribute("class", "correct")
        } else {
            li.setAttribute("class", "incorrect")
        }
    }
}

//questionClick function will be called if an element in the div with "choices" class is clicked
choicesEl.onclick = questionClick;
function questionClick(event) {
    var buttonEl = event.target;
    if (buttonEl.matches(".incorrect")) {
        confirm("That is incorrect! You have been docked 10 seconds.");
        currentQuestionIndex++;
        time-=10;
    } else if (buttonEl.matches(".correct")) {
        currentQuestionIndex++;
        score++;
    }  
    getQuestion();
}

var finalScoreEl = document.getElementById('final-score');
function quizEnd() {
    questionsEl.style.display = "none";
    timerDiv.style.display = "none";
    allDone.style.display = "block";
    finalScoreEl.textContent = score+"/"+questions.length;
    submitBtn.addEventListener('click', saveHighscore)
}

function clockTick() {
    setInterval(function countDown(){
    timecount.textContent = time;
    time--;
    if (time <= -1) {
        quizEnd();
    }
    },1000);
}

function saveHighscore() {
    if (initialsEl.value === "") {
        alert("Submit initials pls")
    } else {
        console.log("fuck this");
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentuser = initialsEl.value.trim();
        var currentscore = {
            name: currentuser,
            score: score
        };
        window.location.href = 'scores.html';
    }
    savedHighscores.push(currentscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
}


