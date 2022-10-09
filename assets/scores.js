function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem('savedHighscores')) || [];

/*
  // sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
*/

  for (var i = 0; i < highscores.length; i ++) {
    // create li tag for each high score
    var liTag = document.createElement('li');
    liTag.textContent = highscores[i].name + ' - ' + highscores[i].score + "/5";

    // display on page
    var olEl = document.getElementById('highscores');
    olEl.appendChild(liTag);
  }
}

function clearHighscores() {
  window.localStorage.removeItem('savedHighscores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

// run function when page loads
window.onload = printHighscores();