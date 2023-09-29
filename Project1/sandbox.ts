
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
