import { findById, calcItemTotal } from '../utils.js';

const test = QUnit.test;

//data to test
const goodWork = {
    id: 1,
    title: 'Good Work',
    author: 'E. F. Schumacher',
}
const labyrinths = {
    id: 2,
    title: 'Labyrinths',
    author: 'Jorge Luis Borges',
}
const myArray = [
    goodWork, 
    labyrinths
]

test('function passes array and id, returns array with matching id', (expect) => {

    // arrange
    const myId1 = 1;
    const myId2 = 2;
    const expected1 = goodWork;
    const expected2 = labyrinths;
    

    // act
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);

    // assert
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);

});test('input quantity and price, return total', (expect) => {

    // arrange
    const total = 5
    const price = 2.7
    const expected = 13.5
    
    // act
    const actual = calcItemTotal(total, price);
    
    // assert
    expect.equal(actual, expected);

});


