// what are Promises in JavaScript?.
// What are callback functions?
// Thenables?
// What are Async Await keywords as part of Js Promises?

// Callbacks are functions passed as arguments to other functions, which are then executed when the parent function completes its task. They are often used for handling asynchronous operations, like making API requests or reading files. Callbacks help manage the flow of asynchronous code, but they can lead to a pattern called "Callback Hell" or "Pyramid of Doom" when you have multiple nested callbacks, making code hard to read and maintain.

// Promises provide a more structured way to handle asynchronous operations. They represent a value that may not be available yet but will be resolved or rejected in the future. Promises have three states: pending, resolved (fulfilled), or rejected. Promises allow you to attach .then() and .catch() handlers to handle success and error cases, making asynchronous code more readable and maintainable.

// Async/await is a syntax introduced in ES2017 (ES8) that simplifies working with promises. It allows you to write asynchronous code in a more synchronous style. The async keyword is used before a function declaration to indicate it will contain asynchronous code, and await is used within an async function to pause execution until a promise is resolved.

// we wont use callbacks since they make the code more messier

// function firstFunction(parameters, callback){
//     // do stuff
//     callback();
// }

// // AKA "Callback Hell";
// firstFunction(parameters, function(){
//     // code becomes hard to follow
//     secondFunction(parameters, function(){
//         thirdFunction(parameters, function(){
//           fourthFunction(parameters, function(){

//           })
//         })
//     })
// })

// @TODO: Promises
// 3 states: Pending, Fulfilled, Rejected 🧸
// Pending -> another js code is executing when the promise is still running
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes, resolved the promise!");
  } else {
    reject("No, rejected the promise!");
  }
});
console.log(myPromise);

// Thenables are objects that have a .then() method, which is similar to promises.
// good when you want to get the value from a promise
//@TODO: chaining Thenables(then)
// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// @Fetch API uses its own promises/ used to get data from APIs(or a server)
// We need to wait for the data to comeback and then do something w/it.
// 2 ways to simulate how fetch works
// 1: - set timeout
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    // callback for timeout function
    resolve("myNextPromise resolved");
  }, 3000); // a delay of 3 seconds
});

// go ahead and execute other functions as we await for this.
// myNextPromise.then((value) => {
//   console.log(value);
// });

// // This is executed first
// myPromise.then((value) => {
//   console.log(value);
// });

// @TODO: Pending state of the Promise./ We are going to use the JavaScript fetch API function
// fetch retrieves data from another server
const users = fetch("https://jsonplaceholder.typicode.com/users");
// above returns a pending state;
// console.log(users); // Promise {<pending>} -> reason is because it has not resolved/still retrieving data
// we need to wait for the Promise to finish up and then do something

// get users data from API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     //   console.log(response); // generates a readable stream(not ready to work with)
//     return response.json(); // we call the json() so that we can convert the strean to a json data
//     // .json() also returns a promise
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

//@TODO: Async Await -> They implore the mechanism of creating a sync and allowing a request to complete
// They also reduce on the recurring thenables.
const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction(); // waiting on another function which uses Promises.
  myUsers.userList = data;
  console.log(myUsers.userList);
};

// anotherFunc(); // this function has await so it will execute last since every promise has to resolve
// console.log(myUsers.userList); // this will console an empty array [];

// Example function
const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  //   console.log(userEmailArray);
  postToWebPage(userEmailArray); // this function does not wait on anything so it wont use await.
  // it cannot be async/ we have already waited in the above functions.
};

const postToWebPage = (data) => {
  console.log(data);
};

// getAllUserEmails();

// Fetch also takes second parameter => Demo using a different API
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json", // text/plain
    },
  });
  const jsonJokeData = await response.json();
  //   const textJokeData = await response.text();

  console.log(jsonJokeData.joke);
  //   console.log(textJokeData); for text data
};

// getDadJoke();

// post a joke => We use the POST method of fetch API
const jokeObject = {
  id: "0o071TSv4Ed",
  joke: "Why was it called the dark ages? Because of all the knights.",
};

const postDadJoke = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const JsonResponse = await response.json();

  console.log(JsonResponse);
};

// postDadJoke(jokeObject); // call the function to POST(send) the joke object to the url
