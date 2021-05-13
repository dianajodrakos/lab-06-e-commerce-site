// IMPORT MODULES under test here:
import { renderLineItems } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('renders a line item in the cart', (expect) => {
    //
    const cartItem = {
            id: 6,
            quantity: 2
        }

    const expected = '<tr><td class="name">Operating Manual for Spaceship Earth</td><td>$6.00</td><td>2</td><td>$12.00</td></tr>';
    // act
    const dom = renderLineItems(cartItem);
    const actual = dom.outerHTML;
    // assert
    expect.equal(actual, expected);
});
