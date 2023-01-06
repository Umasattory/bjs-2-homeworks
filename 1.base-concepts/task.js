"use strict"
function solveEquation(a, b, c) {
  let arr, discrimCount, sqr0, sqr1, sqr2;
  discrimCount = b ** 2 - 4 * a * c;
  sqr0 = (-b / 2 * a)
  sqr1 = (-b + Math.sqrt(discrimCount)) / (2 * a)
  sqr2 = (-b - Math.sqrt(discrimCount)) / (2 * a)
  if (discrimCount > 0) {
    arr = [sqr1, sqr2];
  } else if (discrimCount === 0) {
    arr = [sqr0];
  } else {
    arr = [];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"

  if (isNaN(percent)) {
    return (`Не корректное значение параметра "Процентная ставка" "${percent}"`);
  }
  if (isNaN(contribution)) {
    return (`Не корректное значение параметра "Первоначальный взнос" "${contribution}"`)
  }
  if (isNaN(amount)) {
    return (`Не корректное значение параметра "Общая стоимость" "${amount}"`)
  }

  let months;
  months = (date.getFullYear() - today.getFullYear()) * 12;
  months -= today.getMonth();
  months += date.getMonth();
  months <= 0 ? 0 : months;

  const p = percent / (100 * 2);
  const monthPay = creditBody * (p + (p / ((Math.pow((1 + p) ** months) - 1))));

  //Определение количества месяцев
  today = new Date();
  monthes = (date.getFullYear() - today.getFullYear()) * 12;
  monthes -= today.getMonth();
  monthes += date.getMonth();
  monthes <= 0 ? 0 : monthes;

  //Определение ежемесячной платы
  p = percent / (100 * 12);
  monthPay = loanBody * (p + (p / (((1 + p) ** monthes) - 1)));
  totalAmount = Math.round((monthPay * monthes) * 100) / 100;
  console.log(totalAmount)
  return totalAmount;
}	