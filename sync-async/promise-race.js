const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first route to my home!');
        resolve(1);
    }, 3000);
})

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second route to my home!!');
        resolve(2);
        // reject(new Error('The second route error!!'));
    }, 2000);
})

Promise.race([myPromise1, myPromise2])
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err.message);
});