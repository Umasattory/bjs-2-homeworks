const parsCount = (pars) => {
  let parsing = Number.parseFloat(pars, 10)
  if (isNaN(parsing)) {
    throw new Error("Невалидное значение")
  } else {
    return parsing;
  }
};

const validateCount = (pars) => {
  try {
    return parsCount(pars);
  } catch (err) {
    console.log(err);
  }
};

class Triangle {
  constructor(lineA, lineB, lineC) {
    this.lineA = lineA;
    this.lineB = lineB;
    this.lineC = lineC;
    if (this.lineA > this.lineB + this.lineC ||
      this.lineB > this.lineA + this.lineC ||
      this.lineC > this.lineA + this.lineB) {
      throw new Error("Ошибка! Треугольник не существует")
    }
  }
  getPerimeter() {
    return this.lineA + this.lineB + this.lineC;
  }

  getArea() {
    // p = half of perimeter
    const p = this.getPerimeter() / 2;
    const areaTr = Math.sqrt(p * (p - this.lineA) * (p - this.lineB) * (p - this.lineC));
    return Number(areaTr.toFixed(2));
  }
}

const getTriangle = (lineA, lineB, lineC) => {
  try {
    const triangle = new Triangle(lineA, lineB, lineC);
    console.log(triangle.getPerimeter());
    console.log(triangle.getArea())
  } catch (err) {
    console.log(err);
  }
};
console.log("----------------------------------------------");
console.log(validateCount('25jhlk'));
console.log(getTriangle(2, 5, 5));
console.log("----------------------------------------------");