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

/* Задача № 1 -------------------------------  с md5 задача не выполняется (тестоввую страничку не проходит)
function cachingDecoratorNew(func) {
   const cache = [];
   function wrapper(...args) {
      const hash = md5(args);
      const objectInCache = cache.find((item) => item.hash == hash);
      if (objectInCache) {
         console.log("Из кэша " + objectInCache.value);
         return "Из кэша " + objectInCache.value;
      }
      const result = func(...args)
      cache.push({
         hash: md5(args),
         value: result
      })
      if (cache.length > 5) {
         cache.shift()
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result
   }
   return wrapper;
}
*/ // ------------------------------------------------------------------------

//Задача № 2
function debounceDecoratorNew(func, delay) {
   let firstRunFlag = true;
   let timerId;
   return function (...args) {
      if (firstRunFlag) {
         firstRunFlag = false;
         func.apply(this, args);
         return;
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
         func.apply(this, args)
      }, delay);
   }
}

// Задача № 3 ----------------------------------------------------------------

/*
function debounceDecorator2(func) {
   function wrapper(...args) {
      wrapper.allcount ++;
      func.call(this,...args);      
      wrapper.count ++;
   }
   wrapper.count = 0;
   wrapper.allcount = 0;
   return wrapper
};
*/


/*
function debounceDecorator2(func) {
   let timerId;
   function wrapper(...args) {
      if (timerId) {
         wrapper.count=1;
         wrapper.allCount=1;
         func.apply(this, ...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => timerId = null, 0);
      wrapper.allCount++;
      wrapper.count++
   }
   return wrapper;
}
*/
