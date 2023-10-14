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
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount}€ for ${this.details}`;
    }
}
