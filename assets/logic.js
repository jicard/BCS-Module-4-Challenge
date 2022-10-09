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
var time = questions.length * 1;
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
var scores = document.getElementById("scores");
var timerDiv = document.getElementById("timerdiv");
var timecount = document.getElementById("time");
var allDone = document.getElementById("end-screen");

window.onload = function () {
    timerDiv.style.display = "none";
    allDone.style.display = "none";
    //Remove these comments for a laugh
    //var img = document.createElement("img");
    //img.src = "https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png";
    //var div = document.getElementById("start-screen");
    //div.appendChild(img);
}

//Event listener for Start Quiz button
startBtn.addEventListener("click", startQuiz)

//Function to begin quiz, hide intro page 
function startQuiz() { 
    scores.style.display = "none";    
    startScreen.style.display = "none";
    timerDiv.style.display = "block";
    getQuestion()
    clockTick();
}

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
    } else if (buttonEl.matches(".correct")) {
        currentQuestionIndex++;
        score++;
    }  
    getQuestion();
}

function quizEnd() {
    questionsEl.style.display = "none";
    timerDiv.style.display = "none";
    allDone.style.display = "block";
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = score+"/"+questions.length;
}

function clockTick() {
    setInterval(function countDown(){
    timecount.textContent = time;
    time--;
    if (time <= -1) {
        quizEnd();
        console.log("time is up");
        clearInterval(time);
    }
    },1000);
}

/*
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


//initialsEl.onkeyup = checkForEnter;
*/