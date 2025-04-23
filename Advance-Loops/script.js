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
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (const key in person) {
    console.log("key =", key);
    console.log(`person[${key}]:val =`, person[key]);
}



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

// ------------------------------------------