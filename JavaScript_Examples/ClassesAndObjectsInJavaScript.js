/*
Class -> Object

// An example of an object -> {name: "Prudence",age:20}

**Classes** are a template for creating objects. 
They encapsulate data with code to work on that data.

An **object** is a collection of properties, 
and a property is an association between a name (or key) and a value. 
A property's value can be a function, 
in which case the property is known as a method

Instance Properties: what they have
-name
-age
-height

Instance Methods: what they do
-talk
-run
-jump

-this keyword refers to the current object(which is being created by the class)

- when you pass parameters inside the constructors, then they will be assigned,
- to the instance properties of the object

*/
/*
class Cat {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
}

let cat1 = new Cat("GoodCat", 3);
console.log(cat1.name);
*/

// @TODO: Class definition
class Rectangle {
  constructor(_width, _height, _color) {
    // runs once and used to setup an object, runs when object is being created
    // console.log("The rectangle is being created!");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  // define instance methods / functions -> mostly used instance properties to
  // achieve something

  // method to give us the area of the object
  getArea() {
    return this.width * this.height;
  }
  // method to print description of the object
  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    );
  }
}

// let myRectangle1 = new Rectangle(3, 5, "blue"); // object 1
// let myRectangle2 = new Rectangle(10, 15, "red"); // object 2
// let myRectangle3 = new Rectangle(2, 4, "purple"); // object 3

// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());
// console.log(myRectangle3.getArea());
// console.log(myRectangle2.printDescription());
// console.log(myRectangle3);

//@TODO: Getters and Setters for classes
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestForArea = 0;
  }
  // getters -> used to get value from object/behaves like an object property
  get area() {
    this.numOfRequestForArea++;
    return this.width * this.height;
  }
  get printWidth() {
    return this.height;
  }
  // setter -> used to set a value/property of an object recursively
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);
square1.area = 81; // calling the setter method
// console.log(square1.printWidth); // also a way to call a getter

// console.log(square1.width);
// console.log(square1.height);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// console.log(square1.numOfRequestForArea);

// @TODO: Static Methods -> method defined in a class but is not part of the instantiated object.

class Square2 {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  // static method
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

// let sq1 = new Square2(8);
// let sq2 = new Square2(9);
// static methods are called directly from the class itself,
// but not from the class instance / object
// also you cannot use this keyword since it is not bound to Object but rather to the class itself
// console.log(Square2.equals(sq1, sq2));
// console.log(Square2.isValidDimensions(6, 6));

// @TODO: Inheritance & extends in JavaScript
// Parent and Child classes
// Have a generic class and want to create a child class of that generic class while still
// maintaining its features and behaviours but a little bit extra
// Inheritance is the concept in OOPs in which one class inherits the attributes and methods of another class. 
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old!`);
  }
}

// child class -> it takes all attributes and behaviour of the Generic class
// Here class Programmer inherits from class Person, it will have access to both
// properties and methods
class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    // custom behaviour
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding!`);
  }
}

let person1 = new Person("Louis", 25);
let programmer1 = new Programmer("Pauline", 30, 10); // extra added functionality

// console.log(person1);
// console.log(programmer1.code());
// programmer1.describe();

const programmers = [
  new Programmer("Dom", 36, 12),
  new Programmer("Jeff", 24, 4),
  new Programmer("Patrick", 28, 8),
  new Programmer("Boniface", 24, 3),
];

function developSoftware(programmers) {
  // Develop software
  for (let programmer of programmers) {
    programmer.code();
  }
}

// developSoftware(programmers);

// @TODO: polymorphism -> The act of redifing a method inside a derived child class of a parent
// The word polymorphism means having many forms. In our case a method existing in different forms or having
// different functionalities accross Parent & Child classes
class Animal {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  makeSound() {
    // this is the function to overide to achieve polymorphism
    console.log("Generic Animal Sound!");
  }
  distanceTravelled() {
    let d2 = this.distance / 2;
    console.log("The distance travelled by animal is: " + d2);
  }
}

// child class to override the makeSound method
class Dog extends Animal {
  constructor(name, distance) {
    super(name, distance);
  }
  //Polymorphism
  makeSound() {
    // super.makeSound(); // accessing generic methods
    console.log("Woof! Woof!");
  }

  distanceTravelled() {
    let d2 = this.distance * 2;
    console.log("The distance travelled by Dog is: " + d2);
  }
}

const a1 = new Animal("Dom", 30);
const a2 = new Dog("Jeff", 20);
// a1.distanceTravelled();
// a2.distanceTravelled();

// @TODO: Object manipulation and accessing.
// Nested objects in JavaScript

const Languages = {
  topic: "OOPs",
  lang: "JavaScript",
  sub_topics: {
    topic_1: "Class",
    topic_2: "Object",
    subtopic3: {
      topic_11: "Inheritance",
      topic_22: "Polymorphism",
    }
  },
};
console.log(Languages.topic);
console.log(Languages.sub_topics.topic_1);
console.log(Languages["lang"]);
console.log(Languages.sub_topics["topic_2"]);
console.log(Languages.sub_topics.subtopic3["topic_22"]);
