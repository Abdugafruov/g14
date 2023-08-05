//! Array 1/2

//? 1
// const arry = [1, "hello", true, () => {}];

// console.log(arry);
//? 2
// const arry = new Array(50)

// console.log(arry);

//? length
// const arry = new Array(50);

// console.log(arry.length);

//? accasing
//? 1
// const arry1 = [1, 2, 3, 4, 5];

// console.log(arry1[1]);
//? 2
// const arry2 = [1, 2, 3, 4, 5]

// console.log(arry2.at(-2));

// 
// const arry1 = [1, 2, 3];
// const arry2 = [1, 2, 3];

// arry1[1] = "hello";
// arry2.at(1) = "hello" //error

// console.log(arry1);
// console.log(arry2);

//? join
// const arry = [1, 2, 3, 4];

// console.log(arry.join("*"));

//? concat
// const arry1 = [1, 2];
// const arry2 = [3, 4];

// console.log(arry2.concat(arry1));

//? isArray
// const arry = [1, 2, 3];

// console.log(typeof arry);
// console.log(Array.isArray(arry));


//! Methods
//? push
// const ary = [1, 2, 3, 4];

// console.log(ary.push(3));
//? pop
// const ary = [1, 2, 3, 4];

// console.log(ary.pop());

//? slice
// const ary = [1, 2, 3, 4, 5];

// console.log(ary.slice(0, -2));

//? splice
// const ary = [1, 2, 3, 4, 5];
// ary.splice(1, 2, "hello", "hello");
// console.log(ary);

//? indexOf, lastIndexOf
// const ary = [1, 2, 3, 4, 5];

// console.log(ary.indexOf(3));
// console.log(ary.lastIndexOf(2));

//? includes()
// const ary = [1, 2, 3, 4, 5, 6];

// console.log(ary.includes(6));

//? reverse()
// const ary = [1, 2, 3];

// console.log(ary.reverse());