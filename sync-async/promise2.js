const getStudent1 = (id, callback) => {
    setTimeout(() => {
        const name = 'chino';
        callback({id: id, name: name});
    }, 2000);
};

const result1 = getStudent1(3, (result) => {
    console.log(result);
});

const getStudent2 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name2 = 'tony';
            resolve({id: id, name: name2});
        }, 3000);
    });
};

const getStudent3 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name3 = undefined
            if (name3) {
                resolve({id: id, name: name3});
            } else {
                reject(new Error('Cannot get result'));
            }
            
        }, 4000);
    });
};

const result2 = getStudent2(4);
result2.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
})

getStudent2(5).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.message);
});

getStudent3(6).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.message);
});

const myPromise1 = Promise.resolve({foo:'bar'});
const myPromise2 = Promise.reject(new Error('You have got error'));
myPromise1.then((res) => {
    console.log(res);
});
myPromise2.catch((err) => {
    console.log(err.message);
});