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
console.log(typeof (myInt));
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

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!"
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

//condition expressions
const isMember = true;
const discount = isMember ? 0.1 : 0;



/* AND operator */
console.log(k < 15 && i > 10);
console.log(k > 15 && i > 10);
/* OR operator */
console.log(a < 15 || b > 10);
console.log(a > 15 || b > 10);
/* NOT operator */
console.log(!(a < 15));
console.log(!(a < 15 && b > 10));
//if dan else
console.log(greeting);
//condition expressions
console.log(`Anda mendapatkan DISCOUNT sebesar ${discount * 100}%`)

///thruthy & falsy
let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}
///asigning variable
const profile = {
    firstName: "Tewi",
    lastName: "Doe",
    age: 18
}

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

//Detruscting Array
const favorites = ["Tahu Bulat", "Bakso Bakar", "Tahu Brontak", "Tempe Mendoan"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;


console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

////Destructuring Assignment (Menukar Nilai)
const kuliners = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = kuliners;

console.log(myFood);
console.log(herFood);

//map
const myMap = new Map([
    ['1', 'kunci'],
    [2, 'kunci'],
    [true, true]
]);

console.log(myMap);

////map
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("Brazialia", "Brazil");
console.log(capital.size);
console.log(capital.get("Brazialia"));
///Set
const numberSet = new Set([1, 4, 6, 4, 1, 7, 7]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
numberSet.delete(4);

console.log(numberSet);

//Weakmap
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jomblo" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

////
