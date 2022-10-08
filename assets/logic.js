//Define "questions" variable, give each question a title string, choices array, and answer string
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
  
//Start quiz and first question, set time limit to 15 seconds per question (60 total for 4 questions)
var currentQuestionIndex = 0;
var time = questions.length * 15;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');
var startScreen = document.getElementById("start-screen");
var viewHigh = document.getElementById("viewhigh");
var timerDiv = document.getElementById("timerdiv");
var allDone = document.getElementById("end-screen");

window.onload = function () {
    timerDiv.style.display = "none";
    allDone.style.display = "none";
    var img = document.createElement("img");
    img.src = "https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png";
    var div = document.getElementById("start-screen");
    div.appendChild(img);
}

//Event listener for Start Quiz button
startBtn.addEventListener("click", startQuiz)

//Function to begin quiz, hide intro page 
function startQuiz() { 
    viewHigh.style.display = "none";    
    startScreen.style.display = "none";
    timerDiv.style.display = "block";
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = ''; 
    var ul = document.createElement("ul");
    choicesEl.appendChild(ul);
    console.log(currentQuestion.choices[0][i]);
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "choice");
        ul.appendChild(li)
        li.textContent = (currentQuestion.choices[i]);
    }
}

function questionClick(event) {
    var buttonEl = event.target;

    // if the clicked element is not a choice button, do nothing.
    if (!buttonEl.matches('.choice')) {
        return;
    }

    // check if user guessed right or wrong
    if (true) { //replace true with a conditional statement that checks if the clicked choice button's value is the same as the questions[currentQuestionIndex]'s answer
        //incorrect answer scenario

        // penalize time
        // display new time on page
    } else {
        //correct scenario

        // move to next question
    }
    // flash right/wrong feedback on page

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}


function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== '') {

        //JSON.parse
        // get saved scores from localstorage (highscores), or if not any, set to empty array
        

        // format new score object for current user
        

        // save to localstorage
        

        // redirect to next page
        window.location.href = 'highscores.html';
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === 'Enter') {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;