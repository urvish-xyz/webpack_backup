const { add, sub } = require("./app");
require("./style.css");

console.log("Hello World");

const greet = name => `Hello ${name}`;
console.log(greet('Urvish'));

const arr = [1, 2, 3, 4]
const [a, b] = arr;
console.log(a);
console.log(b);

console.log(add(1, 2));
console.log(sub(2, 1));