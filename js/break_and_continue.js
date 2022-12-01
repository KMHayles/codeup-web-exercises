'use strict'

// Break and Continue

//Q2
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:

//// Number to skip is: 27

// // Here is an odd number: 1
// // Here is an odd number: 3
// // Here is an odd number: 5
// // Here is an odd number: 7
// // Here is an odd number: 9
// // Here is an odd number: 11
// // Here is an odd number: 13
// // Here is an odd number: 15
// // Here is an odd number: 17
// // Here is an odd number: 19
// // Here is an odd number: 21
// // Here is an odd number: 23
// // Here is an odd number: 25
// // Yikes! Skipping number: 27
// // Here is an odd number: 29
// // Here is an odd number: 31
// // Here is an odd number: 33
// // Here is an odd number: 35
// // Here is an odd number: 37
// // Here is an odd number: 39
// // Here is an odd number: 41
// // Here is an odd number: 43
// // Here is an odd number: 45
// // Here is an odd number: 47
// // Here is an odd number: 49

//My answer
// let userAnswer = prompt('Please enter an odd number between 1 and 50')
// for(let i= userAnswer; i<=50; i++){
//     if(userAnswer % 2 === 0) {
//         console.log(`${userAnswer} is even`)
//     } else {console.log(`${userAnswer} is odd`)}
// }

// while(true){
//     let userNum = prompt("Enter an Odd number between 1 and 50"); //could wrap prompt in parseFloat
//     userNum = parseFloat(userNum);
//     if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1){
//         break;
//     }
// }


// jason Q3 continue
// while(true){
//     let userNum = prompt("Enter an Odd number between 1 and 50"); //could wrap prompt in parseFloat
//     userNum = parseFloat(userNum);
//     if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1){
//         for(let i=1; i <= 50; i+=2) {
//             if (i === userNum) {
//                 continue;
//             } else {
//                 console.log(i);
//             }
//         }
//         break;
//     }
// }

// jason Q3 continue with message "yikes"
// while(true){
//     let userNum = prompt("Enter an Odd number between 1 and 50"); //could wrap prompt in parseFloat
//     userNum = parseFloat(userNum);
//     if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1){
//         for(let i=1; i <= 50; i+=2) {
//             if (i === userNum) {
//                 console.log(`Yikes! Skipping number ${i}`);
//             } else {
//                 console.log(i);
//             }
//         }
//         break;
//     }
// }