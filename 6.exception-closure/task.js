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
      throw new Error("Треугольник с такими сторонами не существует")
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
    return Number(areaTr.toFixed(3));
  }
};

const getTriangle = (lineA, lineB, lineC) => {
  try {
    return new Triangle(lineA, lineB, lineC)
  } catch (err) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
};