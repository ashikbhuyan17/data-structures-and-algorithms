// program to insert an item at a specific index into an array
// start → index where to insert the element
// deleteCount → 0 (because we don’t need to delete element)
// elem → elements to insert
function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();