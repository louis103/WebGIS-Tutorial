// Variables are Containers for Storing Data
// The general rules for constructing names for variables (unique identifiers) are:
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.
// var, let, const
// to assign to a variable we use (=)
// let firstName;
// firstName = "Mary";
// console.log(firstName);
// const students = [1,2,3];
// console.log(students);
let a = 2;
let b = 4;
let c = a + b;
//"2" + "4" = "24"
let x = 16 + 4 + "Volvo"; //== 20Volvo "20" + "Volvo"
let y = "Volvo" + 16 + 4; // Volvo164 "Volvo" + "16" + "4"
// console.log(x);
// console.log(y);
// let X = "I am a JavaScript coder!";
// console.log(X);
// let $ = 20;
// let _name = "Volvo";
// let var8 = "X";
// console.log($);
// console.log(_name);
// console.log(var8);
// let $=20,_name="Nairobi",year2023="2023";
// console.log(year2023);

// If , if else, else if, switch
// let age = 28;
// if(age < 20){
//   // block of code to execute
//   console.log("You are an adult!");
// }else if(age < 10){
//   console.log("You are still very small!");
// }else{
//   console.log("You are very mature!");
// }

// Switch statement
// Use switch to specify many alternative blocks of code to be executed
switch (new Date().getDay()){ // day of the week sunday: 1, saturday: 7
  default:
    day = "undefined";
    break;
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(day);