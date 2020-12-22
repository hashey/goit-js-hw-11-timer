class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._refs = this._getRefs(selector);
    this._targetDate = targetDate;
  }

  _getRefs(root) {
    const refs = {};

    refs.timer = document.querySelector(`${root}`);
    refs.days = document.querySelector(`${root}  [data-value=days]`);
    refs.hours = document.querySelector(`${root} [data-value=hours]`);
    refs.mins = document.querySelector(`${root}  [data-value=mins]`);
    refs.secs = document.querySelector(`${root}  [data-value=secs]`);

    return refs;
  }

  startCountdown() {
    const intervalId = setInterval(() => {
      const time = Date.parse(this._targetDate) - Date.now();
      //========================================================
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      //========================================================
      this._refs.days.innerHTML = days;
      this._refs.hours.innerHTML = hours;
      this._refs.mins.innerHTML = mins;
      this._refs.secs.innerHTML = secs;
      if (time < 0) {
        this._refs.timer.innerHTML = 'Time Is Out';
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

const timerNewYear = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});

timerNewYear.startCountdown();
