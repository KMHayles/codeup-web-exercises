// let message = myFunction("Kenneth");
// console.log(message);

let person1 = "Billy",
    person2 = "Bob";

fight(person1,person2);
let x = isEven(1232323223);
console.log(x);
let y = isEven(28262637373622)
console.log(y)

function myFunction(name){
    return "Thank you, " + name + ". You ran my function";
    console.log('you can\'t see this')
}

function fight(Billy, Bob){
    console.log(Billy + " punched " + Bob + " right in the kisser.");
}

function isEven(num){
    // GET THE PIECES OF THE PUZZLE!!!!
    // PUT THE PIECES OF THE PUZZLE INTO VARIABLES.
    let number = num;
    let answer = (number % 2 == 0);

    //finally return the answer
    return (answer);
}