const name = "Ambuj"
const repocount = 2

// console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); //note : use this things to write the code (more profesional way to write.)

const gameName = new String('Shallow-ak') //String {'Shallow'} => this will be the answer
/*
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));
*/

const newString = gameName.substring(0,4) //if we pass the negative vlaue then it will ignore it.
console.log(newString)

// const anotherString = gameName.slice(0,4)
// console.log(anotherString)

const anotherString = gameName.slice(-8,2) //if we pass the negative vlaue then it will start from negative side.
console.log(anotherString)

const newStringOne = "      Ambuj        "
console.log(newStringOne)
console.log(newStringOne.trim()); //trim is a function that help to remove the starting and ending space.It only works on white space characters and line terminators.

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('Ambuj')); //this is not in link 
console.log(url.includes('Hitesh')) //in this I just write the first letter capital and its showing the false.

console.log(gameName.split('-')) //above we name the cosnt shallow-ak and here we write the code to slipt were is '-'

