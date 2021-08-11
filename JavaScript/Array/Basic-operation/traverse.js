let array = ['Item 1', 'Item 2', 'Item 3'];

// Here's 4 different ways
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

for (let index in array) {
    console.log("inds of ",index)
    console.log(array[index]);
}

for (let value of array) {
  console.log(value); // Will log value in array
}

array.forEach((value, index) => {
//   console.log(index); // Will log each index
//   console.log(value); // Will log each value
  console.log([index ,value])
});