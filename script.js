
let choices = ["water", "fire", "grass"];

const water = document.querySelector('#waterButton');
water.addEventListener('click', () => {
    playRound('water');
});

const fire = document.querySelector('#fireButton');
fire.addEventListener('click', () => {
    playRound('fire');
});

const grass = document.querySelector('#grassButton');
grass.addEventListener('click', () => {
    playRound('grass');
});

result = document.querySelector('#result')

let playerScore = 0;
document.getElementById('playerScore').innerHTML = playerScore;
let computerScore = 0;
document.getElementById('computerScore').innerHTML = computerScore;

let computerHealth = document.getElementById("remaininghealth");
let computerHealthTotal = 240;

let playerHealth = document.getElementById("playerRemainingHealth");
let playerHealthTotal = 240;


function playRound(playerSelection) {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];

    if (playerSelection === 'water') {
        if (computerSelection === 'water') {
            result.textContent = 'Its a tie!';
        }

        else if (computerSelection === 'grass') {
            computerScore++;
            result.textContent = 'You lose! Grass beats Water!';
            document.getElementById('computerScore').innerHTML = computerScore;

            playerHealthTotal = playerHealthTotal - 48;
            playerHealth.style.width = playerHealthTotal + "px";
        }

        else if (computerSelection === "fire") {
            playerScore++;
            result.textContent = 'You win! Water beats Fire!';
            document.getElementById('playerScore').innerHTML = playerScore;

            computerHealthTotal = computerHealthTotal - 48;
            computerHealth.style.width = computerHealthTotal + "px";
        }

        if ((playerScore == 5) || (computerScore) == 5) {
            endGame();
        }
    }

    if (playerSelection === 'fire') {
        if (computerSelection === 'grass') {
            playerScore++;
            result.textContent = 'You win! Fire beats Grass!';
            document.getElementById('playerScore').innerHTML = playerScore;

            computerHealthTotal = computerHealthTotal - 48;
            computerHealth.style.width = computerHealthTotal + "px";
        }
        if (computerSelection === 'fire') {
            result.textContent = 'Its a tie!';
        }
        if (computerSelection === "water") {
            result.textContent = 'You lose! Water beats Fire!';
            document.getElementById('computerScore').innerHTML = computerScore;

            playerHealthTotal = playerHealthTotal - 48;
            playerHealth.style.width = playerHealthTotal + "px";
        }

        if ((playerScore == 5) || (computerScore) == 5) {
            endGame();
        }
    }

    if (playerSelection === 'grass') {
        if (computerSelection === 'fire') {
            result.textContent = 'You lose! Fire beats Grass!';
            document.getElementById('computerScore').innerHTML = computerScore;

            playerHealthTotal = playerHealthTotal - 48;
            playerHealth.style.width = playerHealthTotal + "px";
        }
        if (computerSelection === 'water') {
            playerScore++;
            result.textContent = 'You win! Grass beats water!';
            document.getElementById('playerScore').innerHTML = playerScore;

            computerHealthTotal = computerHealthTotal - 48;
            computerHealth.style.width = computerHealthTotal + "px";
        }
        if (computerSelection === "grass") {
            result.textContent = 'Its a tie!';
        }

        if ((playerScore == 5) || (computerScore) == 5) {
            endGame();
        }
    }
    
    return
}

let end = document.querySelector(".end")
endAlert = document.querySelector("#endAlert")

function endGame() {
    if (playerScore == 5) {
        endAlert.textContent = "You won the duel!"
    }
    else {
        endAlert.textContent = "You lost the duel :("
    }

    water.style.pointerEvents = "none"
    fire.style.pointerEvents = "none"
    grass.style.pointerEvents = "none"

    var tryAgain = document.createElement("tryAgain")
    tryAgain.innerHTML = "Try Again?"
    end.appendChild(tryAgain);

    tryAgain.addEventListener('click', () => {
        window.location.reload();
    });

}