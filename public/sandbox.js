"use strict";
let greet;
greet = () => {
    console.log('Hello World');
};
const add = (a, b, c) => {
    c ? console.log(a + b + c) : console.log(a + b);
    ;
};
add(2, 3);
const mines = (a, b, c = 1) => {
    c ? console.log(a - b - c) : console.log(a - b);
    ;
};
mines(9, 1, 4);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello ${user.uid} times :)`);
};
const user = {
    name: 'Yunus',
    uid: 'five'
};
greet2(user);
