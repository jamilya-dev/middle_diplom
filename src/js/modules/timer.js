const timer = (dedline, timerId) => {
  const timerItem = document.getElementById(timerId);

  const timerDays = timerItem.querySelector('.count_1 > span');
  const timerHours = timerItem.querySelector('.count_2 > span');
  const timerMinutes = timerItem.querySelector('.count_3 > span');
  const timerSeconds = timerItem.querySelector('.count_4 > span');

  let intervalId;

  const getTimeRemaining = () => {
    const dateStop = new Date(dedline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;

    let days;
    let hours;
    let minutes;
    let seconds;

    Math.floor(timeRemaining / 60 / 60 / 24).toString().length === 1 ? (days = `0${Math.floor(timeRemaining / 60 / 60 / 24)}`) : (days = Math.floor(timeRemaining / 60 / 60 / 24));

    Math.floor((timeRemaining / 60 / 60) % 24).toString().length === 1 ? (hours = `0${Math.floor((timeRemaining / 60 / 60) % 24)}`) : (hours = Math.floor(timeRemaining / 60 / 60) % 24);

    Math.floor((timeRemaining / 60) % 60).toString().length === 1 ? (minutes = `0${Math.floor((timeRemaining / 60) % 60)}`) : (minutes = Math.floor((timeRemaining / 60) % 60));

    Math.floor(timeRemaining % 60).toString().length === 1 ? (seconds = `0${Math.floor(timeRemaining % 60)}`) : (seconds = Math.floor(timeRemaining % 60));
    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();
    timerDays.textContent = getTime.days;
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(intervalId);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };
  updateClock();
  intervalId = setInterval(updateClock, 1000);
};

export default timer;
