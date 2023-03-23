console.log('helloword');


let o = 30;
let p = 9;

console.log(o + p)
console.log(o - p)
console.log(o * p)
console.log(o / p)
console.log(o % p)

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);

const bigNumber = 1234567n;
const myInt = 1234567890123456789012345678901234567890;
const a = 10;
const b = 10;

let isGreater = a == b;
let isLess = a < b;

//assigment operator
let x = 10;
let y = 100;

x += y;

//perbandingan
const aString = '10';
const aNumber = 10

///
let k = 10;
let i = 12;


console.log(bigNumber);
console.log(myInt);
console.log(typeof(myInt));
console.log(isGreater);
console.log(isLess);
//assigment operator
console.log(x);
///perbandingan
console.log(aString == aNumber)
console.log(aString === aNumber)
//if and else
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}



/* AND operator */
console.log(k < 15 && i > 10); 
console.log(k > 15 && i > 10);
/* OR operator */
console.log(a < 15 || b > 10); 
console.log(a > 15 || b > 10); 
/* NOT operator */
console.log(!(a < 15));
console.log(!(a < 15 && b > 10));
console.log(greeting);