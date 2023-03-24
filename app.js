let playerScore = 0;
let computerScore = 0;




const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const resultBanner = document.createElement('div');
const container = document.getElementById('container');

container.appendChild(resultBanner);

    
    function getComputerChoice () {

        // Rock = 0, Paper = 1, Scissors = 2
        return  Math.floor(Math.random() * 3);
    }

    function playRound (playerSelection, computerSelection) {
        
        // result = 0 -> draw , result = 1 -> win, result = 2 -> lose

        const result = (3 + playerSelection - computerSelection) % 3;

        console.log(playerSelection, computerSelection);


        if (result === 1) {

            switch(playerSelection) {
                case 0:
                    resultBanner.textContent = 'You win, Rock beats Scissors';
                    console.log('You win, Rock beats Scissors!');
                    break;
                case 1:
                    resultBanner.textContent = 'You win, Paper beats Rock!';
                    console.log('You win, Paper beats Rock!');
                    break;
                case 2:
                    resultBanner.textContent = 'You win, Scissors beats Paper!';
                    console.log('You win, Scissors beats Paper!');
                    break;
                default:
                    console.log("Error");
            }
            
            return 1;

        }else if (result === 2) {

            switch(playerSelection) {
                case 0:
                    resultBanner.textContent = 'Ai wins, Paper beats Rock!';
                    console.log('Ai wins, Paper beats Rock!');
                    break;
                case 1:
                    resultBanner.textContent = "Ai wins!, Scissors beats Paper!";
                    console.log('Ai wins!, Scissors beats Paper!');
                    break;
                case 2:
                    resultBanner.textContent = "Ai wins!, Rock beats Scissors!";
                    console.log('Ai wins!, Rock beats Scissors!!');
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


    function game () {

        let playerSelection = window.prompt("Enter choice")

        
        return playRound(playerSelection, computerSelection);

    }





rock.addEventListener('click', () => {
    playRound(0, getComputerChoice());
})

paper.addEventListener('click', () => {
     playRound(1, getComputerChoice());
})

scissors.addEventListener('click', () => {
     playRound(2, getComputerChoice());
})


   

