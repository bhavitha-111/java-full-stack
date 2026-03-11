//ArrayDestructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'
const [, , blue] = colors;
const [a = 0, b = 0, c = 0, d = 0] = [10, 20];
console.log(d); 

//ArrowFunction
// Traditional function
function addTraditional(a, b) {
    return a + b;
}
const addArrow = (a, b) => a + b;      
const double = n => n * 2;             
const greet = () => console.log('Hello!');  
console.log("addTraditional(2, 3):", addTraditional(2, 3)); 
console.log("addArrow(4, 5):", addArrow(4, 5));             
console.log("double(6):", double(6));                       
greet();                                                     

//async.js
function addTraditional(a, b) {
    return a + b;
}
const addArrow = (a, b) => a + b;
const double = n => n * 2;

async function greetAsync() {
    console.log("Hello from async!");
}
console.log("addTraditional(2, 3):", addTraditional(2, 3)); 
console.log("addArrow(4, 5):", addArrow(4, 5));             
console.log("double(6):", double(6));                      
greetAsync();                                                


//callback
function greetUser(name, callback) {
const message = `Hello, ${name}!`;
callback(message);
}
greetUser('Bhavitha', function(msg) {
console.log(msg); // 'Hello, Lalita!'
});

//objectDestructuring
const user = { name: 'Harsh', age: 26, city: 'Bhopal' };
const { name, age } = user;
const { name: fullName, age: years } = user;
const { country = 'India' } = user;
console.log(country); 

//promise
const myPromise = new Promise((resolve, reject) => {
const success = true;
if (success) {
resolve('Data fetched!'); 
} else {
reject('Something failed'); 
}
});
myPromise
.then(result => console.log(result)) 
.catch(err => console.error(err));

//spreadOperatorArray
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];
console.log(combined); 
const copy = [...a];
copy.push(99);
console.log(a); 

//spreadOperatorObject
const defaults = { theme: 'dark', lang: 'en', font: 'mono' };
const userPrefs = { lang: 'hi', fontSize: 14 };
const config = { ...defaults, ...userPrefs };
const clone = { ...defaults }  
console.log(clone);
