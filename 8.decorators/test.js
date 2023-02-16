const testFun = (a, b) => {
   const c = a + b;
   console.log(c)
};

function debonceTester(func, delay) {
   let timerID;
   return function (...args) {
      clearInterval(timerID)
      timerID=setTimeout(() => {
         func.apply(this, args)
      }, delay);
   }
// return wrapper
}

const appleDeb = debonceTester(testFun, 500);

appleDeb(2,2)

setTimeout(() => {
   appleDeb(4,4)
}, 600);
/*
setTimeout(() => {
   appleDeb(3,3)
}, 2300);

setTimeout(() => {
   appleDeb(5,5)
}, 2500);*/
