class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `My name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}`);
  }
}

const student = new Student(
  "Abubakar",
  20,
  "Computer Science"
);

const teacher = new Teacher(
  "Amina",
  32,
  "Web Development"
);

student.introduce();
student.study();

teacher.introduce();
teacher.teach();