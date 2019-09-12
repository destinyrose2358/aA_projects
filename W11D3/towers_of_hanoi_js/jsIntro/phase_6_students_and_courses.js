function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
}

Student.prototype.name = function () {
  return this.fName + " " + this.lName;
};

Student.prototype.enroll = function (course) {
  if (this.hasConflict(course)) {
    throw "This student has no time for that class"
  };
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.addStudent(this);
  };
};

Student.prototype.hasConflict = function (course) {
  return this.courses.some((enrolled) => {
    return course.conflictsWith(enrolled)
  });
};

Student.prototype.courseLoad = function () {
  let credit = {};
  this.courses.forEach(course => {
    credit[course.department] = credit[course.department] ? credit[course.department] + course.credits : course.credits;
  }); 
  return credit
};

function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
};

Course.prototype.addStudent = function (student) {
  if (!this.students.includes(student)) {
    student.enroll(this);
    this.students.push(student);
    
  };
};

Course.prototype.conflictsWith = function (course) {
  if (this === course) {
    return false
  }
  if (this.block !== course.block) {
    return false;
  } else if (this.days.some((el) => {return course.days.includes(el)})) {
    return true
  }
};

let josh = new Student("Josh", "Gordon");
let marylyn = new Student("Marylyn", "Class");

let bio = new Course("Bio 101", "Science", 3, ["mon", "wed", "fri"], 2);
let theo = new Course("Theology 102", "Lit", 3, ["tues", "thurs"], 3);
let english = new Course("English 101", "Lit", 2, ["mon", "tues", "thurs"], 2);
