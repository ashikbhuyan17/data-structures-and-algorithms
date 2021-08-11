// function reverce(originalArray) {
//     console.log(originalArray)
//     let rightIndex = 0
//     let leftIndex = originalArray.length
//     while (rightIndex < leftIndex) {
//         console.log(originalArray[rightIndex])
//         console.log("a")
//         rightIndex++;
//         leftIndex--;

//     }
// }
function reverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;

    while (leftIndex < rightIndex) {

        // Swap the elements with temp variable
        console.log(originalArray[rightIndex])
        let temp = originalArray[leftIndex];  // 0 index, value 1
        originalArray[leftIndex] = originalArray[rightIndex];  // 5 index, value 6
        originalArray[rightIndex] = temp;  // 5 index swap index 0

        // Move indices to the middle
        leftIndex++;
        rightIndex--;
    }
    return originalArray;
}

const originalArray = [1, 2, 3, 4, 5, 6]
console.log(reverse(originalArray))