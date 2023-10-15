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
