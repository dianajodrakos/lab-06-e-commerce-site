import books from './data/books.js';
import { renderBooks } from './render-books.js';

const list = document.querySelector('#item-list');

for(let i = 0; i < books.length; i++) {
    const book = books[i];
    const listing = renderBooks(book);
    list.appendChild(listing);
}