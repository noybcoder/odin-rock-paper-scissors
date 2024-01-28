function getComputerChoice() {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randIndex];
}

function getPlayerChoice() {
    let choice = prompt('Please choose from \"Rock\", \"Paper\", or \"Scissors\":');
    rePattern = new RegExp('rock|paper|scissors', 'i');
    choice.match(rePattern) ??
        alert(`You have entered an invalid choice: ${choice}. Please try again.`);
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}

function playRound(playerChoice, computerChoice, playerScore=0, computerScore=0) {
    alert(`You choice: ${playerChoice}\n Computer's choice: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        alert('It\'s a tie.');
    } else if(
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper'))
    {
        ++playerScore;
        alert(`You Win! ${playerChoice} beats ${computerChoice}.`);
    } else {
        ++computerScore;
        alert(`You Lose! ${computerChoice} beats ${playerChoice}.`);
    }

    return [playerScore, computerScore];
}

function game() {
    let rounds = 5;
    let playerScore = 0, computerScore = 0;

    while (rounds > 0) {
        [playerScore, computerScore] =
            playRound(
                getPlayerChoice(), getComputerChoice(), playerScore, computerScore
            );
        --rounds;
    }
    alert(`Your score: ${playerScore}\n Computer's score: ${computerScore}.`);
    (playerScore > computerScore)? alert('You are the winner!'): alert('You are the loser!');
}