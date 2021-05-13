import { books } from '../products/data/books.js';
import { renderLineItems } from './render-line-items.js';
import { findById, calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from '../cart-api.js';

const cart = document.querySelector('#cart');
const cartTotalDisplay = document.querySelector('#total');
const currentCart = getCart();

for(let item of currentCart) {
    const purchaseItem = renderLineItems(item);
    cart.append(purchaseItem);
}

const cartTotal = calcOrderTotal(currentCart, books);
cartTotalDisplay.textContent = `$${cartTotal.toFixed(2)}`;

const btn = document.querySelector('.order');


if (currentCart.length === 0 || currentCart === null) {
    btn.disabled = true;
} else {
    btn.disabled = false;
    btn.addEventListener('click', () => {
        alert(`You are purchasing: ${JSON.stringify(currentCart, true, 2)}`)
        clearCart();
        window.location.replace('./index.html');
    });
}