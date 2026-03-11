// Traditional function
function addTraditional(a, b) {
    return a + b;
}

// Arrow functions
const addArrow = (a, b) => a + b;      // same functionality as addTraditional
const double = n => n * 2;             // single parameter
const greet = () => console.log('Hello!');  // no parameters

// Test outputs
console.log("addTraditional(2, 3):", addTraditional(2, 3)); // 5
console.log("addArrow(4, 5):", addArrow(4, 5));             // 9
console.log("double(6):", double(6));                       // 12
greet();                                                     // Hello!
