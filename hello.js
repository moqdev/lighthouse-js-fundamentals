// const sayHello = function () {
//   console.log("Hello, world");
// }

// sayHello();

// const sayHello = function (name) {
//   console.log("Hello, " + name);
// }
// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");

//console.log:
// const sayHelloToConsole = function (name) {
//   console.log("Hello, " + name);
// }
// sayHelloToConsole('John');

//return: A return statement will not output anything to the console.
// const returnSayHello = function (name) {
//   return "Hello, " + name;
// }
// const greeting = returnSayHello('John');

//You can console.log it later:
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
