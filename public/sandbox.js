"use strict";
//example1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says: ${greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    return action === 'add' ? num1 + num2 : num1 - num2;
};
//let isLoggedIn: (obj: person) => void;
let isLoggedIn = (someOne) => {
    console.log(`${someOne.name} is logged in He/She is ${someOne.age} years old.`);
};
const user = { name: 'Yunus', age: 30 };
isLoggedIn(user);
