// prototype

// constructor function

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person1.prototype.greet = function(){
//     console.log("hello,world")
// }
// var person1 = new Person("john",20)


// console.log(person1.name);
// person1.greet();


// console.log(person1.name);
// console.log(person1._proto_ === Person.prototype)




// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   const person2 = new Person("Rajesh", 25);
//   person2.greet(); // Output: Hello, my name is Rajesh and I am 25 years old.


// class

// class Person {
//     walk() {
//         console.log("Person walks");
//     }
// }

// class John extends Person {
//     walk() {
//         console.log("John walks");
//     }
    
//     speaks() {
//         console.log("John speaks");
//     }
// }

// const person1 = new John();

// person1.speaks(); // Output: John speaks
// person1.walk();   // Output: John walks

// class person
// name age section class 
// student 
// teacher 

//toString baat


// class Person {
//     constructor(name, age, section) {
//         this.name = name;
//         this.age = age;
//         this.section = section;
//     }

//     toString() {
//         return `Name: ${this.name}, Age: ${this.age}, Section: ${this.section}`;
//     }
// }

// class Student extends Person {
//     constructor(name, age, section, studentId) {
//         super(name, age, section);
//         this.studentId = studentId;
//     }

//     toString() {
//         return `${super.toString()}, Student ID: ${this.studentId}`;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, section, subject) {
//         super(name, age, section);
//         this.subject = subject;
//     }

//     toString() {
//         return `${super.toString()}, Subject: ${this.subject}`;
//     }
// }


// const student = new Student("Rajesh", 16, "A", "S123");
// const teacher = new Teacher("Mr. Smith", 40, "A", "Mathematics");

// console.log(student.toString());
// console.log(teacher.toString());

//toObject baat
// class Person {
//     constructor(name, age, section) {
//         this.name = name;
//         this.age = age;
//         this.section = section;
//     }

//     toObject() {
//         return {
//             name: this.name,
//             age: this.age,
//             section: this.section
//         };
//     }
// }

// class Student extends Person {
//     constructor(name, age, section, studentId) {
//         super(name, age, section);
//         this.studentId = studentId;
//     }

//     toObject() {
//         return {
//             ...super.toObject(),  // Spread operator to inherit parent properties
//             studentId: this.studentId
//         };
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, section, subject) {
//         super(name, age, section);
//         this.subject = subject;
//     }

//     toObject() {
//         return {
//             ...super.toObject(), // Inherit parent properties
//             subject: this.subject
//         };
//     }
// }


// const student = new Student("Rajesh", 16, "A", "S123");
// const teacher = new Teacher("Mr. Smith", 40, "A", "Mathematics");

// console.log(student.toObject());
// console.log(teacher.toObject());


// simply method


// class Person {
//     name = "John";
//     age = 20;
//   }
  
//   class Student extends Person {
//     rollNo = 12;
//     class = "XII";
//   }
  
//   class Teacher extends Student {
//     subject = "Programming";
//     department = "Computer Science";
//   }
  
//   const person1 = new Teacher();
//   console.log(person1.class);



