let playerScore = 0;
let computerScore = 0;




const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const resultBanner = document.createElement('h1');
const container = document.getElementById('result');
const reset = document.getElementById('resetButton');







container.append(resultBanner);

    //function to show the "play again button"
    function showReset () {
        reset.style.visibility = 'visible';
    }

    // resets the score of the game, hides the "play again" button and clears the text in the result banner
    function resetGame () {
        playerScore = 0;
        computerScore = 0;
        reset.style.visibility = 'hidden';
        resultBanner.textContent = '';
        
        updateScore();
    }

    // a function to track the score of the player and the computer
    function updateScore (result) {


        if (result === 1) {
            playerScore++;
        }

        if (result === 2) {
            computerScore++;
        } 

        const playerTracker = document.getElementById('playerScore');
        const computerTracker = document.getElementById('computerScore');

        playerTracker.textContent = `Player: ${playerScore}`;
        computerTracker.textContent = `Computer: ${computerScore}`;

        
        if (playerScore || computerScore === 5 ) {
            
            if (playerScore === 5) {
                resultBanner.textContent = 'Game over! Congratulations, you win!';
                showReset();

            } else if (computerScore === 5) {
                resultBanner.textContent = 'Game over! Ai wins! Try again next time';
                showReset();

            }
        
        }
 
    }

    // generates a random computer choice between 0 to 2 

    function getComputerChoice () {

        // Rock = 0, Paper = 1, Scissors = 2
        return  Math.floor(Math.random() * 3);
    }

    // plays a round of rock, paper, scissors based on the player's choice
    function playRound (playerSelection, computerSelection) {
        
        // result = 0 -> draw , result = 1 -> win, result = 2 -> lose

        const result = (3 + playerSelection - computerSelection) % 3;

        console.log(playerSelection, computerSelection);


        if (result === 1) {

            switch(playerSelection) {
                case 0:
                    resultBanner.textContent = 'You win, Rock beats Scissors';
                    break;
                case 1:
                    resultBanner.textContent = 'You win, Paper beats Rock!';
                    break;
                case 2:
                    resultBanner.textContent = 'You win, Scissors beats Paper!';
                    break;
                default:
                    console.log("Error");
            }

             return 1;

        }else if (result === 2) {

            switch(playerSelection) {
                case 0:
                    resultBanner.textContent = 'Ai wins, Paper beats Rock!';
                    break;
                case 1:
                    resultBanner.textContent = "Ai wins, Scissors beats Paper!";
                    break;
                case 2:
                    resultBanner.textContent = "Ai wins, Rock beats Scissors!";
                    break;
                default:
                    console.log("Error");
            }

            return 2;

        } else {
            console.log("Draw");
            return 0;
        }


    }

    function getWinner () {

        

    }



rock.addEventListener('click', () => {
    let result = playRound(0, getComputerChoice());
    updateScore(result);

})

paper.addEventListener('click', () => {
     let result = playRound(1, getComputerChoice());
    updateScore(result);

})

scissors.addEventListener('click', () => {
     let result = playRound(2, getComputerChoice());
    updateScore(result);

})

reset.addEventListener('click', () => {
    resetGame();
})


   

