export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  myInterval: null,
  startTimer() {
    this.myInterval = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, 0)}`;
  },
  stopTimer() {
    clearInterval(this.myInterval);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.startTimer();
// setInterval(() => {
//   console.log(timer.getTime());
// }, 2000);

// setInterval(() => {
//   timer.stopTimer();
// }, 8000);
// // setInterval(() => {
// //   console.log(timer.resetTimer());
// // }, 5000);

// setInterval(() => {
//   timer.startTimer();
// }, 12000);
