import { books } from '../products/data/books.js';
import { calcItemTotal, findById } from '../utils.js';

export function renderLineItems(cartItem) {
    const lineItem = findById(books, cartItem.id);
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = lineItem.title;

    const td2 = document.createElement('td');
    td2.textContent = `$${lineItem.price.toFixed(2)}`;

    const td3 = document.createElement('td');
    td3.textContent = cartItem.quantity;

    const td4 = document.createElement('td');
    td4.textContent = `$${calcItemTotal(cartItem.quantity, lineItem.price).toFixed(2)}`;

    tr.append(td1, td2, td3, td4);
    return tr;
}