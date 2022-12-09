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
    // const person = {
    //     firstName: "Kenneth",
    //     lastName: "Hayles"
    //}
    // console.log(person.firstName);
    // console.log(person.lastName);

    /// 'ArrayName'.'object'.
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //other way to call the function
    // const fullName = `${person.firstName} ${person.lastName}`;
    // //const fullName = person.firstName + ' ' + person.lastName; additional expression
    //
    // function sayHello(){
    //     return `Hello from ${fullName}`;
    // }
    // console.log(sayHello(fullName));

    // person.sayHello = function(){
    //     return `Hello from ${this.firstName} ${this.lastName}`;
    // }
    // console.log(person.sayHello());
    //
    // //add to the object by calling the array(person), adding the new key (middleName), and assigning a value (michael).
    // person.middleName = 'Michael';
    // console.log(person);



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
    //     {
    //         name: 'Cameron',
    //         amount: 180},
    //
    //     {
    //         name: 'Ryan',
    //         amount: 250},
    //
    //     {
    //         name: 'George',
    //         amount: 320}
    //
    // ];

    //can't loop through an object, only array.

    // shoppers.forEach(function(shoppers) {
    //   if(shoppers.amount > 200){
    //       console.log(`${shoppers.name} spent $${shoppers.amount} and received a $${shoppers.amount * .12} discount, their total price is now $${shoppers.amount - shoppers.amount *.12}`);
    //   } else {
    //       console.log(`I'm sorry ${shoppers.name} you don't qualify for this discount...thank you for shopping at HEB`);
    //   }
    // })

    // shoppers.forEach(function(shopper) {
    //     if(shopper.amount > 200) {
    //         let savings = parseFloat(shopper.amount) *.12
    //         let total = parseFloat(shopper.amount) - (savings);
    //         console.log(`${shopper.name} spent ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} and received a 12% discount.\n${shopper.name}'s discounted total is ${total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, with a savings of ${savings.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
    //     } else {
    //         let remaining = (200 - parseFloat(shopper.amount)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and did not receive a discount.\n${shopper.name} will have to spend ${remaining} more to receive a 12% discount.\n`);
    //     }
    // });




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

    const books = [
        {
            title: 'Jungle Book',
            author: {
                    firstName:'Bob',
                    lastName: 'Marley',
            }
        },
        {
            title: 'Last Action Hero',
            author: {
                firstName:'Zach',
                lastName: 'Taylor',
            }
        },
        {
            title: 'The Game',
            author: {
                firstName:'Tommy',
                lastName: 'Oliver',
            }
        },
        {
            title: 'JS for Dummies',
            author: {
                firstName:'Kimberly',
                lastName: 'Hart',
            }
        },
        {
            title: 'Coding for Dummies',
            author: {
                firstName:'Jason',
                lastName: 'Scott',
            }
        },
    ];

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

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

    // - the book number (use the index of the book in the array)
    // - the book title
    // - author's full name (first name + last name)


    // //both ways
    // for (let i = 0; i < books.length; i += 1){
    //   console.log(`Book #${books.indexOf(books[i])+1}`);
    //   console.log(`Title: ${books[i].title}`);
    //   console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
    //   console.log(`---`);
    // }

    //array name. forEach"loop"(function ("data that it represents")
    // books.forEach(function(book, index){
    //     let bookNumber = index + 1;
    //     let fullName = `${book.author.firstName} ${book.author.lastName}`;
    //     let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor: ${fullName}\n---`;
    //     console.log(message);
    // })


    // sad path
    // console.log(`Book #1`);
    // console.log(`Title: ${books[0].title}`);
    // console.log(`Author: ${books[0].author.firstName} ${books[0].author.lastName}`);
    // console.log(`---`)
    // console.log(`Book #2`);
    // console.log(`Title: ${books[1].title}`);
    // console.log(`Author: ${books[1].author.firstName} ${books[0].author.lastName}`);
    // console.log(`---`)
    // console.log(`Book #3`);
    // console.log(`Title: ${books[2].title}`);
    // console.log(`Author: ${books[2].author.firstName} ${books[0].author.lastName}`);

     

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


  //let myAuthor = "Bob Marley";
  //let myBook = createBook("coding for beginners", "Bob Marley")
  function createBook (title, author){
      let authorArray = author.split(' '); //["Bob", "Marley"]
      let bookObject = {
          title: title,
              author: {
          firstName:authorArray[0],
          lastName: authorArray[1]
        }
      };
      return bookObject;
  }

  //console.log(createBook("Jungle Book", "Bob Marley"));
    let books2 = [
        createBook("Bad Boys", "will Smith"),
        createBook('Last Action Hero','Zach Taylor'),
        createBook('The Game', 'Tommy Oliver')
];
    console.log(books2);


    // function showBookInfo(book) {
    //
    // }


})();