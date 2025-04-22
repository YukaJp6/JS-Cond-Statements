//  For Loop

// for (let i = 0; i <= 5; i++) {
//     console.log("Iteration:", i);
// }

// const colors = ["red", "green", "blue", "yellow"];

// for (let i = 0; i < colors.length; i++) {
//     console.log("i =", i);
//     console.log(`colors [i] =`, colors[i]);
// }

// --------------------------------------------------------
// While Loop

// let count = 0;

// while (count <= 5) {
//     console.log("count =", count);
//     count++;
// }

// User Input Until Correct Answer

// let userInput;

// while (userInput !== "yes") {
//     userInput = prompt("type `yes` to continue.");
// }

// console.log("You entered `yes`.");
// --------------------------------------------------------

// Do ... While Loop ( executes at least once)

// let number = 0;

// do {
//     console.log("number =", number)
//     number++;
// } while (number <= 5);

let num;
do {
    num = prompt("Enter a number greater than 10:");
} while (num <=10);

console.log("Thank you!")