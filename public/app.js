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
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// const invOne = new Invoice('Emre', 'design of website', 180);
// const invTwo = new Invoice('Ali', 'design of websites', 200);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, ":", inv.format());
// })
const form = document.querySelector(".new-item-form");
// If we don't use "as HTMLFormElement" we can not choose form properties!!!!
//console.log((form.children));
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
//with objects
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let userOne = addUID({ name: "Yunus", age: 30 });
//let userTwo = addUID({ name: 40, age: 30 })  We can not use number because we declared thar object must a name property with string type!!
console.log(userOne.name);
//with interfaces
// ENUM
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["PERSON"] = 0] = "PERSON";
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["SHOPPING"] = 2] = "SHOPPING";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
})(ResourceType || (ResourceType = {}));
const dataOne = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: "Yunus Emre" // we can not use obj like {name:Yunus, age:30}
};
const dataTwo = {
    uid: 2,
    resourceName: ResourceType.SHOPPING,
    data: ["egg", "bread", "milk",] // we cant use number in this array because we declared it string!
};
console.log(dataOne, dataTwo);
