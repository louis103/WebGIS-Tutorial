// we shall cover 
// Number methods
// Regex, 
// linking html and javascript
// Event listeners
const myNumber = 42; // 4, 67, 89
const myFloat = 42.08;
const floatNumber2 = 1.23;

const myString = '42';
const myString2 = "42.123abc";
const myStringInt = "42David";

// console.log(Number("David")); // if you pass a string that cannot be converted to a number then it says NAN (Not a Number)
// console.log(Number.isInteger(myFloat)); // determines whether the passed value is an integer.

// // parseFloat -> returns a floating point number
// console.log(Number.parseFloat(myString2));
// console.log(Number.parseFloat(myString2).toFixed(2)); //limit the number to 2 decimal places
// console.log(Number.parseInt(myFloat)); // gives 42
console.log(typeof Number.toString(myNumber)); // converts a number to string type