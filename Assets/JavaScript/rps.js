let myScoreCount = 0;
let opScoreCount = 0;

function game() { //Function that defines the popular game: Rock, Paper, Scissors!
  let random = (Math.floor(Math.random() * 3) + 1); //Defines variable that selects a random number from 1 to 3. (Otherwise would be 0 to 2 if the "+1" didn't exist).
  let input = document.getElementById('weapon').value;
  let weapon = input.toUpperCase();
  let compChoice = random; //Sets the random number to the computer choice.
  let results = document.getElementById('results');
  let myScore = document.getElementById('myScore');
  let opScore = document.getElementById('opScore');

  switch (compChoice) { //Switch statement in replacement of multiple if/else statements.
    case (1):
      compChoice = "Rock";
      break;
    case (2):
      compChoice = "Paper";
      break;
    case (3):
      compChoice = "Scissors";
      break;
    default:
      alert("Please Check Code!");
  }

  if (input == "") {
    alert("Please Choose Your Weapon.");
    document.getElementById('weapon').innerHTML = "";
    document.getElementById('weapon').style.borderColor = "red";
    return false;

  } else {
    switch (weapon) {
      case ("ROCK"):
        if (compChoice == "Rock") {
          results.innerHTML = "Your Choice: Rock! Computer Choice: Rock! Tie! Try again!";
          results.style.color = "#333";
        } else if (compChoice == "Paper") {
          results.innerHTML = "Your Choice: Rock! Computer Choice: Paper! Computer Wins!";
          results.style.color = "red";
          opScoreCount++;
          opScore.innerHTML = opScoreCount;
        } else {
          results.innerHTML = "Your Choice: Rock! Computer Choice: Scissors! Player Wins!";
          results.style.color = "green";
          myScoreCount++;
          myScore.innerHTML = myScoreCount;
        }
        break;
      case ("PAPER"):
        if (compChoice == "Rock") {
          results.innerHTML = "Your Choice: Paper! Computer Choice: Rock! Player Wins!";
          results.style.color = "green";
          myScoreCount++;
          myScore.innerHTML = myScoreCount;
        } else if (compChoice == "Scissors") {
          results.innerHTML = "Your Choice: Paper! Computer Choice: Scissors! Computer Wins!";
          results.style.color = "red";
          opScoreCount++;
          opScore.innerHTML = opScoreCount;
        } else {
          results.innerHTML = "Your Choice: Paper! Computer Choice: Paper! Tie! Try again!";
          results.style.color = "#333";
        }
        break;
      case ("SCISSORS"):
        if (compChoice == 'Rock') {
          results.innerHTML = "Your Choice: Scissors! Computer Choice: Rock! Computer Wins!";
          results.style.color = "red";
          opScoreCount++;
          opScore.innerHTML = opScoreCount;
        } else if (compChoice == "Paper") {
          results.innerHTML = "Your Choice: Scissors! Computer Choice: Paper! Player Wins!";
          results.style.color = "green";
          myScoreCount++;
          myScore.innerHTML = myScoreCount;
        } else {
          results.innerHTML = "Your Choice: Scissors! Computer Choice: Scissors! Tie! Try again1";
          results.style.color = "#333";
        }
        break;
      default:
        alert("Code error. Debug!");
    }
    return true;
  }
}