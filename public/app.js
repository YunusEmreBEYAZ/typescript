// interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
import { Invoice } from "./classes/Invoice.js";
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
const itemList = document.querySelector(".item-list");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    const listItem = document.createElement("li");
    listItem.textContent = doc.format();
    itemList.appendChild(listItem);
});
