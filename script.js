const input = document.querySelector('input');
const button = document.querySelector('button');
let para = document.querySelector('p');

button.addEventListener('click', () => {
    const num = parseInt(input.value);
    for (let i = 1; i <= num; i++) {
        let sqrtNum = Math.sqrt(i);
        if (sqrtNum !== Math.floor(sqrtNum)) {
            continue;
        } 
        para.textContent += `${i} `;
    }
})