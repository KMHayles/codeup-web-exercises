'use strict'

//Q2

// function showMultiplicationTable(){
//     let number = 5
//     for(let i = 1;i <= 10; i++){
//         let result = i * number;
//         console.log(`${number} * ${i} = ${result}`);
//     }
// }
// showMultiplicationTable()

// function showMultiplicationTable(){
//     let number = 3
//     for(let i = 1; i <= 10; i++){
//         let result = i * number;
//         console.log(`${number} * ${i} = ${result}`);
//     }
// }
//
// showMultiplicationTable()

//Q3
// for(let i = 0; i<=10; i++){
//     let randoNum = Math.floor((Math.random() * (200 - 20 + 1)) + 1);
//     console.log(i,randoNum);
//     if(randoNum % 2 === 0) {
//         console.log(`${randoNum} is even`)
//     } else {console.log(`${randoNum} is odd`)
//     };
// }


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

// Q5
function test(){
    for(let i = 100; i >=5; i = i - 5) {
        console.log(i);
    }
}
test();
