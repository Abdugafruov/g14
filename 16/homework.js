//! 1
const sumTo = (a) => {
    if (a === 1) return 1;
    return a + sumTo(a - 1);
}
console.log(sumTo(100)); //? 100 + 99  + ... + 2 + 1 = 5050