
//example1

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says: ${greeting}`);

}


// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    return action === 'add' ? num1 + num2 : num1 - num2
}

// example 3 
type person = { name: string, age: number };

//let isLoggedIn: (obj: person) => void;

let isLoggedIn = (someOne: { name: string, age: number }) => {
    console.log(`${someOne.name} is logged in He/She is ${someOne.age} years old.`);

}
const user: person = { name: 'Yunus', age: 30 }
isLoggedIn(user)