
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

btnStartEl.addEventListener('click', changeBgColorRandom);
btnStopEl.addEventListener('click', stopChangeBgColor);
let btnIsActive;
function changeBgColorRandom() {
    if (!btnIsActive) {
        btnStartEl.disabled = true;
        btnIsActive = setInterval(() => {
            document.body.style.background = `${getRandomHexColor()}`;
        }, 1000);
    }
};

function stopChangeBgColor() {
    clearInterval(btnIsActive);
    btnIsActive = null;
    btnStartEl.disabled = false;
}