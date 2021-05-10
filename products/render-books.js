export function renderBooks(book) {
    //make list element
    const li = document.createElement('li');
    li.className = book.category;


    // first div for product image
    const div1 = document.createElement('div');
    li.appendChild(div1);
    //second div for item text data
    const div2 = document.createElement('div');
    li.appendChild(div2);
    //third div for button text data
    const div3 = document.createElement('div');
    li.appendChild(div3);


    //product image nested in first div
    const img = document.createElement('img');
    img.src = `./assets/${book.image}`;
    div1 .appendChild(img);

    //product text data nested in second div
    //title
    const h3 = document.createElement('h3');
    h3.textContent = book.title;
    div2.appendChild(h3);
    //author
    const h4 = document.createElement('h4');
    h4.textContent = book.author;
    div2.appendChild(h4);
    //description
    const p1 = document.createElement('p');
    p1.textContent = book.description;
    p1.classList = 'description';
    div2.appendChild(p1);
    //metadata 1
    const p2 = document.createElement('p');
    p2.textContent = `${book.pages} pages | Originally Published in ${book.year}`;
    p2.classList = 'metadata';
    div2.appendChild(p2);
    //metadata 2
    const p3 = document.createElement('p');
    p3.textContent = `${book.publisher} | ${book.language} | ISBN-10: ${book.ISBN}`
    p3.classList = 'metadata';
    div2.appendChild(p3);
    //price
    const p4 = document.createElement('p');
    p4.textContent = `$${book.price.toFixed(2)}`;
    p4.classList = 'price';
    div2.appendChild(p4);

//button nested in third div
const btn = document.createElement('button')
    btn.type = 'button';
    btn.value = book.id;
    btn.textContent = 'Add to Cart';
    div3.appendChild(btn);

    return li;
}