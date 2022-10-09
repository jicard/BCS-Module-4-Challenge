function printHighscores() {
  //Gets scores from storage, or sets empty array
  var highscores = JSON.parse(window.localStorage.getItem('savedHighscores')) || [];

  for (var i = 0; i < highscores.length; i ++) {
    //Create li element for each score in localstorage
    var liTag = document.createElement('li');
    liTag.textContent = highscores[i].name + ' - ' + highscores[i].score + "/5";

    //Display each li on page
    var ulEl = document.getElementById('highscores');
    ulEl.appendChild(liTag);
  }
}

//Function and onclick event to clear scores from localstorage
function clearHighscores() {
  window.localStorage.removeItem('savedHighscores');
  window.location.reload();
}
document.getElementById('clear').onclick = clearHighscores;

//Run this logic on page load
window.onload = printHighscores();