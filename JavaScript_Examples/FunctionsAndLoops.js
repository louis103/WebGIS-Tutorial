// console.log("Welcome to JS Functions,Ternary Operator, Loops and Global and Local scope in functions!");
// A function in Javascript is a block of code which is meant to solve/do a specific task.
// function name (num1, num2){
//   // a block of code to run
//   // return
// }
let x = 10;
let y = 20;

function $(num1, num2){
  answer = num1 * num2;
  return answer;
};


// let output = $(x, y);
// let output = $(30,50);
// console.log("The above function return the multiplication 30 x 50" + output);

// function with no return
function greetPerson(name){
  console.log("Good Evening: "+ name);
}

// greetPerson("Mary");
function sayBye(){
  console.log("This function has no parameters");
};

// sayBye();
// Global and local variables scope in functions
// global variable
let globalVar = 35;

function multiply1(num){
  let localVar = 40;
  return num * localVar;
};

function multiply2(num){
  return num * globalVar * 5;
};

// console.log(multiply1(2));
// console.log(multiply2(4));
// console.log(globalVar);

// // self invoking functions
// (function selfInvoke(){
//   console.log("I am a self calling/invoking function!!! Hurrayy");
// })();
// // Arrow functions
// ((num1, num2) => {
//   console.log(num1 * num2);
// })(10, 50);

// Ternary Operators
// condition ? true : false
// let ageOfStudent = 20;
// console.log((ageOfStudent < 21) ? "You are big!" : "You are small!");

// let firstCheck = false,
//     secondCheck = false,
//     access = firstCheck ? "Access Denied" : secondCheck ? "Access Denied" :   "Access Granted";

// console.log(access);

// Loops in Javascript
// Some types of Loops in JavaScript
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
// let foods = ["Pilau","Ugali","Fries","Juice","Mandazis"];
// for(let i=0; i < foods.length; i++){
//   console.log(i);
// }

// for in loop
// let value = "";
// let student = {name: "Prudence",subject: "Mathematics",grade: 95, isAdmitted: false};
// for(key in student){
//   value += student[key] + "\n";
// }
// console.log(value);
// var sub = student.isAdmitted;
// console.log(sub);

// for of loop
// let foods = ["Pilau","Ugali","Fries","Juice","Mandazis"];
// let studentName = "Boniface";
// for( chr of studentName){
//   console.log(chr + "\n");
// }

// While loop
// let text = "";
// let i = 0;
// while (i < 10) {
//     text += "The number is: " + i + "\n";
//     i++;
// }
// console.log(text);

// do while loop
// let text = "";
// let i = 0;
// do {
//     text += "The number is " + i + "\n";
//     i++;
//   }
// while (i < 10);
// console.log(text);