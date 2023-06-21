import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js'
import { hasFormatter } from './interfaces/hasFromatter.js';

// let docOne: hasFormatter;
// let docTwo: hasFormatter;

// docOne = new Invoice('yoshi', 'web work', 300);
// docTwo = new Payment('mario', 'plumming work', 250);

// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigio', 'work on the luigio website', 300);

// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv)=> {
//     console.log(inv.client, inv.amount, inv.format())
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

let ul = document.querySelector('.item-list') as HTMLUListElement;
console.log(ul);
const list = new ListTemplate(ul);
    

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    
    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]
    let doc: hasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }
    else{
        doc = new Payment(...values); 
    }
    list.render(doc, type.value, 'start');
    console.log(doc);
})