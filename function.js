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

// let userBillTotal = prompt('How much was your bill?');
// console.log('total bill: ' + userBillTotal);
// let userBillTip = prompt ('What would you like to tip?');
// console.log('tip: ' + userBillTotal.toString() * userBillTip.toString());
// let tip = userBillTotal * userBillTip;
// alert('Thank you for the ' + tip + " tip!");

//function calculateTip(totalBill, tipPercentage){
   // let total = (totalBill * tipPercentage);
    //console.log(total);
//}
//calculateTip();


function applyDiscount(){
    let price = 100;
        console.log(price);
    let discount = .2;
        console.log(discount);
}
applyDiscount();