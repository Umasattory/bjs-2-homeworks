//Задача № 1 ------------------------------------------------------------------------

function cachingDecoratorNew(func) {
   let cache = [];
   function wrapper(...args) {
      const hash = args.join(",");
      let objectInCache = cache.find((item) => item.hash == hash);
      if (objectInCache) {
         console.log("Из кэша: " + objectInCache.value);
         return "Из кэша: " + objectInCache.value;
      }
      let result = func(...args);
      cache.push({
         hash: hash,
         value: result
      });
      if (cache.length > 5) {
         cache.shift()
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
   }
   return wrapper;
}

//Задача № 2 ------------------------------------------------------------------------

function debounceDecoratorNew(func, delay) {
   let timerId = false;
   function wrapper(...args) {
      wrapper.allCount += 1;
      if (timerId == true) {
         timerId == false;
         func.apply(this, args);
         return;
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
         func.apply(this, args);         
         wrapper.count += 1;
      }, delay);
   }
   wrapper.allCount = 0;
   wrapper.count = 0;
   return wrapper
}



//=================================== control block -----------------------------------------------------

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
   console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
   console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000);
