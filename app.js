//H1
console.log("Hello, Node.js!");
//H2
const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

const sum = math.add(2, 2);
const difference = math.subtract(5, 2);

const uppercasedString = stringUtils.toUpperCase('Hello, node.js!');
const reversedString = stringUtils.reverseString('Hello, node.js!');

const currentDate = dateUtils.getCurrentDate();
const formattedDate = dateUtils.formatDate(12-02-2025);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Uppercased String: ${uppercasedString}`);
console.log(`Reversed String: ${reversedString}`);
console.log(`Current Date: ${currentDate}`);
console.log(`Formatted Date: ${formattedDate}`);
