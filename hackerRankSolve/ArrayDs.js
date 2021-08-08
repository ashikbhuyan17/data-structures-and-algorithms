// function reverse(arr) {
//     // console.log(arr)
//     let string = ""
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i])
//         string = string.concat(arr[i] + " ")
// string = string + (arr[i] + " ")

//     }
//     console.log(string)

// }

// arr = [4, 1, 8, 3]
// console.log(reverse(arr))




// function reverse(arr) {
//     let string = ""
//     arr.reverse().forEach((element) => {
//         string = `${element} ${string}`

//     })
//     console.log(string)

// }

// arr = [4, 1, 8, 3]
// console.log(reverse(arr))



// function reverse(a) {
//     let n = a.length;
//     let j = n - 1
//     let temp = 0
//     for (let i = 0; i < j; i++) {
//         temp = a[j]
//         a[j] = a[i]
//         a[i] = temp
//         // console.log(a)
//     }
//     return a

// }

// a = [4, 1, 8, 3]
// console.log(reverse(a))


function reverseArray(a) {
    a.reverse()
    return a
}
a = [4, 1, 8, 3]
console.log(reverseArray(a))
