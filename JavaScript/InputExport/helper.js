// export const sum = a(10, 20)
const pi = 3.14
const a = 10


function summation(a, b) {
    console.log(a, b)
    return a + b
}
const subtraction = (a, b) => {
    console.log(a, b)
    return a - b
}


export { pi, a, summation as sum, subtraction }   // named export


const multiplication = (a, b) => {
    console.log(a, b)
    return a * b
}
const remainder = (a, b) => {
    console.log(a, b)
    return a / b
}

export const test = 100

export default { multiplication, remainder };

