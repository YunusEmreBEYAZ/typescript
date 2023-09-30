"use strict";
// classes
// class Invoice {
//     readonly client: string;  // readonly => we can access it and use it outside of the class but we can not change it!
//     private details: string;  // private => we can't access it neither read nor change
//     public amount: number;  // public => it is default mode we can read or change it. We don't need to use it also. 
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount}€ for ${this.details}`;
    }
}
const invOne = new Invoice('Emre', 'design of website', 180);
const invTwo = new Invoice('Ali', 'design of websites', 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, ":", inv.format());
});
const form = document.querySelector(".new-item-form");
// If we don't use "as HTMLFormElement" we ca not choose form properties!!!!
//console.log((form.children));
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
