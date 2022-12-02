(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    // const names = ['Ken', 'Mike', 'Jade', 'Kyle'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (let i = 0; i < names.length; i += 1) {
    //     console.log(names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function(element, index, array){
    //     console.log(element);
    //     console.log(index);
    //     console.log(array);
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const arrNums = [1, 2, 3, 4, 5];

    //forEach example for last TODO (isaac solve)
    // arrNums.forEach(function (number, index){
    //     if(index === 0 || index === 1 || index === arrNums.length -1) {
    //         console.log(number);
    //     }
    // });


    // function first(element){
    //     return element[0];
    // }
    // function second(element){
    //     return element[1];
    // }
    // function last(element){
    //     //return element[4];
    //     return element[element.length -1]; //element.length -1 MOVES back from the end.
    // }
    //
    // console.log(first(arrNums));
    // console.log(second(arrNums));
    // console.log(last(arrNums));


// ======================= ARRAY BONUSES
//     1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
//     const foods = [
//         'banana',
//         'grapes',
//         'apples',
//         'peaches',
//         'avocados',
//         'plums',
//         'rice',
//         'cucumbers',
//         'bread',
//         'eggs'
//     ];
//
//     for (let i = 0; i < foods.length; i += 1) {  //< will always end on the .length of an array
//         let firstChar = foods[i][0];
//         let vowels = ['a', 'e', 'i','o', 'u'];
//         if (vowels.includes(firstChar)){
//         console.log(foods[i]); // slice or substring will also give first letter
//         }
//     }


//     2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.




//     3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
//     otherwise, the function should return the string ‘input num NOT in input array’ (edited)

})();