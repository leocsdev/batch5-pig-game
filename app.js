/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Initialize necessary variables

// global score
const globalScore = 100;

// buttons 
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

// player names
const p0Name = document.getElementById("name-0");
const p1Name = document.getElementById("name-1");

// player dice roll scores
const p0RollScore = document.getElementById("score-0");
const p1RollScore = document.getElementById("score-1");

// player current scores (when on HOLD)
const p0CurrentScore = document.getElementById("current-0");
const p1CurrentScore = document.getElementById("current-1");

const player0Toggle = document.querySelector(".player-0-panel");
const player1Toggle = document.querySelector(".player-1-panel");