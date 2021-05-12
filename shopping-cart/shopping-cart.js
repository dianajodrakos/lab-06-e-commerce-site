import { cartArray } from '../data/cart.js';
import { books } from '../products/data/books.js';
import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal } from '../utils.js';

const cart = document.querySelector('#cart');
const cartTotalDisplay = document.querySelector('#total');

for(let item of cartArray) {
    const purchaseItem = renderLineItems(item);
    cart.append(purchaseItem);
}

const cartTotal = calcOrderTotal(cartArray, books);
cartTotalDisplay.textContent = `$${cartTotal.toFixed(2)}`;