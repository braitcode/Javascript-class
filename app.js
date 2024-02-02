console.log("Hello PB");

//variables
// variables are names used to store data in javascript and in everyother language
// variable declarator are used to declare var, let, const
// in creating variables you must use the keyword i.e mention the declarator first and the variable name - declarator, varName = value
// there are rules to when to use different variables
// carmel casing means the first word must start with small letter while the second word must start with capital letter.
// variable name must not start with number and anyother character except alphabet (A-Za-z) dollar sign and underscore
// we use camelCase method of naming convention
var day = "Monday";
const myAge = 28;
console.log(day);
console.log(myAge);
let year = "January"
console.log(year);
const isMarried = false
const _date = "29/01/2024";
let $atmPin = 4223
console.log(isMarried, _date, $atmPin);
// let ==badGuy = true; this is a wrong way of creating variables
// differences between var, let and const
// var can be redeclared and reassigned
var bmi = 23.8;
console.log(23.8);

// redeclaring
var bmi = 22.5;
console.log(22.5);

// reassigning
bmi = 21.7;
console.log(bmi);

// let variable does not allow redecalring but it can be reassigned
let middleName = "PB"

// redeclaring
// let middleName = "bright"

// reassigning
middleName = "PB"

console.log(middleName);

// const does not allow for redeclaration or reassigning
// let isMarried = true; this will not work because const does not allow for redeclaration or reassigning

// Data types in JS
// - String
// - Number
// - Boolean
// - null/undefined
// - arrays
// - Object
// - BigInt
// - Symbol

// STRINGS are texts or data that are stored in either single or double quotes. most long statements we will be writing will be in strings

const str1 = 'str1'
console.log(str1);
const str2 = "str2"
console.log(str2, typeof(str2));

// NUMBERS
const gravity = 9.8
const x = "55"
console.log(gravity, typeof gravity);
console.log(bmi + gravity);
console.log(gravity + x);
console.log(x/gravity);
console.log(gravity/x);
console.log();
// you can check to know the kind of variable you are working with

// booleans are true or false statements
console.log(isMarried);
const isLoggedIn = true;
const isAuthenticated = true;
if (isLoggedIn){
    console.log("Welcome to my world");
}

// null/undefined
let food
console.log(food);
    food = null
console.log(food);

// Array is a collection of different data types that are bound/enclosed inside a square bracket. array can take in any data type. it can take another array as a child.
const fruits = ["pawpaw, orange, apple, banana, cherry"];
console.log(fruits);

// objects are similar to array but they are quite more explanatory. it is a data structure that stores data in key-value pairs e.g. key1-value1. we create objects using {}...
const myObj = {
    carbonhydrate: "Garri",
    Protein: "Beef",
    FatAndOil: "Butter",
    Vitamin: "Orange",
    Water: "Watermelon",
    Minerals: "Sea food"
}

const PB = {
    firstName: "Bright",
    lastName: "Okhumale",
    Age: 28,
    gender: "Male",
    skills: ["Fullstack Web Developer", "Graphics Designer", "Project Manager"],
    Occupation: "software developer",
    isMarried: false,
    Address: {
        city: "Ikorodu",
        state: "Lagos"
    }
}
console.log(PB.Address);

// Assignment: From the object above, print to the console the following:
// fullName = "John Doe"
// topSkill = "Javascript"
// cityOfResidence = "Ikorodu"

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName : function(JohnDoe) {
//         return this.firstName + " " + this.lastName;
//     } 
// };
// console.log(person);

const firstName = PB.firstName
const lastName = PB.lastName
const topSkill = PB.skills[0]
const fullName = firstName + " " + lastName
console.log("Full Name:", fullName);
console.log("My top skill is ", topSkill);
console.log("My city of residence is", PB.Address.city)

// String properties and methods
// properties - length, index
// string methods - toUpperCase, toLowerCase, concat, split, slice, trim, replace, substring, etc

const sch = "Techstudio Academy"
const str3 = "My name is "
const fullStatement = ""

// strings length
const strLen = sch.length 
console.log(strLen);

// index
console.log("d in 'techstudio' has index of ", sch.indexOf ("d"));
console.log("Character at index 7 is ", sch[7]);

// toUpperCase/toLowerCase
console.log(sch.toUpperCase());
console.log(sch.toLowerCase());

// concatenation of strings
// concat - this means to combine
const concatStrings1 = str3.concat(fullName);
console.log(concatStrings1);
const concatStrings2 = str3 + fullName
console.log(concatStrings2);

// Template literals -- when you want to reference any variables, you must use bactic symbol ``
const tem = `Hi there!, ${str3} ${fullName}, I am ${PB.age} year old`
console.log(tem);

// split
console.log(tem.split(","));

// slice... to slice it will take two parameters (start, end) 0, 1, 2, etc
// console.log(tem.slice(0, 30));
const slicedWord = `${tem.slice(0, 30)}...more`
console.log(slicedWord);

console.log(tem.substring(0, 30));

// Operators
// - Arithmetic operator
// - Assignment operator
// - Comparison operator
// - Logical operator

// Arithmetic Operators +, -, *, **, /, %, ++, --
let y = 20
let z = -10
console.log(x, typeof x);
let agg = Number(x) + y - z;
console.log(agg);

// personal
// let y = 60
// let z = -35
// console.log(x, typeof x);
// let agg = Number(x) + y - z;
// console.log(agg);

// modulux
// 20 % 3 = 6r2
// 10 % 6 = 4
// 40 % 2 = 0
// 5 % 2 = 1
let bes = 25 % 4
console.log(bes);

// classwork
const mySiblings = {
    firstBorn: "Courage",
    thirdBorn: "Victor",
    fourthBorn: "Wisdom",
}
console.log(mySiblings);

// Assignment operator =, +=, -=, /= ....Take note that one equals to (=) is used to assign a value
// Assignment operators are used to assign values to variables. 

let n = 8
console.log(n); // 8
// n = n + 10
n += 10
console.log(n); // 18
// n = n - 20
n -= 20
console.log(n); // -2
n /= 2
console.log(n); // -1

// Logical operators &&, ||, !
// for logical and (&&), all conditions must be true before any code inside it can run

const T = true
const F = false
const isAdult = true

// && (logical and)
console.log(T && T); // true
console.log(T && F); // false
console.log(F && T); // false
console.log(F && F); // false

// || (logical or)
console.log(T || T) // true 
console.log(T || F) // true 
console.log(F || T) // true 
console.log(F || F) // false

console.log(myAge); // 16
console.log(myAge >= 18); // false

if(myAge >= 18 && isAdult && !isMarried){
    console.log("You can take alcohol");
}

let pwd = "mypassword123";
if(pwd.length >11 && pwd.includes("#")){
    console.log("strong password");
}else{
    console.log("Your password is not strong enough!");
}

// Comparison operators are basically used to compare values e.g == (loose comparison), ===(strict comparison), !=, !==
// == loose comparison: compares the values of the variables and not data types
console.log(x); // "55"
let newNum = 55

console.log(x == newNum); // true

// === strict comparison: compares the values of the variables and their data types
console.log(x === newNum);

// Math methods: floor, ceil, random, min, max
// Math.floor is a method that does not round up figures. it returns only the whole number part of a decimal (not rounding up/down)
let num1 = 9.64577
Math.floor(num1) // 9
console.log(Math.floor(num1));

let num2 = 8.9674
Math.floor(num2) // 8
console.log(Math.floor(num2));

// ciel
// math.ceil() this round up to the nearest whole number regardless of the decimal parts
console.log(Math.ceil(num1));

let num3 = 6.7864
Math.ceil(num3) // 7
console.log(Math.ceil(num3));

// random
// Math.random is used to generate random numbers between 0 and 9
console.log(Math.random() * 1000000);
const ranNum = Math.random() * 1000000
const OTP = Math.floor(ranNum)
console.log(`Enter your secret code ${OTP} to continue`);

// personal exercise
// console.log(Math.random() * 100);
// const ranNum = Math.random() * 100
// const matricNo = Math.floor(ranNum)
// console.log(`Enter your matric number ${matricNo} to continue`)


// classwork
// let num2 = 6
// Math.random(num2) // 6
// console.log(Math.random(num2));
// const ranNum = Math.random()
// const DICE = Math.floor(ranNum)
// console.log(`Roll your dice ${DICE} to win`);

const d = Math.random() * 6
console.log(d);
const dice = Math.ceil(d)
console.log(dice);

// Conditionals if, if-else, else-if-else, switch, ternary operator
// if statements.... inside the bracket will contain your boolean condition

// if(boolean condition){
//     this is where you run your codes
// }

if(isMarried){
    console.log("Hello Mrs");
}
if(isMarried){
    console.log("Hello Mrs");
}else{
    console.log("Hello Miss")
}

// let pass = "sampleABC123#"
// if(isLoggedIn && pass.length < 8 && !pass.includes(2)){
//     console.log("Weak password");
// }else if(isLoggedIn && pass.length < 10 && pass.includes("A"))
// {
//     console.log("Moderately Strong password");
// }else if(pass.length > 10 && pass.includes("#") || pass.includes("@")){
//     console.log("Very Strong password");
// }

// else-if-else
let pass = "sample12323A"
if(isLoggedIn && pass.length < 8 && !pass.includes(2)){
    console.log("Weak password");
}else if(isLoggedIn && pass.length > 8 && pass.length <= 12  && pass.includes("A") && !pass.includes("#")){
    console.log("Moderately Strong password");
}else if(isLoggedIn && pass.length > 10 && pass.includes("#") || pass.includes("@")){
    console.log("Very Strong password");
}else{
    console.log("No Match");
}

// classwork
// Task 5
// Create a variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// a) if user is authenticated, and atmPin is correct, it should log the message "Transaction successful! Your account balance is ----"
// b) if user is not authenticated or incorrect atmPin, it should log the message "Transaction declined"

const userName = "user"
const accBal = "$5,000,000";
let atmPin = "1234"
if (userName === "user" && atmPin === "1234"){
    console.log(`Transaction successful! Account: ${accBal}`);
}else{
    console.log("Transaction failed!");
}

// Switch statement
// const rand = Math.random() * 7;
// const days = Math.floor(rand); // 0, 1, 2, 3, 4, 5, 6
// switch(days){
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Invalid Entry");
// }

// // Task 6
// // Using switch statement create a banking system that authenticate user, deposits, withdraws and check balance
// let myInput = prompt("Enter Username or PIN")
// // console.log(myInput);
// let loginPin = myInput.toLowerCase();
// console.log(myInput, loginPin);

// let accName = "Brait"
// let atmPIN = "1234";
// let deposit = "deposit";
// let withdraw = "withdraw";
// let checkbalance = "balance";
// let myAccBal = 1000;

// const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPIN;
// console.log(isAuth);

//  if(isAuth){
//      console.log("Welcome to JSF bank")
//      let transaction = prompt("What would you like to do today?").toLowerCase()

//      switch(transaction){
//         case deposit:
//              console.log("Deposit");
//             let depAmt = Number(prompt("Enter amount to deposit"))
//             console.log(depAmt);
//             myAccBal += depAmt //myAccBal = myAccBal + depAmt;
//             console.log(`Your new account balance is $${myAccBal}`);
//             break;
//         case withdraw:
//             console.log("Withdraw");
//             let witAmt = Number(prompt("Enter amount to withdraw"))
//             console.log((witAmt))
//              myAccBal -= witAmt
//              console.log(`Your new account balance is $${myAccBal}`);
//             if(witAmt > myAccBal){
//                 console.log("Insufficient Balance");
//             }
//             break;
//         case checkbalance:
//             console.log(`Your account balance is $${myAccBal}`);
//              break;
//          default:
//              console.log("Invalid transaction");
//      }
//  }else{
//      console.log("Wrong PIN or Username")
// }

// Ternary operators
// syntax:
// booleanCondition ? expression1 : expression 2

const isAdmin = true;
!isAdmin ? console.log("Login successfully") : console.log("Unauthorized user")

// Arrays
// Array properties and methods
// length, index, shift, unshift, pop, push, splice, join, sort, reverse

// length method will get the number of items in an array
const cars = ["bmw", "volvo", "toyota", "tesla", "lamboghini", "porsche", "dodge"]

// length of cars
console.log(cars.length);

// index
const bmw = cars[0].toUpperCase()
console.log(bmw);

const tes = cars[4].toUpperCase();
console.log(tes);

// to get the last item, it will always be index-length minus 1
const lastIndex = cars.length - 1;
const lastCar = cars[lastIndex];
console.log(cars[lastIndex]);

const cart = [
    {
        sardin: 12,
        egg: 5,
    }
]

let sard = cart[0].sardin
console.log(sard);
sard -= 4
console.log(sard);

// modifying Array
// let us change volvo in cars to lexus
cars[1] = "lexus";
console.log(cars[1]);
console.log(cars);

// unshift() or push() for adding one item at the beginning and at the end respectively
// unshift() - at the beginning, push() - at the end

// unshift()
cars.unshift("ford");
console.log(cars)

// push()
cars.push("ferrari");
console.log(cars);

// shift and pop are used to remove items from the beginning and at the end, respectively
cars.shift(); // ford will be removed
console.log(cars); 

cars.pop(); // ferrari will be removed
console.log(cars);

// splice can be used to remove or add. it takes in three parameters (startIndex, numDelItems, addItems)
// using splice to delete items
const del3Cars = cars.splice(2, 1);
console.log(del3Cars);
console.log(cars);

// using splice to add items
const add3Cars = cars.splice(1, 0, "mazda", "kia","honda");
console.log(cars);

// slice is used for strings when the words or items are too much and you need to reduce. you use ...
const top3Cars = cars.slice(0, 3)
console.log(top3Cars);

const middle3Cars = cars.slice(3, 6);
console.log(middle3Cars);

const last3Cars = cars.slice(6, 9);
console.log(last3Cars);

// use any javascript method to arrange the number in the array in ascending order
let mNum = [20, 40, 5, 100, 30, 15, 10, 70, 2]
const ascending = mNum.sort((a, b) => a - b)
console.log(ascending);

const descending = mNum.sort((a, b) => b - a);
console.log(descending);

// mNum.sort(function(a, b){return a-b});
// console.log(mNum);

// looping/iteration
// looping is used when you want to carry out a repetitive task or process.
// console.log("=========LOOP=========")
// console.log("I am a Fullstack Developer 1");
// console.log("I am a Fullstack Developer 2");
// console.log("I am a Fullstack Developer 3");
// console.log("I am a Fullstack Developer 4");
// console.log("I am a Fullstack Developer 5");
// console.log("I am a Fullstack Developer 6");
// console.log("I am a Fullstack Developer 7");
// console.log("I am a Fullstack Developer 8");
// console.log("I am a Fullstack Developer 9");
// console.log("I am a Fullstack Developer 10");

// for loop (for, for-of, for-in)
// while loop
// do-while

// for loop
// for(Init, condition/boolean, increment/decrement){
//     run codes in here
// }

for(let i = 1; i <= 10; i++){
    console.log(`I am a Fullstack Developer ${i}`);
}

// classwork
// for(let i = 1; i <= 12; i++){
//     for(let j = 1; j <= 12; j++){
//         console.log(i +"x" + j + "=" +s * j);
//     }
    
// }

// for(let i = 1; i <= 12; i++){
//     let multiply = 12 x i;
//     console.log(${i} x "12" = ${multiply});
// }

let i 
for(i = 1; i <=12; i++){
    if(i % 2 !==1){
        continue
    }
    console.log(`${i} x 12 = ${i * 12}`);
}

// while loop
let t = 1
while(t <= 5){
    console.log(`This is while loop ${t}`);
    t++;
}

// this is to create a multiplication table in descending order
let k = 12;
while(k > 0){
    console.log(`${k} x 12 = ${k * 12}`);
    k--;
}

// for-of
// for(const car of cars){
//      console.log(`The car brand is ${car.toUpperCase()}`);
// }

// loop through the car brand and print the name of cars that ends with letter A in your cars array
for(const car of cars){
    if(car.endsWith("a")){
        continue;
    }
    console.log(`The car brand is ${car.toUpperCase()}`);
}

// Task 10
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
// loop through the mark array and outpput the following
// "Your score is 5 you passed" (for marks > 5)
// "Your score is 3 you failed" (for marks < 5)
let mark
for(mark of marks){
    mark < 5 ? console.log(`Your score is ${mark} you failed`) : console.log( `Your score is ${mark}, you passed`)
}

// const errCode = ['E', '@', "-", 'l', '@', 'e', 'a', '@', 'r', 'n', '@', 'i', '@', 'n', 'g']

// This is a corrupted word, clean it up to get the correct word "E-learning"


const errCode = ['E', '@', "-", 'l', '@', 'e', 'a', '@', 'r', 'n', '@', 'i', '@', 'n', 'g']

// solution
let word = [];
let bug = "@"
for(w of errCode){
    if(w !== "@"){
        word.push(w)
    }
}
console.log(word);
const cleanedCode = word.join("")
console.log(cleanedCode);