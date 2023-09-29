// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {
    add: (a, b) => a + b,
    multiply: (a,b) => a*b,
    subtract: (a,b) => a-b,
    devide: (a,b) => a/b
};

let resultAdd = calculator.add(10,20);
console.log(resultAdd) // 30

let resultDevide = calculator.devide(3000,10)
console.log(resultDevide) // 300

