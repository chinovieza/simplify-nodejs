const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({id:8, name:'chino'});
        // reject(new Error('Error 404 Bad request'));
    }, 2000);
});

console.log('Before asyncronous operation.');

p.then(function(result) {
    console.log('This is result: ', result);
})
.catch(function(err) {
    console.log(err.message);
});

console.log('After asyncronous operation.');