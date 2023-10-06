// var f = function (a, b) {
//   const sum = a + b;
//   return sum;
// };
// console.log(f(3, 4));
const createHelloWorld = function () {
  return function (...args) {
    console.log("Hello");
  };
};
//createHelloWorld()();
//Create a function that logs "Hello"
const helloFunction = createHelloWorld();

//Call the function to display "Hello" in the console
helloFunction();
