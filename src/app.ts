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

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount}€ for ${this.details}`
    }
}

const invOne = new Invoice('Emre', 'design of website', 180);
const invTwo = new Invoice('Ali', 'design of websites', 200);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo)


invoices.forEach(inv => {
    console.log(inv.client, inv.amount, ":", inv.format());

})


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// If we don't use "as HTMLFormElement" we ca not choose form properties!!!!
//console.log((form.children));

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );

})

