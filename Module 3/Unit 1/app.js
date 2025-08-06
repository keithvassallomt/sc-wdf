document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello, World!');

    // Modify the contents of a <div> in the DOM
    document.getElementById('div1').innerHTML =
        'This content has been added by JavaScript!';

    // Show an alert
    //alert('This is an alert message!');

    // Variables
    var myName = 'John';
    let mySurname = 'Doe';
    console.log('Hi there! I am ' + myName + ' ' + mySurname);

    // Variable interpolation
    let userName = 'Alice';
    console.log(`Good evening ${userName}, you have no messages.`);

    // Numbers
    let myAge = 30;
    console.log('I am ' + myAge + ' years old.');
    let ageInTenYears = myAge + 10;
    console.log('In 10 years, I will be ' + ageInTenYears + ' years old.');
    console.log('The data type of myAge is: ' + typeof myAge);

    // Boolean
    let isStudent = true;
    console.log('Am I a student? ' + isStudent);
    let isRaining = false;
    console.log('Is it raining? ' + isRaining);
    console.log('The data type of isStudent is: ' + typeof isStudent);

    //BigInt
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log('A big number: ' + bigNumber);
    console.log('The data type of bigNumber is: ' + typeof bigNumber);
    let anotherBigNumber = BigInt(12345678901234567890);
    console.log('Addition: ' + (bigNumber + anotherBigNumber));
    let normalNumber = 1234;
    //console.log('This will not work: ' + (bigNumber + normalNumber)); // This will cause an error

    // Other primitive (scalar) data types
    let x;
    console.log('The value of x is: ' + x);
    let y = null;
    console.log('The value of y is: ' + y);
    let id = Symbol('id');
    console.log('The value of id is: ' + String(id));

    /*
        This is a multi-line comment.
        It can span multiple lines.
    */
    console.log('Do something...');

    /**
     * Adds two numbers together.
     * @param {number} a - the first number
     * @param {number} b - the second number
     * @returns {number} - the sum of a and b
     */
    function add(a, b) {
        return a + b;
    }

    // Constants
    const PI = 3.14159;
    console.log('The value of PI is: ' + PI);
    // PI = 3.14; // This will cause an error because PI is a constant

    // Block scope
    {
        console.log('---');
        var var1 = 'Blue';
        console.log('The value of var1 is: ' + var1);
        let var2 = 'Green';
        console.log('The value of var2 is: ' + var2);
        console.log('---');
    }
    console.log('The value of var1 outside the block is: ' + var1);
    //console.log('The value of var2 outside the block is: ' + var2);

    // Arithmetic Operators
    let a = 20;
    console.log('--- Arithmetic Operators ---');
    console.log('Addition: ' + (5 + 3)); // 8
    console.log('Subtraction: ' + (5 - 3)); // 2
    console.log('Multiplication: ' + 5 * 3); // 15
    console.log('Division: ' + 5 / 3); // 1.666
    console.log('Modulus: ' + (5 % 3)); // 2
    console.log('Exponentiation: ' + 5 ** 3); // 125
    console.log('Increment: ' + ++a); // 21
    console.log('Decrement: ' + --a); // 20
    console.log('---');

    // Assignment Operators
    let b = 10;
    console.log('--- Assignment Operators ---');
    b += 5; // b = b + 5
    console.log('b after += 5: ' + b); // 15
    b -= 3; // b = b - 3
    console.log('b after -= 3: ' + b); // 12
    b *= 2; // b = b * 2
    console.log('b after *= 2: ' + b); // 24
    b /= 4; // b = b / 4
    console.log('b after /= 4: ' + b); // 6
    b %= 2; // b = b % 2
    console.log('b after %= 2: ' + b); // 0
    b **= 3; // b = b ** 3
    console.log('b after **= 3: ' + b); // 0
    console.log('---');

    // Comparison Operators
    console.log('--- Comparison Operators ---');
    console.log('5 == 5: ' + (5 == 5)); // true
    console.log('5 != 3: ' + (5 != 3)); // true
    console.log('5 === "5": ' + (5 === '5')); // false
    console.log('5 !== 5: ' + (5 !== 5)); // false
    console.log('5 > 3: ' + (5 > 3)); // true
    console.log('5 < 3: ' + (5 < 3)); // false
    console.log('5 >= 5: ' + (5 >= 5)); // true
    console.log('5 <= 3: ' + (5 <= 3)); // false
    console.log('---');

    // Logical Operators
    console.log('--- Logical Operators ---');
    console.log('true && false: ' + (true && false)); // false
    console.log('true || false: ' + (true || false)); // true
    console.log('!true: ' + !true); // false
    console.log(
        'true && false && true && true: ' + (true && false && true && true)
    ); // false
    console.log('---');

    // Nullish Coalescing Operator
    let queryResults = null;
    console.log('--- Nullish Coalescing Operator ---');
    console.log(
        'queryResults ?? "No results found": ' +
            (queryResults ?? 'No results found')
    ); // "No results found"
    queryResults = 'Data retrieved successfully';
    console.log(
        'queryResults ?? "No results found": ' +
            (queryResults ?? 'No results found')
    ); // "Data retrieved successfully"
    console.log('---');

    // Selection Statements
    let hour = 10;
    console.log('--- Selection Statements ---');
    if (hour < 12) {
        console.log('Good morning!');
    } else if (hour < 18) {
        console.log('Good afternoon!');
    } else {
        console.log('Good evening!');
    }

    // If Statement
    // let grade = 'B';
    // if (grade === 'F' || grade === 'D') {
    //     console.log('You failed.');
    // } else if (grade == 'C') {
    //     console.log('You passed.');
    // } else if (grade == 'B') {
    //     console.log('You passed with merit.');
    // } else if (grade == 'A') {
    //     console.log('You passed with distinction.');
    // } else {
    //     console.log('Invalid grade assigned.');
    // }

    // Switch Statement
    let grade = 'B';
    switch (grade) {
        case 'F':
        case 'D':
            console.log('You failed.');
            break;
        case 'C':
            console.log('You passed.');
            break;
        case 'B':
            console.log('You passed with merit.');
            break;
        case 'A':
            console.log('You passed with distinction.');
            break;
        default:
            console.log('Invalid grade assigned.');
    }

    // Using fall-through
    let spaPackage = 'Gold';
    switch (spaPackage) {
        case 'Diamond':
            console.log('Unlimited monthly massage treatments.');
            console.log('Three days per month stay in spa hotel.');
        case 'Gold':
            console.log('Unlimited use of spa facilities.');
            console.log('Private locker.');
        case 'Silver':
            console.log('Unlimited pool access.');
    }

    // Iteration Statements
    console.log('--- Iteration Statements ---');

    // While loop
    let h = 0;
    while (h < 10) {
        console.log('While loop. Iteration ' + h);
        h++;
    }

    // Do-While loop
    let j = 0;
    do {
        console.log('Do-While loop. Iteration ' + j);
        j++;
    } while (j < 10);

    // For loop
    for (let k = 0; k < 10; k++) {
        console.log('For loop. Iteration ' + k);
    }

    // Traversing an array
    // const names = ['Bob', 'Alice', 'Gemma', 'Jack', 'Logan'];

    // for (let n = 0; n < names.length; n++) {
    //     console.log(`Person number ${n} is ${names[n]}`);
    // }

    // Using for-of
    const names = ['Bob', 'Alice', 'Gemma', 'Jack', 'Logan'];

    for (let name of names) {
        console.log(`Person: ${name}`);
    }

    const usedCars = [
        {
            description: 'Volkswagen Golf',
            year: 2018,
            colour: 'white'
        },
        {
            description: 'Seat Ibiza',
            year: 2017,
            colour: 'black'
        },
        {
            description: 'Hyundai Ioniq 5',
            year: 2020,
            colour: 'blue'
        }
    ];

    for (const car of usedCars) {
        if (car.colour === 'black') {
            console.log(`Found a black ${car.year} ${car.description}`);
            break;
        }
    }

    // Using continue in loops
    for (let car of usedCars) {
        if (car.year < 2018) continue;
        console.log(`Found a ${car.colour} ${car.year} ${car.description}`);
    }
});
