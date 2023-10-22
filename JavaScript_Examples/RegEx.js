// let pattern = /[^0-9]/g;
let pattern2 = /\w/g;
// let text = "My name is david and I am a beginner in JavaScript just like David";
let text = "Hi 3 David 405";
let match = text.match(pattern2);
console.log(match);

// /David/ -> find the name David in the text
// /david/i -> find a word but put into consideration of case sensitivity.
// /g -> perform a global match (find all matches rather than just stopping after the first one)
// /m -> used to perform multiline matching

// Usage of brackets in Regular expressions
// /[david]/ -> find david that is fitted within the brackets
// /[^david]/i/g -> find david that is not inside brackets
// [0-9] -> find any digit inside brackets
// [^0-9] -> finds any character NOT between the brackets(any non digits)
// (x|y) -> Finds any of the alternatives given. /(Mary|David)/i/g

// \w -> Finds a word character for example \G
// \W -> finds a non-word character
// \d
// \D
// \n "Hi , I am very happy \n and also fine!";
// \t - tab character in the text
// \b -> find a match at the beginning/end of a word
// \B find a match, but nit at the beginning/end of a word