function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  // Ваш код
}

Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
  // ваш код
};

Student.prototype.addMark = function (mark) {
  
  if (this.marks === undefined) {
    this.marks = mark;
    // добавить первую оценку
  } else {
    Student.prototype.addMarks = function (...marks) {
      this.marks.push(...marks);
    };
    // добавить вторую и последующие оценки в массив
  }
};
Student.prototype.getAverage = function () {
  let sum = marks.reduce(function(a, b) { return a + b; }, 0);
  let average = addmark.reduce(sum)/this.marks.length;
  this.getAverage = average;
}
Student.prototype.exclude = function(reason) {
  if (average > 2) {
    console.log ('ok')
  } else {
    this.exclude = reason;
  }
};





// ваш код для остальных методов
const student1 = new Student('Tony', 'male', 37);
student1.setSubject('Algebra');
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); // 4.666666666666667
console.log(student1);

//{age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
const student2 = new Student('Buzz', 'female', 35);
student2.setSubject('Geometry');
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades');
console.log(student2);
//{name: "Buzz", gender: "female", age: 35, excluded: "low grades"}
