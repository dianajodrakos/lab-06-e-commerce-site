export function renderBooks(book) {
    //make list element
    const li = document.createElement('li');
    li.className = book.category;


    // first div for product image
    const div1 = document.createElement('div');
    div1.className = 'image';
    //second div for item text data
    const div2 = document.createElement('div');
    div2.className = 'data';

    li.append(div1, div2);



    //product image nested in first div
    const img = document.createElement('img');
    img.src = `./assets/${book.image}`;

    div1 .append(img);
    
    //product text data nested in second div
    //title
    const h3 = document.createElement('h3');
    h3.textContent = book.title;
    //author
    const h4 = document.createElement('h4');
    h4.textContent = book.author;
    //description
    const p1 = document.createElement('p');
    p1.textContent = book.description;
    p1.classList = 'description';
    //metadata 1
    const p2 = document.createElement('p');
    p2.textContent = `${book.pages} pages | Originally Published in ${book.year} | ${book.publisher} | ${book.language} | ISBN-10: ${book.ISBN}`;
    p2.classList = 'metadata';
    //price
    const p3 = document.createElement('p');
    p3.textContent = `$${book.price.toFixed(2)}`;
    p3.classList = 'price';
    //button
    const p4 = document.createElement('p');
    p4.classList = 'button';
    const btn = document.createElement('button')
    btn.type = 'button';
    btn.value = book.id;
    btn.textContent = 'Add to Cart';

    p4.append(btn);
    div2.append(h3, h4, p1, p2, p3, p4);

    return li;
}