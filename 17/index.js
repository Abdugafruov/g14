//! Fibonacci
// const fibonacci = (n) => {
// 	if(n < 1) return 1;
// 	else return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// 1
// f(4) + f(3)
// 2
// f(3) + f(2) + f(2) + f(1)
// 3
// f(2) + f(1) + f(1) + 1 + f(1) + 1 + f(1)
// 4
// f(2) + 4 * f(1) + 1 + 1
// f(1) + f(0) + 4 * f(1) + 1 + 1
// 5
// 5 * f(1) + 2 + 1
// 5 * (f(0) + f(-1)) + 2 + 1
// 5 * (1 + 1) + 2 // 12 + 1 = 13