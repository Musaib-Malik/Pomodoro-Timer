// UI Variables
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");

// Local Variables
let second = 00;
let minute = 25;
let startPause = 0;

// Event Handler
startBtn.addEventListener("click", startTimer);
restartBtn.addEventListener("click", restartTimer);

// Start Timer
function startTimer() {
  document.querySelector('audio').play()

  if (startPause === 0) {
    startBtn.textContent = "Pause";

    startPause = setInterval(() => {
      second--;
      if (second < 0) {
        second = 59;
        minute--;
      }
      if (minute == 0 && second == 0) {
        second = "00";
        minute = "00";
        alert("Timeout!");
        clearInterval(startPause);
      }
      seconds.textContent = second;
      minutes.textContent = minute;
    }, 1000);
  } else {
    document.querySelector('audio').pause()
    clearInterval(startPause);
    startBtn.textContent = "Resume";
    startPause = 0;
  }
}

// Restart Timer
function restartTimer() {
  window.location.reload();
}