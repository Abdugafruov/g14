// console.log("job" in proxyUser);
//? deleteProperty(target, prop)
// let proxyUser = new Proxy(user, {
//   deleteProperty(target, prop) {
//     if (prop === "_password") throw new Error("Siz parolni o'chira olmaysiz!");
//     else return delete target[prop];
//   },
// });
// delete proxyUser.job;
// console.log(proxyUser);
//! Reflect
// let user = {
//   login: "frontend",
//   job: "programmer",
//   _password: 12345,
// };
//? get(target, prop)
// console.log(Reflect.get(user, "login"));
// console.log(user.login);
//? set(target, prop, newValue)
// Reflect.set(user, "job", "doctor");
// console.log(user);