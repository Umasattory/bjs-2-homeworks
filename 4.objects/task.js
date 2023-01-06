function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]
  } else {
    this.marks.push(mark)
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks === []
  } else {
    this.marks.push(...marks)
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  avg = sum / this.marks.length;
  return this.avg = avg.toFixed(2);
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
};

console.log()

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')

console.log(student1);
console.log(student2);

const student3 = new Student("Сатторов Умед", "male", 25);
student3.setSubject("Geometry");
student3.setSubject("English");
student3.addMark(5);
student3.addMarks(3, 3, 4, 5, 4);
student3.getAverage();
//student1.exclude("low grades");

console.log(student3);
console.log(student3.getAverage());
console.log(student3.getAverage());
console.log(student3.getAverage())