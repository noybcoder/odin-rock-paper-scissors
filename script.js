const playerChoice = document.getElementById('options');
const result = document.querySelector('.result');
const stats = document.querySelector('.statistics');
const playerOption = document.querySelector('.player > .choice');
const computerOption = document.querySelector('.computer > .choice');
const playerScore = document.querySelector('.player .score');
const computerScore = document.querySelector('.computer .score');

let round = 0;


function getComputerChoice() {
    const CHOICES = ['⛰️', '📄', '✂️'];
    let random = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[random];
}

function playRound() {
    if (playerOption.innerText === computerOption.innerText) {
        result.firstElementChild.textContent = 'It\'s a tie!';
        result.lastElementChild.textContent = `Both you and CPU chose ${playerOption.innerText}`;
    } else if (
        (playerOption.innerText === '⛰️' && computerOption.innerText === '✂️') ||
        (playerOption.innerText === '📄' && computerOption.innerText === '⛰️') ||
        (playerOption.innerText === '✂️' && computerOption.innerText === '📄')) 
    {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        result.firstElementChild.textContent = 'You win!';
        result.lastElementChild.textContent = `${playerOption.innerText} beats ${computerOption.innerText}.`;
    } else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        result.firstElementChild.textContent = 'You lose...';
        result.lastElementChild.textContent = `${computerOption.innerText} beats ${playerOption.innerText}.`;
    }    
}

playerChoice.addEventListener('click', event => {
    if (parseInt(playerScore.textContent) < 5 && parseInt(computerScore.textContent) < 5) {
        if (event.target !== event.currentTarget) {playerOption.innerText = event.target.innerText;}
        computerOption.innerText = getComputerChoice();
    
        result.classList.remove('hidden');
    
        playRound();
        stats.classList.remove('hidden');
    
    } else {
        alert('game over');
    }

   
})