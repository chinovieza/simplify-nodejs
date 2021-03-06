const myAsyncFunc = async () => {
    const result = await Promise.resolve('Hello Async !!');
    console.log(result);
}

myAsyncFunc();