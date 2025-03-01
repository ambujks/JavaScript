// Arrays 
const myarray = [0,1,2,3,4,5]
/*
const heroes = ["captain","ironman","thor"]

const myarray2 = new Array(1,2,3,4)
console.log(myarray[0]);

Array Methods

how to push the elements in array 
myarray.push(6)
myarray.push(6)
myarray.pop()
myarray.unshift(9) //it add the given elment in the starting of array
myarray.shift() //it remove the elment in the starting of array
console.log(myarray.includes(9)) //if element preseent in array it gives true otherwise false
console.log(myarray.indexOf(9)); //it gives us index of the given element

console.log(myarray);
*/
/*
const newarry = myarray.join()
console.log(myarray);
console.log(newarry);
console.log(typeof newarry);
*/

// slice , splice 
//console.log(myarray);/// [ 0, 1, 2, 3, 4, 5 ]

console.log("A" , myarray);
const myn1 = myarray.slice(1,3) 

console.log(myn1);// [ 1, 2 ]
console.log("B" , myarray);// [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myarray.splice(1,3)
console.log("C" , myarray);// C [ 0, 4, 5 ]
console.log(myn2);


// map , redusce , filter ,