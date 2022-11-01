import Game from "./game.js";

const myGame = new Game();
let plOption;
let cmOption;
const initApp = () => {
  stopReload();
  playerOption();
  swapButtons();
  clearResult();
  playAgain();
};

document.addEventListener("DOMContentLoaded", initApp);

const stopReload = () => {
  const lock = document.getElementById("lock__btn");
  lock.addEventListener("click", (event) => {
    event.preventDefault();
  });
};

const playerOption = () => {
  const btn = document.getElementById("lock__btn");
  const radio = document.querySelectorAll('input[name="player__option"]');
  btn.addEventListener("click", () => {
    radio.forEach(function(i){
      if (i.checked) {
        plOption = i.value;
      } else {
        i.setAttribute("disabled", "true")
      }
    });
    checkPlOption(plOption);
  });
  return plOption;
};

const checkPlOption =(plOption)=> { 
  if (plOption===undefined){
    alert("Select an option you illiterate mf");
  } else{
    computerOption();
  }
}

const computerOption =() => {
    const options = ["ROCK","PAPER","SCISSORS"];
    let index = Math.floor(Math.random()*3);
    cmOption = options[index];
    const input = document.getElementById("computer__option");
    input.textContent=cmOption;
    gameResult(plOption,cmOption);
}

const gameResult =(pl,cm)=> {
    let result = (pl===cm)? "Tie Match"
    : (pl==="ROCK" && cm==="SCISSORS")? "Player Wins"
    : (pl==="PAPER" && cm==="ROCK")? "Player Wins"
    : (pl==="SCISSORS" && cm==="PAPER")? "Player Wins"
    : "Computer Wins"
    const form__result = document.getElementById("game__result");
    form__result.textContent=result;
    (result === "Player Wins")?myGame.plWins()
    :(result=== "Computer Wins")?myGame.cpWins()
    : myGame.showScore();
    ScoreboardUpdate();
}

const swapButtons =() => {
    const lock = document.getElementById("lock__btn");
    const reset = document.getElementById("reset__btn");
    lock.addEventListener("click",()=>{
      lock.setAttribute("hidden","true");
      reset.removeAttribute("hidden");
    })
    reset.addEventListener("click",()=>{
      reset.setAttribute("hidden","true");
      lock.removeAttribute("hidden");
    })
}

const ScoreboardUpdate=()=>{
  const setPlayerScore = document.getElementById("player__score");
  const setComputerScore = document.getElementById("computer__score");
  let getComputerScore = myGame.getComputerScore();
  let getPlayerScore = myGame.getPlayerScore();
  setComputerScore.textContent=getComputerScore;
  setPlayerScore.textContent=getPlayerScore;
}

const playAgain=()=>{
  const btn = document.getElementById("reset__btn");
    const radio = document.querySelectorAll('input[name="player__option"]');
    btn.addEventListener("click", () => {
      radio.forEach(function(i){
          i.removeAttribute("disabled");
      });
    })
}

const clearResult=()=>{
  const btn = document.getElementById("reset__btn");
  const cpOption = document.getElementById("computer__option");
  const result = document.getElementById("game__result");
  btn.addEventListener("click", ()=>{
    plOption=undefined;
    cpOption.textContent="...";
    result.textContent = "...";
  })
}