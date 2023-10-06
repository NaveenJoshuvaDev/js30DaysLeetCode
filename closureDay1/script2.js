function outerFunction() {
  var outerVariable = 10;

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

var closure = outerFunction(); // outerFunction returns innerFunction
closure(); // This will log 10 because innerFunction is a closure and retains access to outerVariable

const createHelloWorld = function () {
  return function (...args) {
    console.log("Hello");
  };
};
createHelloWorld()();

// Create a function that logs "Hello"
//const helloFunction = createHelloWorld();

// Call the function to display "Hello" in the console
//helloFunction();
