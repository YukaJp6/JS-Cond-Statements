// function greet() {
//     console.log("hello, welcome to js");
// }

// // call the function
// greet();
// greet();

// ****************************

// function greetUser(name) {
//     console.log(`Hello, ${name}`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser("Charles");

// ***************************

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(5, 10, 5);
// addNumbers(10, 10, 2);

// **********************************

// const greet = function(name) {
//     return `Hello, ${name}`;
// }

// console.log(greet(`Alice`));

// *************************************

// arrow functions, shorter syntax

// const square = (num) => num * num;

// console.log(square(5));

// //  chatgpt exercise ****************************************

// const summonGuard = (name) => {
//     console.log(`${name}, the royal guard has arrived `);
// }

// summonGuard("Julius")




// function generateTitle(name) {
//     return `Sir ${name} of the realm`
// }

// const result = generateTitle("Poodge");
// console.log(result);

// const generateTitle = (name) => {
//     return `Sir ${name} of the realm`
// }

// const result = generateTitle("Poodge");
// console.log(result);


// *********************************************************************
// SCOPE

// let globalVar = "I am a global variable";

// function testScope() {
//     let localVar = "I exist only in this function";
//     console.log(globalVar); // works
//     console.log(localVar); // works
// }

// testScope();
// console.log(globalVar); // works
// console.log(localVar); // will give error, variable localVar only exists in the function


// **********************************
// FUNCTION HOISTING


