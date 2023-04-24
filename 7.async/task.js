class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {

        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

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
            if (item.time == new Date().toLocaleTimeString("ru-Ru", {
                    hour: "2-digit",
                    minute: "2-digit",
                }) && item.canCall == true) {
                    console.log('время запускать коллбэк');
                    item.canCall = false;
                    item.callback();
                }
 
        })        , 1000);

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



// ----- для проверки -----
const callback = f => f;
clock = new AlarmClock();
clock.addClock("21:15", callback);
clock.addClock("12:25", callback);
clock.addClock("11:57", callback);

// clock.addClock("11:30", callback);