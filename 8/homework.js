//! 1
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// console.log(user.ref.name); undefined


//! 2
// let calculator = {
//     read: function(a, b) {
//         console.log(a, b);
//     },
//     sum: function(a, b) {
//         return a + b;
//     },
//     mul: function(a, b) {
//         return a * b;
//     }
// }

// calculator.read(3, 5);
// console.log(calculator.sum(3, 5));
// console.log(calculator.mul(3, 5));


//! 3
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function(){
//         console.log(this.step);
//     }
// };

// console.log(ladder);