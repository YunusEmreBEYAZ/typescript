
//EXPLICIT TYPES
let character: string;
let age: number;
let isLoggedIn: boolean;

// age ='Yunus' => this will give error because we assigned age as a number

//ARRAYS
let stringArray: string[];
let initialize: string[] = [];

// In this cases we can only assign that 2 arrays string, but int the  first one we cannot use push. we get error if we try

//stringArray.push('yunus'); => Uncaught TypeError: Cannot read properties of undefined (reading 'push')

initialize.push('yunus')


//UNION TYPES

let mixed: (string | number)[] = []; // If it is array use parenthesis!

mixed.push(10);
//mixed.push(false) => This will give error because we declared our mixed array string or number

let strOrNumber: string | number;

strOrNumber = 5;
strOrNumber = 'Yunus';

//OBJECTS

let person1: object;

person1 = { name: 23, age: 'yunus' } // Thi will work beceause we assigned only as a object
person1 = ['Yunus', ' Emre'] // This will also work because arrays are objects!!!

let person2: {
    name: string,
    age: number,
    isMarried: boolean
}

person2 = {
    name: 'Yunus',
    age: 30,
    isMarried: true
}
// person2 = [] => won't work because we assigned properties

person2 = {
    name: 'Yunus',
    age: 30,
    isMarried: true,
    // hasCar: true => you can not assign new properties !!!
}


// ANY => That means our variable can take all types

let car: any;

car = 25;
car = 'Skoda';

let mixedArray: any[] = [];
mixedArray.push(1);
mixedArray.push('Yunus');
mixedArray.push(false);

let mixedObj: { name: any, age: any };
mixedObj = { name: 'yunus', age: 30 };
mixedObj = { name: 30, age: 'yunus' };



