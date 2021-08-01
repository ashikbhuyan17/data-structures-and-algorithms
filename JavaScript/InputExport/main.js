// named import
//default import
// import { pi, a } from './helper.js'; 
// console.log(pi, a)
import { pi as p, a as b, sum, subtraction } from './helper.js';  // as means alias

console.log(p, b)
// import * as test from './helper.js';
// console.log(test.pi) // object akare sob export value gula pabo


// summation
console.log(sum(10, 20))

// subtraction
console.log(subtraction(20, 10))


//multiplication
import multiplicationRemainder, { test } from './helper.js'; // default import => {} use korthe hoi na bt named import e lagbe must
// here test is named import uses {} and multiplicationRemainder is a default import
console.log("object = ", multiplicationRemainder)
console.log("multiplication is = ", multiplicationRemainder.multiplication(20, 20))
console.log("remainder is = ", multiplicationRemainder.remainder(20, 10))
console.log("test value is = ", test)