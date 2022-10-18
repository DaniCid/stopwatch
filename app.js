let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let tensDisplay = document.getElementById('tens');
let secondsDisplay = document.getElementById('seconds');

let tens = 00;
let seconds = 00;
let interval;

const startClock = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

const stopClock = () => {
    clearInterval(interval);
}

const resetClock = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    tensDisplay.innerHTML = tens;
    secondsDisplay.innerHTML = seconds;
}

startBtn.addEventListener('click', startClock);
stopBtn.addEventListener('click', stopClock);
resetBtn.addEventListener('click', resetClock);

const startTimer = () => {
    tens++;

    if (tens <= 9) {
        tensDisplay.innerHTML = "0" + tens;
    } 

    if (tens > 9) {
        tensDisplay.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        secondsDisplay.innerHTML = "0" + seconds;
        tens = 0;
        tensDisplay.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
        secondsDisplay.innerHTML = seconds;
    }
}