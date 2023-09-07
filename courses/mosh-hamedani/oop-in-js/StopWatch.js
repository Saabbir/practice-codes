/**
 * Exercise - Stop Watch
 * @constructor
 */

function StopWatch() {
  let intervalId;
  let running = false;

  this.duration = 0;

  this.start = () => {
    if (running) {
      throw new Error("Stopwatch already started");
    }
    running = true;
    intervalId = setInterval(() => {
      this.duration = this.duration + 1;
    }, 1);
  };

  this.stop = () => {
    if (running) {
      clearInterval(intervalId);
      running = false;
    } else {
      throw new Error("Stopwatch is not running!");
    }
  };

  this.reset = () => {
    this.duration = 0;
    running = false;
  };
}
