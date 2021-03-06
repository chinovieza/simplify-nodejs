const step1 = () => {
    setTimeout(() => {
        console.log('The first step');
    }, 3000);
}
const step2 = () => {
    console.log('The second step');
}
step1();
step2();