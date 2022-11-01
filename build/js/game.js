export default class Game{
    constructor(){
        this.active = false;
        this.playerScore = 0;
        this.computerScore = 0;
    }

    getActiveStatus(){
        return this.active;
    }
    startGame () {
        this.active = true;
    }
    endGame () {
        this.active = false;
    }
    getPlayerScore(){
        return this.playerScore;}
    
    getComputerScore() { 
        return this.computerScore;}
    
    plWins() {
        this.playerScore += 1;
    }

    cpWins() {
        this.computerScore += 1;
    }

    showScore(){
        console.log(this.playerScore);
        console.log(this.computerScore);
    }
}
