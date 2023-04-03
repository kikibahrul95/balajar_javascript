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
setTimeout(function () {
    console.log(visitsCountMap);
}, 10000)

//// function parameter
const user = {
    id: 24,
    displayName: 'kiki',
    fullName: 'kiki bahrul',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

///Function
function minimal(f, h) {
    return Math.min(f, h);
}

function power(f, h) {
    return Math.pow(f, h);
}

module.exports = { minimal, power };

console.log(minimal(3, 3));
console.log(power(4, 0.5));

///Constuctor
class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // Set a random chassis number
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
}

const car1 = new Car('BMW', 'purple', 200);
const car2 = new Car('Audi', 'Aqua blue', 220);
const car3 = new Car('BMW', 'black Doff', 250);
console.log(car1);
console.log(car2);
console.log(car3);

///geter dan setter
class Mobil {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
   
  const mobil = new Mobil('BMW', 'red', 200);
  mobil.chassisNumber = 'BMW-1.0';
   
  console.log(mobil)



///getter dan setter
class Person {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const person = new Person('John', 'Doe');
  console.log(person);
  console.log(person.fullName);
   
  person.fullName = 'Fulan Fulanah';
  console.log(person);
  console.log(person.fullName);

////super

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
  
 
  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log('Pesan ini dikirim melalui via WhatsApp');
  }
}


const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hallo Teman, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hallo Teman, apa kabar?', '+6289876543210');