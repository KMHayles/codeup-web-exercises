"use strict";

//Q2

// function showMultiplicationTable(){
//     let number = 5
//     for(let i = 1;i <= 10; i++){
//         let result = i * number;
//         console.log(`${number} * ${i} = ${result}`);
//     }
// }
// showMultiplicationTable()

//Jason example
// function showMultiplicationTable(num){
//     for(let i = 1; i <= 10; i++){          i++/i = i+1
//         let answer = num * i;
//         console.log(`${num} * ${i} = ${result}`);
//     }
// }
//
// showMultiplicationTable(7)

//Q3
// for(let i = 0; i<=10; i++){
//     let randoNum = Math.floor((Math.random() * (200 - 20 + 1)) + 1);
//     console.log(i,randoNum);
//     if(randoNum % 2 === 0) {
//         console.log(`${randoNum} is even`)
//     } else {console.log(`${randoNum} is odd`)
//     };
// }


// Jason example Q3
// for (let i = 0; i < 10; i++){
//     let randomNum = getRandomNum(20, 200);
//     let isEven = randomNum % 2 === 0;
//     let answer =   `${randomNum} is ${isEven ? 'even':'odd'}`;
//     console.log(answer);
// }
// function getRandomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }



//Issac example
//Q4
// let num = 9;
// let str = '';
//
// for(let i=1;i<=9; i++){
//     for(let j=1; j <= i; j++){
//         str += i;
//     }
//     str += '\n'
// }
// console.log(str);

//jason Q4
// for (let i = 0; i < 9; i++) {
//     let number = i + 1; // this is the actual number being printed
//     let result = number.toString(); // this is the actual number being printed
//     // let result = `${number}`;  marking it a string, so any add operators concatenate in the result
//     for(let j = 1; j <= i; j++){
//         result += number; // same as result plus number, concatenating the number at the end of the result
//     }
//     console.log(result);
// }

//jason Q4 short method with  string.repeat
// for (let i = 0; i <9; i++){
//     let answer = String(i+1).repeat(i+1);
//     console.log(answer)
// }


// Q5
// function test(){
//     for(let i = 100; i >=5; i = i - 5) {
//         console.log(i);
//     }
// }
// test();

// jason Q5 example
// for( let i = 100; i >= 5; i -= 5){ // which is (i = i -5)
//     console.log(i)
// }