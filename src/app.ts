// interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const user1: IsPerson = {
//     name: "Yunus",
//     age: 30,
//     speak(msg: string): void {
//         console.log(msg);

//     },
//     spend(cost: number): number {
//         console.log(`${this.name} spend, ${cost}`);

//         return cost;

//     }
// }

// console.log(user1.spend);

// const greetPerson = (person: IsPerson) => {
//     console.log("Hello", person.name, "how was your day?");
// }

// greetPerson(user1);

import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

// const invOne = new Invoice('Emre', 'design of website', 180);
// const invTwo = new Invoice('Ali', 'design of websites', 200);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo)


// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, ":", inv.format());

// })


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// If we don't use "as HTMLFormElement" we can not choose form properties!!!!
//console.log((form.children));

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end")

})


// GENERICS

//with objects
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}

let userOne = addUID({ name: "Yunus", age: 30 })
//let userTwo = addUID({ name: 40, age: 30 })  We can not use number because we declared thar object must a name property with string type!!
console.log(userOne.name);




//with interfaces

// ENUM
enum ResourceType { PERSON, BOOK, SHOPPING, FILM }
interface Resource<T> {
    uid: number;
    resourceName: ResourceType; // with this assignment we can choose one of the indexes from enum
    data: T //with theese structure we can choose different types for data for different interfaces!
}

const dataOne: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.PERSON, //when we choose it we will se it as a number on console or where we want
    data: "Yunus Emre" // we can not use obj like {name:Yunus, age:30}
}

const dataTwo: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.SHOPPING,
    data: ["egg", "bread", "milk",] // we cant use number in this array because we declared it string!
}

console.log(dataOne, dataTwo);
