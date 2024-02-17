const playerChoice = document.getElementById('options');
const result = document.querySelector('.result');
const stats = document.querySelector('.statistics');
let counter = 1;

playerChoice.addEventListener('click', () => {
    result.firstElementChild.textContent = 'Round';
    result.lastElementChild.textContent = counter;
    result.classList.remove('hidden');

    if (counter === 5) {
        alert('Game Over');
    }

    counter++;

})


