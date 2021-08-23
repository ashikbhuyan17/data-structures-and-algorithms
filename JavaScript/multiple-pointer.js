//[-2,-3,-1,0,1,3,2]
// [-3,3]

// Naive Solution O(n^2)
// function solve(arr) {
//     let sorrtedArr = arr.sort(function (a, b) {
//         // console.log(a,b)
//         return a - b
//     })
//     // let sorrtedArr = arr.sort()
//     console.log(sorrtedArr)
//     for (let i = 0; i < sorrtedArr.length; i++) {
//         // console.log(sorrtedArr[i])
//         for (let j = i + 1; j < sorrtedArr.length; j++) {
//             console.log(sorrtedArr[i], sorrtedArr[j])
//             if (sorrtedArr[i] + sorrtedArr[j] === 0) {
//                 return ([sorrtedArr[i], sorrtedArr[j]])
//             }
//         }
//     }
//     return "not found !!"

// }
// let ans = solve([-2, -3, -1, 0, 1, 4, 2])
// console.log(ans)

// multiple pointer O(n)
function solve(arr) {
    let sorrtedArr = arr.sort(function (a, b) {
        return a - b
    })
    console.log(sorrtedArr)
    let first = 0
    let last = sorrtedArr.length - 1
    // while(first<last){
    //     let total = sorrtedArr[first] + sorrtedArr[last]
    //     if(total == 0){
    //         return [sorrtedArr[first],sorrtedArr[last]]
    //     }
    //     else if(total>0){
    //         last--
    //     }else{
    //         first++
    //     }
    // }
    for (let i = 0; i < sorrtedArr.length; i++) {
        let total = sorrtedArr[first] + sorrtedArr[last]
        if (total == 0) {
            return [sorrtedArr[first], sorrtedArr[last]]
        }
        else if (total > 0) {
            last--
        } else {
            first++
        }
    }

}

let ans = solve([-2, -4, -3, -1, 0, 1, 5, 6])
console.log(ans)