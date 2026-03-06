export const timer = (deadline) => {
    const timerDays = document.querySelector('div.count_1>span');
    const timerHours = document.querySelector('div.count_2>span');
    const timerMinutes = document.querySelector('div.count_3>span');
    const timerSeconds = document.querySelector('div.count_4>span');

    let idInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor((timeRemaining / 60 / 60 / 24));
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if (timeRemaining <= 1) {
            clearInterval(idInterval);
            return { timeRemaining: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
        return { timeRemaining, days, hours, minutes, seconds }
    }

    const addZero = (num) => {
        let strNum = String(num);
        if (strNum.length < 2) {
            strNum = `0${strNum}`;
        }
        return strNum;
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerDays.textContent = addZero(getTime.days);
        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);
    }

    idInterval = setInterval(updateClock, 1000);
}
