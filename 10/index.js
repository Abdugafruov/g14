//! Quotes
// let str1 = "str";
// let str2 = 'str';
// let str3 = `str ${str1}`;

// console.log(str1, str2, str3);

//! Constractor
// let str = new String("webbrain academy");

// console.log(str);

//! Special characters
// let str = "webbrain \n academy"; new line
// let str = "webbrain \t academy"; tap
// let str = "webb\"rain academy" \ ignore chars 

// console.log(str);

//! Methods
//? lenght
// let str = "webbrain"
// console.log(str.length);
//? toUpperCase, toLowerCase
// let str1 = "webbrain academy";
// let str2 = "WEBBRAIN ACADEMY";

// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str1.toLocaleUpperCase());
// console.log(str2.toLocaleLowerCase());
//? indexOf()
// let str = "webbrain academy"
// console.log(str.indexOf("in", 5));
// console.log(str.lastIndexOf("a"));
//? inCludes
// let str = "webbrain academy";
// console.log(str.includes("bb"));
//? .startsWith, .endsWith
// let str = "webbrain academy";

// console.log(str.startsWith("web"));
// console.log(str.endsWith("emy"));
//? padEnd, padStart
// let str = "bilol"

// console.log(str.padEnd(6, "."));
// console.log(str.padStart(6, "."));
//? slice
// let str = "webbrain"

// console.log(str.slice(0, 3));
//? eval()
// console.log(eval("5*5"));
//? trim, trimStart(), trimEnd()
// let str = "     webbrain academy     ";

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
//? split()
// let str = "webbrain academy";

// console.log(str.split(""));
//? concat()
// let str = "webbrain academy";

// console.log(str.concat("hello", "hiy", "hghfvghb"));
//? valueOf
// let str = new String("webbrain academy");

// console.log(str.valueOf());
//? replace()
// let str = "web rain aca web demy";

// console.log(str.replace(/web/gi, "WEB"));