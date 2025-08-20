let people = ["Alice", "Bob", "Nathan"];
console.log('Our first array: ', people);

let anotherArray = new Array(15, "Blue", true, 98.7);
console.log('Another array: ', anotherArray);

// Constant arrays
const constArr = [9, 76, 12.2];
constArr[1] = 86; // This is OK.
//constArr = ["Hello"]; // This won't work

// Accessing array values
console.log('The first student is ', people[0]);

// Accessing a non-existent value
console.log('The fourth student is ', people[3]);

// Adding or modifying values
people[2] = "Tom"; // Modifying a value
people[3] = "Sarah"; // Adding a value
people[10] = "Harry"; // Adding a value with out-of-order key
console.log(people);

// Array length
console.log('The anotherArray array contains', anotherArray.length, 'items');
console.log('The people array contains', people.length, 'items');

// Array methods - push()
let students = ["Gordon", "Josephine", "Maryanne", "Joseph"];
students.push("Gail");
console.log(students);

// Array methods - splice()
students.splice(4, 0, "Angie");
console.log(students);

// Replace Josephine with Josette using splice()
students.splice(1, 1, "Josette");
console.log(students);

// Joining arrays using concat()
let moreStudents = ["Marc", "Sharon", "Jack"];
students = students.concat(moreStudents);
console.log(students);

// Delete the last item using pop()
console.log(students);
students.pop();
console.log(students);

// Delete the first item using shift()
console.log(students);
students.shift();
console.log(students);

// Delete a value without changing keys
console.log(students);
console.log('Length: ', students.length);
delete students[0];
console.log(students);
console.log('Length: ', students.length);

// Sorting with sort()
students.sort();
console.log(students);

// Reversing with reverse()
students.reverse();
console.log(students);

// A 2D Array
let contacts = [
    ["Alice", "Jones", "London"],
    ["Bob", "Barker", "New York"],
    ["Janet", "Smith", "New Delhi"],
    ["Greg", "Mortimer", "Valletta"]
];
console.log(contacts);

// Accessing an item from a 2D array
console.log(contacts[1][2]);

// A 3D Array
let studentSubjects = [
    ["Alice", "Jones", "London", ["Maths", "English", "History"]],
    ["Bob", "Barker", "New York", ["Geography", "Physics", "History"]],
    ["Janet", "Smith", "New Delhi", ["Biology", "Chemistry", "Maths"]],
    ["Greg", "Mortimer", "Valletta", ["Sociology", "Philosophy", "History"]]
];

// Printing Janet's second subject
console.log(studentSubjects[2][3][1]);

// Iterate through an array
for (const student of students) {
    console.log(student);
}

// Iterate through an array with index
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

// Iterate through an array with forEach
students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student}`);
});

// Iterate through an array with for...in
for (const index in students) {
    console.log(`Student ${parseInt(index) + 1}: ${students[index]}`);
}