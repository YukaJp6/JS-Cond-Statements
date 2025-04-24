// For each loop

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

// ------------------------------------------------------
// for of (used for arrays and iterable objects)

// const numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//     console.log(num);
// }

// --------------------------------------------------

// for in loop (used for objects)
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// for (const key in person) {
//     console.log("key =", key);
//     console.log(`person[${key}]:val =`, person[key]);
// }



// ----------------------------------------------------------
// MY TEST

// function serveFeast() {
//     console.log("Your feast is served, my king.");
// }

// function repeatFiveTimes(callback) {
//     callback();
//     callback();
//     callback();
//     callback();
//     callback();
// }

// repeatFiveTimes(serveFeast);

// ------------------------------------------*********************
// PROJECT

// Ask user for tasks until they enter "done"
// store the tasks in an array
// display final task list

const tasks = [] // adding user inputs to tasks array 

// checking user input is done
while(true) {
    let task = prompt("enter a task or type done to complete list.");

    if (task.toLowerCase() === `done`) {
        break //if done is typed, this will break the loop
    }

    tasks.push(task) // if not done, will prompt user again for tasks
}

// displays the task log, two different loops to do it
// *************************************

console.log("Your todo list:")

for (let i=0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}

// ********************************

// tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`)
// })

// ****************************************