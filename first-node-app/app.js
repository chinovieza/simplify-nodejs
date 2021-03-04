console.log('Hello, NodeJS!');
let a = 10;
let b = 20;
console.log((a * (a + b)) - b);

const Car = require('./car');
const myCar = new Car(4, 'red', 'pick-up');
console.log(`My car's color is ${myCar.color}` );

// const settings = require('./setting');
// const databaseName = settings.databaseName;
// console.log(databaseName);

const myObject = require('./setting');
console.log(myObject.getSecretKey());
console.log(myObject.databaseName);

const { getSecretKey, databaseName } = require('./setting');
console.log(getSecretKey());
console.log(databaseName);