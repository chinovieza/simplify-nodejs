const path = require('path');
const pathObject = path.parse(__filename);
console.log(pathObject);

const os = require('os');
const freeMemory = os.freemem();
console.log(freeMemory);
const user = os.userInfo();
console.log(user);
const totalMemory = os.totalmem();
console.log('Total memory is: ' + totalMemory);
console.log(`Total memory is: ${totalMemory}`); //ES6

const fs = require('fs');
fs.readdir('./', function(err, files) {
    if (err) {
        console.log('We got this error: ', err);
    } else {
        console.log('List of files are: ', files);
    }
});
var files2 = fs.readdirSync('./');
console.log('Result is: ', files2);