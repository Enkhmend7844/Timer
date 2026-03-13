const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const minutesInput = document.getElementById("minutesInput");

let timeLeft = 0;
let interval = null;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
    if (!interval && timeLeft > 0) {
        interval = setInterval(() => {
            timeLeft--; 
            if (timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(interval);
                interval = null;
            }
            updateTimer();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    let minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes < 0) {
        minutes = 0;
    }
    clearInterval(interval);
    interval = null;
    timeLeft = minutes * 60;
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

timeLeft = Math.max(0, parseInt(minutesInput.value) * 60);
updateTimer();
resetBtn.addEventListener("click", resetTimer);

timeLeft = parseInt(minutesInput.value) * 60;

updateTimer();
