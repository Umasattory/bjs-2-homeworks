const parseCount = (pars) => {
  let parsing = Number.parseFloat(pars, 10)
  if (isNaN(parsing)) {
    throw new Error("Невалидное значение")
  } else {
    return parsing;
  }
};

const validateCount = (pars) => {
  try {
    return parseCount(pars);
  } catch (err) {
    return err;
  }
};

class Triangle {
  constructor(lineA, lineB, lineC) {
    if (lineA > lineB + lineC ||
      lineB > lineA + lineC ||
      lineC > lineA + lineB) {
      throw new Error("Ошибка! Треугольник не существует")
    }
    this.lineA = lineA;
    this.lineB = lineB;
    this.lineC = lineC;
  }
  get perimeter() {
    return this.lineA + this.lineB + this.lineC;
  }

  get area() {
    // p = half of perimeter
    const p = this.perimeter / 2;
    const areaTr = Math.sqrt(p * (p - this.lineA) * (p - this.lineB) * (p - this.lineC));
    return Number(areaTr.toFixed(2));
  }
};

const getTriangle = (lineA, lineB, lineC) => {
  try {
    const triangle = new Triangle(lineA, lineB, lineC);
    return `${triangle.area} \n${triangle.perimeter}`
  } catch (err) {
    return err;
  }
};
console.log("----------------------------------------------");
console.log(validateCount('25jhlk'));
console.log(getTriangle(2, 5, 5));
console.log(getTriangle(5, 7, 9));
console.log("----------------------------------------------");