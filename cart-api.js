import { findById } from './utils.js';

const cart = 'cart';

//gets cart from local storage and converts it to be accessible for our nefarious uses
export function getCart() {
    //get cart from local storage, is currently a string
    const cartString = localStorage.getItem(cart);

    //parse string into array
    const cartArray = JSON.parse(cartString);

    //account for edge case if cart diesn't exist yet
    if (cartArray) {
        return cartArray;
    } else {
        return [];
    }
}

//pushes cart array to local storage
export function setCart(cartArray) {
    //convert array into string
    const cartString = JSON.stringify(cartArray);
    //store sting in local storage
    localStorage.setItem(cart, cartString);
}

//adds item to cart
export function addItemToCart(id, quantity) {
    //store current cart in variable
    let currentCart = getCart();

    //check if item is in cart, store result array in variable
    let cartItem = findById(currentCart, id);
    //if truthy, increase qty

    //if falsey, create new item and push to array
    if (cartItem) {
        cartItem.quantity = cartItem.quantity + quantity;
    } else {
        const newItem = {
            id: id,
            quantity: quantity
        };
        currentCart.push(newItem);
    }
    setCart(currentCart);
}

export function clearCart() {
    localStorage.removeItem(cart);
}