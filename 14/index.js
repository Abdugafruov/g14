//! JSON - JavaScript Object Notation

//? Obj > JSON
//? stringify
// const obj = {
//     name: "Eshmat",
//     surname: "Toshmatov"
// }

// console.log(JSON.stringify(obj, ["name"] ,5));

//? JSON > Obj
// const obj = {
//     name: "Eshmat",
//     surname: "Toshmatov"
// }

// const json = JSON.stringify(obj);
// console.log(JSON.parse(json));


//! new Date
let date = new Date;
// console.log(date);
//? .getFullYear()
// console.log(date.getFullYear());
//? .getMonth()
// const list = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "August", "Sentabr", "Octabr", "Noyabr", "Dekabr"]

// console.log(list[date.getMonth()]);
//? .getDay()
// const day = [ "Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

// console.log(day[date.getDay()]);
//? getDate()
// console.log(date.getDate());
//? getHourse()
// console.log(date.getHourse());
//? getMinutes()
// console.log(date.getMinutes());
//? getSeconds()
// console.log(date.getSeconds());
//? getMilliseconds()
// console.log(date.getMilliseconds());
//? Date.now()
// console.log(Date.now());