import books from './data/books.js';
import { renderBooks } from './render-books.js';

const list = document.querySelector('#item-list');

for(let book of books) {
    const listing = renderBooks(book);
    list.append(listing);
}