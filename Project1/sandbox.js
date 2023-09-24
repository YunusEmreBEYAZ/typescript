var char = "mario";
console.log(char);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
//functions
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(5));
//console.log(circle('Hello'));  We can not push number because initially we set  our function as number
//ARRAYS
var names = ['Yunus', 'Ozgur', 'Omer'];
names.push('Emin');
//names[0] = 5; //we can not change string to number
console.log(names[0]);
console.log(names);
//names.push(5);  We can not push number because initially our array is string!
// If it is mixed you can change them!
var mixed = [1, 2, 3, 'Yunus', 'Emre'];
mixed.push(150);
// OBJECTS
var person = {
    name: 'Yunus',
    age: 30
};
person.age = 55;
// person.name = 30 // we cant change property type;
// person.job = 'Web Developer' We can not add new properties !!
// We can change object itself but not the type!
person = {
    name: 'Emre',
    age: 20
};
//We can not change the initial structure(add or delete) !!
person = {
    name: 'Emre',
    age: 20
};
