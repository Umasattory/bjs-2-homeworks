// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    //min = Math.min(...arr);
    //max = Math.max(...arr);
    //max = Math.max.apply(null, arr);
    //min = Math.min.apply(null, arr);
    sum += arr[i];
    avg = sum / arr.length;
    avg = Math.round(avg * 100) / 100;
  };
  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let differ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    differ = Math.abs(max - min);
  }
  return differ;
}
