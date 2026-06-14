'use strict'
/*
let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is Amazing");
console.log("Hello World");

let firstName = "Abdalrhman";
console.log(firstName);

let myFirstJop = "programmer";
let myCurrentJop = "Teacher";

console.log(typeof true);
console.log(typeof js);
console.log(typeof 23);

let year;
console.log(year);
console.log(typeof year);

year = 1990;

console.log(typeof year);

console.log(typeof null);


let age = 31;
age = 30;

const birthYear = 2002;

// 5 falsy values: 0, '', undefined, null, NaN


// Function Declation
// You can call the Function declaration befor the declartion function
const age1 = calcAge(2002);

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// const age1 = calcAge(2002);
// console.log(age1);


// Function Expretion
// You can not call at after declaration
const calacAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calacAge2(2002);

// Arrow Function
const calacAge3 = birthYear => 2025 - birthYear;
const age3 = calacAge3(2002);
console.log(age3);

const yearUntilRetirment = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearUntilRetirment(2002, "Abdalrhman"));


const frindes = ['Ahmed', 'Abdalrhman', 'mohammed', 'alaa'];
const years = new Array[1990, 1995, 2000, 2002];
console.log(frindes[0]);
console.log(frindes[2]);
console.log(frindes.length);
console.log(frindes[frindes.length - 1]);

frindes.push('Omar');
console.log(frindes);


const abdalrhman = {
    firtName: 'Abdalrhman',
    lastName: 'Abuwarda',
    age: 23,
    jop: 'programmer'
}

console.log(abdalrhman.firtName);
console.log(abdalrhman['firtName']);
*/

// const markMiller = {
//     fullName: "Mark Miller",
//     mass: 78,
//     heigth: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.heigth ** 2;
//         return this.bmi;
//     },
// };

// const jhon = {
//     fullName: "Mark Miller",
//     mass: 92,
//     heigth: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.heigth ** 2;
//         return this.bmi;
//     },
// };

// markMiller.calcBMI();
// jhon.calcBMI();
// console.log(markMiller.bmi, jhon.bmi);
/*
for (let i = 0; i < 10; i++) {
    console.log(`Lifting weght repetition ${i} 🏋️`);
}
*/

const abdlarhman = [
    'Aabdalrhman',
    'Abuwarda',
    2025 - 2002,
    'programmer',
    ['Ahmed', 'Mohammed', 'Oamr'],
];

for (let i = 0; i < abdlarhman.length; i++) {
    console.log(abdlarhman[i], typeof abdlarhman[i]);
}

for (let i = abdlarhman.length - 1; i >= 0; i--) {
    console.log(i, abdlarhman[i])
};

console.log('--- ONLY STRINGS ---');