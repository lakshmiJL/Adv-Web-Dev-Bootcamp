"use strict";

class Game {
    constructor() {
        this.score = 0;
        this.gameOver = false;
        this.init();
    }

    init() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
        console.log("Game initialized.");
        this.updateScore();
    }

    static welcome() {
        console.log("Welcome to the Game!");
    }

    handleKeyPress(event) {
        if (!this.gameOver) {
            if (event.key === "ArrowUp") {
                this.score++;
                this.updateScore();
            } else if (event.key === "Escape") {
                this.gameOver = true;
                this.displayGameOver();
            }
        }
    }

    updateScore() {
        document.getElementById("score").innerText = `Score: ${this.score}`;
    }

    displayGameOver() {
        const gameOverMessage = document.createElement("div");
        gameOverMessage.innerText = "Game Over!";
        gameOverMessage.style.fontSize = "24px";
        gameOverMessage.style.color = "red";
        document.body.appendChild(gameOverMessage);
    }
}

function hoistedFunction() {
    console.log("This function is hoisted and can be called before its declaration.");
}

let myGame = new Game();
Game.welcome();
hoistedFunction();
