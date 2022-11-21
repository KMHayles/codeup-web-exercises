'use strict'

let myName = 'Kenneth'
let helloMessage;

function sayHello(name) {
    helloMessage = "Hello, "  + name + "!";
}

sayHello(myName);
console.log(helloMessage)

let random = Math.floor((Math.random()*3)+1);

console.log("Random number is: " + random.toString());

function isTwo(number) {
    (number % 2 === 1) ? console.log("Number was odd.") : console.log("Number was even.");
}

isTwo(random);


let userBill = prompt ('How much was your bill?');
letprompt ('How much would you like to tip?');

userBill = calculateTip()

function calculateTip(totalBill, tipPercentage){
    let total = (totalBill * tipPercentage);
    console.log(total)
}






