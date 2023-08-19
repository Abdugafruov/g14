// let months = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avgust",
//     "Sentabr",
//     "Oktabr",
//     "Noyabr",
//     "Dekabr",
//   ];

// let moment = () => {
//   let date = new Date;
//   return {
//     format (a) {
//       switch(a){
//         case "dddd": return months[date.getMonth()];
//         case "MMMM Do YYYY, h:mm:ss a": return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 13 ? "PM" : "AM"}`;
//         case "MMM Do YY": return `${months[date.getMonth()]} ${date.getDate() + "th"}`
//         default: return date;
//       }
//     }
//   }
// }
// console.log(moment().format());