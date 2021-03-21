const bcrypt = require('bcryptjs');
const mytext = 'hello';

// const resultPromise = bcrypt.hash(mytext, 10);
// resultPromise.then( hash => {
//     console.log(hash);
// }).catch( err => {
//     console.log(err);
// });

// bcrypt.hash(mytext, 10, (err, hashText) => {
//     if (!err) {
//         console.log(hashText);
//     } else {
//         console.log(err);
//     }
// });

const makeHash = async (t) => {
    const resultPromise = await bcrypt.hash(t, 10);
    return resultPromise;
}

makeHash(mytext).then( res => {
    console.log(res);
}).catch( err => {
    console.log(err);
});

const exampleHash1 = "$2a$10$.DjJnrdzuenoUuWI461y2OB1Y/DAYe4UO1amom/xU/MEQuA1bXAzu";
const exampleHash2 = "xxxxxx";
const exampleHash3 = "$2a$10$4F6ursxkbfGVwnqnuirgleoZbAUfvh9VtbR7A/TqKICp5gVC9bwfq";

const promiseCompare1 = bcrypt.compare(mytext, exampleHash1);
const promiseCompare2 = bcrypt.compare(mytext, exampleHash2);
const promiseCompare3 = bcrypt.compare(mytext, exampleHash3);

promiseCompare1.then( res => {
    console.log(`Compare result of ${mytext} => ${exampleHash1} = ${res}`);
}).catch( err => {
    console.log(err);
});

promiseCompare2.then( res => {
    console.log(`Compare result of ${mytext} => ${exampleHash2} = ${res}`);
}).catch( err => {
    console.log(err);
});

promiseCompare3.then( res => {
    console.log(`Compare result of ${mytext} => ${exampleHash3} = ${res}`);
}).catch( err => {
    console.log(err);
});