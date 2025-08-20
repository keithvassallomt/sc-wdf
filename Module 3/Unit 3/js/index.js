function simpleGreeting() {
    console.log('Hello there!');
}

function showMessage(message) {
    let currentContent = document.getElementById("messageArea").innerHTML;
    currentContent += `<br>${message}`;
    document.getElementById("messageArea").innerHTML = currentContent;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1 = 10, num2 = 4) {
    return num1 - num2;
}

function greetPerson(x) {
    return `Hello, ${x}`;
}

let personGreet = x => `Hello, ${x}`;


simpleGreeting();
showMessage("Hello from a function!");
showMessage(`4 + 19 = ${add(4, 19)}`);
showMessage(`Subtract: ${sub()}`);
showMessage(greetPerson("Bob"));
showMessage(personGreet("Alice"));

const cities = ["London", "Barcelona", "Beijing", "Perth"];
cities.forEach(e => showMessage(`${e} is a city`));

// Variable scope
function myFunction(a) {
    let b = 100;
    showMessage(`Inside the function. a: ${a}`);
    showMessage(`Inside the function. b: ${b}`);
}

let c = 50;
showMessage(c);
showMessage(`Outside the function. c: ${c}`);
//showMessage(`Outside the function. b: ${b}`);

// let vs var
function mySecondFunction() {
    if (true) {
        var x = "I am x!";
        let y = "I am y!";
    }
    showMessage(`Inside function, x: ${x}`);
    //showMessage(`Inside function, y: ${y}`);
}

mySecondFunction();

// Global variables
let cityName = "Carlisle";

function getTemperature() {
    let temp = 0;
    if (cityName == "Carlisle") {
        temp = 14;
    } else if (cityName == "Valletta") {
        temp = 23;
    }
    showMessage(`Temperature in ${cityName} is ${temp}C`);
}

getTemperature();

// Callback functions
// let showTime = () => showMessage(new Date());
// setTimeout(showTime, 5000);
// showMessage("The time will appear in 5 seconds.");

setTimeout(() => showMessage(new Date()), 5000);
showMessage("The time will appear in 5 seconds.");

