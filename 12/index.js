// const result = array.every((v) => {
//   console.log(v);
//   return true;
// });
// console.log(result);
//? fill(to'ldirmoqchi bo'lgan element, boshlang'ich index, tugash index(bu kirmaydi)) => to'ldirish
// const numbers = [1, 2, 3, 4, 5];
// numbers.fill("webbrain", 1, 4); // [1, "webbrain", "webbrain", "webbrain", 5]
// numbers.fill("webbrain", 4, 8)
// console.log(numbers);
//? copyWithin(o'zgartirilayotgan qiymat index, qo'yilayotgan elementni boshlang'ich index, qo'yilayotgan elementni oxirgi index(bu kirmaydi))
// const numbers = [1, 2, 3, 4, 5]; // [4, 5, 3, 4, 5]
// numbers.copyWithin(0, 3, 5);
// console.log(numbers);
//? reduce((ikkinchi, hozirgi) => {})
// const numbers = [1, 2, 3];
// let sum = numbers.reduce((value, current) => {
//   return value + current;
// }, 0);
// console.log(sum);

// function tidyNumber(n) {
//   let isTidy = true;
//   const array = `${n}`.split("");
//   const newArray = array.map((v) => +v);
//   let sortedArray = [...newArray];
//   sortedArray = sortedArray.sort((a, b) => a - b);
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] !== sortedArray[i]) isTidy = false;
//   }
//   return isTidy;
// }
// console.log(tidyNumber(102));