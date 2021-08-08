// understand the problem
// Explore concrete Example 
// Break It down 
// Solve 
// Look back / Refractor 


function solution(str) {
    // intailize object (emnpty)
    // Iteration of given string
    // check len of value exsists , if exsists calcute else initialize value 
    // return object 
    let result = {}
    for (let char of str) {
        // let checAlphanumeric = /[a-z0-9A-Z]/.test(char)

        if (isAlphanumeric(char)) {
            let lowrChar = char.toLowerCase()
            if (result[lowrChar] > 0) {
                result[lowrChar]++
            } else {
                result[lowrChar] = 1
            }
        }
    }
    return result

}

function isAlphanumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9) 
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) // lower alpha (a-z)
    {
        return false
    }
    return true
}

// solution('hello JavaSscript !!')
console.log(solution('hello JavaSscript !!'))