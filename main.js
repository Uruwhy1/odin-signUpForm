// COLOR CHANGE WHEN FOCUSING ON INPUT
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focused');
            input.style.borderColor = 'var(--focus-color)';

            const siblingSvg = input.previousElementSibling;
            siblingSvg.style.stroke = 'var(--focus-color)'

        });


        input.addEventListener('blur', () => {
            input.checkValidity() ? handleValidInput(input) : handleInvalidInput(input)
        });
    });
});

function handleValidInput(input) {
    const prevSvg = input.previousElementSibling;
    prevSvg.style.stroke = 'var(--correct-color)';

    input.classList.remove('focused');
    input.style.borderColor = 'var(--correct-color)';

}

function handleInvalidInput(input) {

    const prevSvg = input.previousElementSibling;
    prevSvg.style.stroke = 'var(--wrong-color)';

    input.classList.remove('focused');
    input.style.borderColor = 'var(--wrong-color)';


}