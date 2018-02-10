//Sets the jshint to ECMAScript 2015
/*jshint esversion: 6 */

// Jquery to handle the animations in the very beginning.
$(document).ready(function () {
  $('#txt1').fadeIn(3000);

  setTimeout(function(){
    $('#txt2').fadeIn(3000);
  }, 3000);
  
  setTimeout(() => {
    $('#txt3').fadeIn(3000);
    $('#txt2').hide(3000);  
    $('#txt1').hide(3000);
  }, 6000);

  setTimeout(() => {
    $('#txt3').hide(3000);
  }, 7000);

  setTimeout(() => {
    $('#test').fadeIn(3000);
  }, 10000);

});
// Setting objects to manipulate.
let player = {
  health: 100,
  power: 20
};

let opponent = {
  health: 100,
  power: 20
};
// Function to initiate the attack for both players.
const attack = () => {
  let attackBtn = document.getElementById('btn');
  let restart = document.getElementById('restart');
  let gameMsg = document.getElementById('message');
  let playerAttack = determineAttack(player.power);
 opponent.health -= playerAttack;
 printToScreen();

 // A check to see if opponent's health reach 0 before yours.
 if(isGameOver(opponent.health)) {
  cHealth.innerText = "0";
  endGame("You Are The Winner!");
   return;
 }

 attackBtn.disabled = true;
 gameMsg.innerText = "Opponent Is About To Strike!";

 //Set time out to give opponent a chance to attack without you attacking at the same time.
 setTimeout(() => {
  let opAttack = determineAttack(opponent.power);
  player.health -= opAttack;
  printToScreen();

  //Check to see if player's health reaches 0 before the opponent's.
  if(isGameOver(player.health)) {
    pHealth.innerText = "0";
    endGame("You Are A Loser!");
  
    return;
  }

  attackBtn.disabled = false;
  gameMsg.innerText = "Your Turn To Deliver!";
 }, 1500);
};

//This function delivers the messages needed when someone's health equals 0.
const endGame = (message) => {
  document.getElementById('message').innerText = message;
  document.getElementById('btn').hidden = true;
  document.getElementById('restart').hidden = false;
};

//This function fires when someone's health equals 0 and you want to play again. This will reset everyting just like the beginning.
const restartGame = () => {
  player.health = 100;
  opponent.health = 100;
  let attackBtn = document.getElementById('btn');
  document.getElementById('message').innerText = "";
  attackBtn.disabled = false;
  attackBtn.hidden = false;
  document.getElementById('restart').hidden = true;
  attackBtn.disabled = false;
  printToScreen();
};

//Basic function that creates a random number that will then be multiplied by the character's power.
const determineAttack = (power) => {
  return Math.floor(Math.random() * power);
};

// A check to see if the game is over.
const isGameOver = (health) => {
  return health <= 0;
};

// Basic function that just prints the health values to the screen throughout application.
const printToScreen = () => {
  document.getElementById('cHealth').innerText = opponent.health;

  document.getElementById('pHealth').innerText = player.health;
};
printToScreen();