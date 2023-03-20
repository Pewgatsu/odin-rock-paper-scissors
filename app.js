    function getComputerChoice () {

        // Rock = 0, Paper = 1, Scissors = 2


        return Math.floor(Math.random() * 3);
    }

    function playRound (playerSelection, computerSelection) {
        
        // result = 0 -> draw , result = 1 -> win, result = 2 -> lose

        if (playerSelection.toLowerCase() === "rock") {
            playerSelection = 0;
            playerWin = "You win, Rock beats Scissors!";
            playerLose = "Computer wins, Paper beats Rock!";
        }else if (playerSelection.toLowerCase() === "paper") {
            playerSelection = 1;
            playerWin = "You win, Paper beats Rock!";
            playerLose = "Computer wins, Scissors beats Paper!";
        }else if (playerSelection.toLowerCase() === "scissors") {
            playerSelection = 2;
            playerWin = "You win, Scissors beats Paper!";
            playerLose = "Computer wins, Rock beats Paper!";
        }else {
            return "Error";
        }

        const result = (3 + playerSelection - computerSelection) % 3;

        

        if (result === 1) {
            console.log(playerWin);
            return 1;
        }else if (result === 2) {
            console.log(playerLose)
            return 2;
        } else {
            console.log("Draw");
            return 0;
        }


    }


    function game () {

        let playerSelection = window.prompt("Enter choice")

        const computerSelection = getComputerChoice();
        

        return playRound(playerSelection, computerSelection);

    }
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0 ; i < 5 ; i++){
        
        

        let outcome = game();

        if( outcome === 1) {
            playerScore = playerScore + 1;
        }else if (outcome === 2) {
            computerScore = computerScore + 1;
        }

        console.log("Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore);

    }

    if (playerScore > computerScore ) {
        console.log("Player wins out of 5 games!");
    }else if (playerScore < computerScore) {
        console.log("Computer wins out of 5 games!")
    }else if (playerScore === computerScore) {
        console.log("DRAW!!");
    }

   

