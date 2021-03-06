const myAsync = (callback) => {
    console.log('Start');

    setTimeout(() => {
        const result = callback('Hello!');
        console.log(result);
    }, 2000);

    console.log('Finish');
}

myAsync((message) => {
    return message + ' Async.';
})