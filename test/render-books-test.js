// IMPORT MODULES under test here:
import { renderBooks } from '../products/render-books.js';

const test = QUnit.test;

test('renders a book list item', (expect) => {

    const book = {
        id: 'good-work',
        title: 'Good Work',
        author: 'E. F. Schumacher',
        image: 'good-work.jpeg',
        description: 'A series of lectures on economics, intermediate technology, and human-centered industry.',
        pages: 223,
        year: 1979,
        language: 'English',
        publisher: 'HarperCollins Publishers',
        ISBN: '0060905611',
        category: 'theory',
        price: 2.06,
    };
    const expected = '<li class="theory"><div class="image"><img src="./assets/good-work.jpeg"></div><div class="data"><h3>Good Work</h3><h4>E. F. Schumacher</h4><p class="description">A series of lectures on economics, intermediate technology, and human-centered industry.</p><p class="metadata">223 pages | Originally Published in 1979 | HarperCollins Publishers | English | ISBN-10: 0060905611</p><p class="price">$2.06</p><p class="button"><button type="button" value="good-work">Add to Cart</button></p></div></li>';

    // act
    const dom = renderBooks(book);
    const html = dom.outerHTML;
    
    // assert
    expect.equal(html, expected);
});
