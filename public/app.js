import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('Emre', 'design of website', 180);
const invTwo = new Invoice('Ali', 'design of websites', 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, ":", inv.format());
});
const form = document.querySelector(".new-item-form");
// If we don't use "as HTMLFormElement" we can not choose form properties!!!!
//console.log((form.children));
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
