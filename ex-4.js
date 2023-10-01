// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {
    add: add = (a, b) => a + b,
    subtract: subtract = (a, b) => a - b,
    multiply: multiply = (a, b) => a * b,
    divide: divide = (a, b) => a / b
};
let resultAdd = calculator.add(10, 20);
console.log(resultAdd);

let resultDivide = calculator.divide(3000, 10);
console.log(resultDivide);