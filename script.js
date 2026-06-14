'use strict';

let apples = 5;
let oranges = 3;

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
// fruitProcessor(2, 3);

// Function Declaration
function calcAge(birthYear){
    const age = new Date().getFullYear() - birthYear;
    return `You are ${age} years old.`;
}

// Function Expression

const calcAge2 = function (birthYear) {
    const age = new Date().getFullYear() - birthYear;
}
const age3 = birthyear => new Date().getFullYear() - birthYear;

console.log(calcAge(1990));

console.log(calcAge2(1990));