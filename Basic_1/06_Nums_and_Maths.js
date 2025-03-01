/*
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString())

*/ 
// ********************** Maths **********************

// console.log(Math);

// console.log(Math.abs(4)); //help to change negative value into posstive value

// console.log(Math.round(4.6)); //value to round of kar deta hai.

// console.log(Math.ceil(4.2));  //ye gretest number ki tarf jata hai (isme 5 answer aayega)
// console.log(Math.floor(4.9)); //ceil ka ulta

// console.log(Math.min(1,2,3,45)); //help to find lowest number in array
// console.log(Math.max(1,2,3,45)); //help to find largest number in array

console.log(Math.random()); //ye 0 and 1 ke bich me koisa bhi number dega
console.log((Math.random()*10) + 1); // *10 karne se hmari ek point sift ho jayegi or +1 karne se value 1 se suru hogi intend of 0
console.log(Math.floor(Math.random()*10)+1); //floor hamne uper use kiya tha to vahi karega

/*
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
*/

/*
We can use this in dice game 
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + 1);
*/

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + 1);



