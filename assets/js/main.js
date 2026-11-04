// console.log("Welcome to CaFe! This is ");


// need to explain variable

// var , let, const

var name = "CaFe"; // var is function scoped, can be redeclared and updated
let age = 5; // let is block scoped, can be updated but not redeclared
let isOpen = true; // const is block scoped, cannot be updated or redeclared
const rate = 4.5; // const is block scoped, cannot be updated or redeclared


// //  a person name 
let person = "Ali" //string
// let personAge = 30; //number
// let isStudent = false; //boolean
// const gender = "male"; //string

// console.log("Person name is " + person + " and age is " + personAge + " and gender is " + gender + " and is student: " + isStudent);

// person = "Ahmed"; // updating the value of person variable
// personAge = 25; // updating the value of personAge variable
// isStudent = true; // updating the value of isStudent variable

// console.log("Person name is " + person +
//     " and age is " + personAge + " and gender is " +
//     gender + " and is student: " + isStudent
// );

// // template literals
// console.log(`Person name is ${person} and age is ${personAge} and gender is ${gender} and is student: ${isStudent}`);

// // arrays
// let fruits = ["apple", "banana", "orange", "grape"];
// console.log(fruits);
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // orange
// console.log(fruits[3]); // grape

// // objects
const personOjb = {
    name: "Ali",
    age: 30,
    isStudent: false,
    gender: "male",
    greet : function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// console.log(personOjb);
// console.log(personOjb.name); // Ali
// console.log(personOjb.age); // 30
// console.log(personOjb.isStudent); // false
// console.log(personOjb.gender); // male
// console.log(personOjb.greet()); // Hello, my name is Ali and I am 30 years old.

// // // array diff data types
// let mixedArray = ["apple", 1, true, null, undefined, { name: "Ali" }, [1, 2, 3]];
// console.log(mixedArray);
// console.log(mixedArray[0]); // apple
// console.log(mixedArray[1]); // 1
//  console.log(mixedArray[2]); // true

// control flow
let number = 10;

if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// switch statement
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}


// loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// functions
// without parameters
function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();

// parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Ali");
greet("Fatema")

// return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum); // 15



// console.log(2 + 3); // 5
// console.log(4 + 5); // 9


// power function
function power(base, exponent) {
    return base ** exponent;
}

console.log(power(2, 3)); // 8


// arrow function
const powerArrow = (base, exponent) => {
    return base ** exponent;
};

console.log(powerArrow(2, 3)); // 8

// arrow function with implicit return
const powerArrowImplicit = (base, exponent) => base ** exponent;

console.log(powerArrowImplicit(2, 3)); // 8

// one parameters implicit return greeting function
const greetArrow = name => `Hello, ${name}!`;

console.log(greetArrow("Ali")); // Hello, Ali!







