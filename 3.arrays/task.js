function compareArrays(arr1, arr2) {
  result = arr1.length === arr2.length && arr1.every((el, ind) => el === arr2[ind]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter((nums) => nums > 0)
    .filter((nums) => nums % 3 === 0)
    .map((nums) => nums * 10);
  return resultArr; // array
}