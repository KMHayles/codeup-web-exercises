'use strict'

/**
* TODO:
    * Create a function called 'sayHello' that takes a parameter 'name'.
* When called, the function should return a message that says hello to the passed in name.
*
* Example
* > sayHello("codeup") // returns "Hello, codeup!"
*/

// console.log(sayHello("codeup"));
// function sayHello(name){
//     let message = "Hello, " + name + "!";
//     //let message = `Hello, ${name}!` template literal
//     return message;
// }




/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let  helloMessage = sayHello("Kenneth");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// let myName = "Larry";
// let helloMessage2 = sayHello(myName);
// console.log(helloMessage2);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// let random = Math.floor((Math.random()*3)+1);
// console.log("Random number is: " + random.toString());
// function isTwo(number) {
//     (number % 2 === 1) ? console.log("Number was odd.") : console.log("Number was even.");
//     return number;
// }
// isTwo(random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// const userBill = prompt("What is your bill?");
// const userTip = prompt("what tip would you like to leave?");
//
// const coversionOfBill = parseInt(userBill); // string => number
// const coversionOfTip = parseInt(userTip);
//
// function calculateTip(userBillTotal, userBillTip){
//     let coversionOfTipToDecimal = userBillTip / 100; // 0.20, 0.30
//     let total = coversionOfTipToDecimal * userBillTotal
//     return total;
// }
// const gratuity = calculateTip(coversionOfBill, coversionOfTip); // these are the arguments
// console.log(gratuity); // what ever we return in the function


// let userBillTotal = prompt('How much was your bill?');
// console.log('total bill: ' + userBillTotal);
// let userBillTip = prompt ('What would you like to tip?');
// console.log('tip: ' + userBillTotal.toString() * userBillTip.toString());
// let tip = userBillTotal * userBillTip;
// parseFloat('tip');
// alert('Thank you for the $' + tip + " tip!");
//
// function calculateTip(userBillTotal, userBillTip){
//     let total = (userBillTotal * userBillTip);
//     return total;
// }
// calculateTip("tip");

// function calculateTip(total, tip){
//  console.log("Running calculateTip()");
//  console.log("The total is " + total);
//  console.log("The tip entered is " + tip);
//  let tipFormatted = "0." + tip;
//  console.log("The concatenated tip is " + tipFormatted);
//  tipFormatted = parseFloat(tipFormatted);
//  console.log("Turning tipFormatted into a number");
//  console.log(tipFormatted);
//  let answer = total * tipFormatted;
//  console.log("The calculated tip is: " + answer);
//  return answer;
// }
// let tipAnswer = calculateTip(100, 20);
// console.log(tipAnswer);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// let price = 100
// let discount= .2
//
// function applyDiscount(){
//     let totalBill = price * discount;
//     console.log('The total bill is $' + totalBill)
//     return totalBill
// }
// applyDiscount();

// let work = myFunction();
//
// function myFunction(work){
//     let theAmountOfWork = time * days;
//     console.log("How much time a week I work" + theAmountOfWork)
//     let days = 7
//     console.log("Amount of days I work " + days)
//     let time = 8
//     console.log("Amount of hours I work" + time)
//     return totalWork
// }
// myFunction('totalWork');
