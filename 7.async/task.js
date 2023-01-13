class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  };

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("Параметр ID будильника не передан!");
    }

    const addOneAlarm = this.alarmCollection.some((element) => element.id === id);

    if (addOneAlarm == true) {
      console.error("Будильник с таким ID уже существует, смените идентификатор. Отменено!");

    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  };
  removeClock(id) {
    const remover = this.alarmCollection.findIndex(item => item.id == id);
    if (remover !== -1) {
      this.alarmCollection.splice(remover, 1);
      console.log(`Alarm bell with id ${id} was deleted`);
      return true;
    } else {
      console.log("Ther`re not any bells for delete");
      return false;
    }
  };

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru", { hour: '2-digit', minute: '2-digit' });
  };

  start() {
    const checkClock = (bell) => {
      if (this.getCurrentFormattedTime() == bell.time) {
        bell.callback();
      }
    }
    if (this.timerId == null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((item) => checkClock(item))
      }, 1000);
    }
  };

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  printAlarms() {
    this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} Заведен на ${item.time}`));
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };

};

console.log("__________________________________________________________");

const testCase = () => {
  const alarm = new AlarmClock
  alarm.addClock("18:00", () => console.log("Пора просыпаться"), 1);
  alarm.addClock("18:01", () => console.log("Сильно опаздываем"), 2);
  alarm.start();
  setTimeout(() => {
    alarm.stop()
  }, 1500);
  alarm.addClock("18:03", () => console.log("Поздняк метаться, СПИ!"), 3);
  setTimeout(() => {
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms();
  }, 1800);

  //  ------------------------------------------------------------------------- //
  console.log("__________________________________________________________");

  alarm.printAlarms();
  alarm.removeClock(1);
  alarm.printAlarms();
  console.log(alarm.getCurrentFormattedTime());

  console.log("__________________________________________________________");
  //  ------------------------------------------------------------------------- //

}

testCase()