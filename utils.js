import { books } from './products/data/books.js';
import { cartArray } from './data/cart.js';

export function findById(array, id) {
    for(let item of array) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}

export function calcItemTotal(price, quantity) {
    let total = price * quantity;
    total = Math.round(total * 100) / 100
    return total;
}

export function calcOrderTotal(cartArray, books) {
    let total = 0;
    for(let lineItem of cartArray){
        const product = findById(books, lineItem.id);
        const lineTotal = calcItemTotal(product.price, lineItem.quantity);
        total = total + lineTotal;
    }
    total = Math.round(total * 100) / 100;
    return total;
}