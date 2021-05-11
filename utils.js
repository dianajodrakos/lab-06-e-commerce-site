export function findById(array, id) {
    for(let item of array) {
        if (id === item.id) {
            console.log(item, item.id);
            return item;
        }
    }
    return null;
}

export function calcItemTotal(item, quantity) {

}