export function findById(array, id) {
    for(let item of array) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}

export function calcItemTotal(item, quantity) {
    let total = item * quantity;
    total = Math.round(total * 100) / 100;
    return total;
}