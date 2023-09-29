//EXPLICIT TYPES
var character;
var age;
var isLoggedIn;
// age ='Yunus' => this will give error because we assigned age as a number
//ARRAYS
var stringArray;
var initialize = [];
// In this cases we can only assign that 2 arrays string, but int the  first one we cannot use push. we get error if we try
//stringArray.push('yunus'); => Uncaught TypeError: Cannot read properties of undefined (reading 'push')
initialize.push('yunus');
//UNION TYPES
var mixed = []; // If it is array use parenthesis!
mixed.push(10);
//mixed.push(false) => This will give error because we declared our mixed array string or number
var strOrNumber;
strOrNumber = 5;
strOrNumber = 'Yunus';
//OBJECTS
var person1;
person1 = { name: 23, age: 'yunus' }; // Thi will work beceause we assigned only as a object
person1 = ['Yunus', ' Emre']; // This will also work because arrays are objects!!!
var person2;
person2 = {
    name: 'Yunus',
    age: 30,
    isMarried: true
};
// person2 = [] => won't work because we assigned properties
person2 = {
    name: 'Yunus',
    age: 30,
    isMarried: true
};
// ANY => That means our variable can take all types
var car;
car = 25;
car = 'Skoda';
var mixedArray = [];
mixedArray.push(1);
mixedArray.push('Yunus');
mixedArray.push(false);
var mixedObj;
mixedObj = { name: 'yunus', age: 30 };
mixedObj = { name: 30, age: 'yunus' };
