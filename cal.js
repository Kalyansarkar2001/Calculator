const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            display.textContent = eval(display.textContent);
        } else if (value === 'CE') {
            display.textContent = '';
        } else if (value === '%') {
            display.textContent = eval(display.textContent) / 100;
        } else {
            display.textContent += value;
        }
    });
});