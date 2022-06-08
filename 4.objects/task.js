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
    this.addMark = mark;
    console.log('Marks: no');
    // добавить первую оценку
  } else {
    Student.prototype.addMarks = function (mark1,...mark3) {
      this.addMarks = mark;
    };
    // добавить вторую и последующие оценки в массив
  }
};
Student.prototype.getAverage = function () {
  this.getAverage = avg;
  let sum = function(mark1,...mark3) { return mark1+mark3 };
  let avg = addmark.reduce(sum)/data.length;
}





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
