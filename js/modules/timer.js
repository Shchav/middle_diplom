export const timer = (deadline) => {

    // На странице несколько таймеров, как минимум 2
    const timerDays = document.querySelectorAll('div.count_1>span');
    const timerHours = document.querySelectorAll('div.count_2>span');
    const timerMinutes = document.querySelectorAll('div.count_3>span');
    const timerSeconds = document.querySelectorAll('div.count_4>span');

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

    const updateTimer = (arr, value) => {
        arr.forEach(elem => {
            elem.textContent = value;
        })
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        updateTimer(timerDays, addZero(getTime.days))
        updateTimer(timerHours, addZero(getTime.hours))
        updateTimer(timerMinutes, addZero(getTime.minutes))
        updateTimer(timerSeconds, addZero(getTime.seconds))
    }

    idInterval = setInterval(updateClock, 1000);
}
