(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // const person = {};
    // person.firstName = "Kenneth";
    // person.lastName = "Hayles";
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // const fullName = `${person.firstName} ${person.lastName}`;
    // //const fullName = person.firstName + ' ' + person.lastName; additional expression
    //
    // function sayHello(){
    //     return `Hello from ${fullName}`;
    // }
    // console.log(sayHello(fullName));



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // const shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function(shoppers) {
    //   if(shoppers.amount > 200){
    //       console.log(`${shoppers.name} spent $${shoppers.amount} and received a $${shoppers.amount * .12} discount, their total price is now $${shoppers.amount - shoppers.amount *.12}`);
    //   } else {
    //       console.log(`I'm sorry ${shoppers.name} you don't qualify for this discount...thank you for shopping at HEB`);
    //   }
    // })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const users = [
        {
            givenName: 'Sam',
            age: 21
        },
        {
            givenName: 'Cathy',
            age: 34
        },
        {
            givenName: 'Karen',
            age: 43
        }
    ];



    const books = [
        {title: 'Jungle Book'},
        {title: 'Last Action Hero'},
        {title: 'The Game'},
        {title: 'JS for Dummies'},
        {title: 'Coding for Dummies'},
    ];

    const author = [
        {firstName: 'Bob', lastName: 'Marley'},
        {firstName: 'Tommy', lastName: 'Oliver'},
        {firstName: 'Kimberly', lastName: 'Hart'},
        {firstName: 'Jason', lastName: 'Scott'},
        {firstName: 'Zach', lastName: 'Taylor'},
    ];

    shoppers.forEach(function(shoppers) {
        if(shoppers.amount > 200){
            console.log(`${shoppers.name} spent $${shoppers.amount} and received a $${shoppers.amount * .12} discount, their total price is now $${shoppers.amount - shoppers.amount *.12}`);
        } else {
            console.log(`I'm sorry ${shoppers.name} you don't qualify for this discount...thank you for shopping at HEB`);
        }
    })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();