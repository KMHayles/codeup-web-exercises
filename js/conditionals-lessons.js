"use strict";

// if(condition) {
//
// } else if (condtion2) {
//
// } else {
//
// }

// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference == "pineapple and hot sauce") {
//     console.log("What a coincidence, that's my favorite!");
// } else if (pizzaPreference == "cheese") {
//     console.log("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

switch(pizzaPreference){
    case "cheese":
        console.log("I like cheese");
        break;
    case "Peppers and pineapple":
        console.log("Thats gross");
        break;
    default:
        console.log("Oh, well I don't like that");
        break;
}


// let cities = prompt("What city do you live in?");
// if (cities.toLowerCase() || cities.toUpperCase() == "Boston"){
//     console.log("The location is Boston.");
//     console.log("Go Red Sox!");
// } else if (cities.toLowerCase() || cities.toUpperCase() == "San Antonio") {
//     console.log("The location is San Antonio");
//     console.log("Go Spurs");
// } else {
//     alert("We don't know where this is")
// }

// console.log(addNumbers(3));
// function addNumbers(num1) {
//     if (typeof num1 == "string") {
//         return "This is not a number";
//     }
//     else {
//         return num1 + 2;
//     }
// }

// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference == "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference == "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

let success = true
let message;
if (success) {
    message = "The operation was successful";
}
else {
    message = "The operation was not successful";
}
let message = success ? "The operation was successful" : "The operation was not successful";
console.log(message);
