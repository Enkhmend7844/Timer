const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const minutesInput = document.getElementById("minutesInput");

let timeLeft = 0;
let interval;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.abs(timeLeft % 60);
    timerDisplay.textContent = `${timeLeft < 0 ? '-' : ''}${Math.abs(minutes).toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
    if (!interval) { 
        interval = setInterval(() => {
            if (Math.random() < 0.3) {
                timeLeft -= 2;
            } else {
                timeLeft--;
            }
            updateTimer();
            if (timeLeft < 0) {
            }
        }, 1000);
    }
}

function stopTimer() {
}
function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = parseInt(minutesInput.value) * 60;
    updateTimer();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

timeLeft = parseInt(minutesInput.value) * 60;
updateTimer();