const checkAuth = (id, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authData = 'asdflalskdjfasdkfjasdkfjkjfsadfj';
            console.log('User Authenticated');
            resolve({id: id, password: password, auth: authData});
        }, 2000);
    });
}

const getStudent = (auth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: 'chinovieza', permission: 'admin'};
            resolve(data);
        }, 1000);
    });
}

const getTheResult = async () => {
    const auth = await checkAuth(1, 'abcd1234');
    const data = await getStudent(auth);
    console.log(data);
}

getTheResult();