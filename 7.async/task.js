class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {

        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some((elem) => time === elem.time)) {
            console.warn('Уже присутствует звонок на это же время');
        }                                                            //существуютли звонки с таким же временем

        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(f => f.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId !== null) {
            return;
        };
        
        this.intervalId = setInterval(() => this.alarmCollection.forEach((item, index) => {
            if (item.time == this.getCurrentFormattedTime() && item.canCall == true) {
                    item.canCall = false;
                    item.callback();
                }
        }) , 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item, index) => item.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}