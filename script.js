let timer;
let running = false;
let hours = 0, minutes = 0, seconds = 0;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);

function start() {
  if (!running) {
    timer = setInterval(updateTimer, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function stop() {
  clearInterval(timer);
  running = false;
  hours = minutes = seconds = 0;
  display.textContent = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return (num < 10) ? `0${num}` : num;
}