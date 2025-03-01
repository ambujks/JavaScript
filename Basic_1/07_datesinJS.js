// Dates

let myDate = new Date()
// console.log(myDate);              // 2025-01-24T06:29:17.798Z
// console.log(myDate.toString());   // Fri Jan 24 2025 11:59:17 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Fri Jan 24 2025
// console.log(myDate.toTimeString()); // 11:59:17 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()); // 24/1/2025
// console.log(myDate.toLocaleTimeString()); // 11:59:17 am
// console.log(myDate.toISOString()); //2025-01-24T06:29:17.798Z
// console.log(myDate.toJSON());      // 2025-01-24T06:29:17.798Z
// console.log(myDate.toLocaleString());  // 24/1/2025, 11:59:17 am
// console.log(typeof myDate); // Object 

/*
let myCreatedDate = new Date(2025,10,22)  //in JS month started with 0
let myCreatedDate = new Date(2025,0,22,15,3)  //last to digit are time and if we have to write the date in 24 form 12,13,14,15....
let myCreatedDate = new Date("22-11-2025")
let myCreatedDate = new Date("2025-11-22")
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleTimeString());
*/

let myCreatedDate = new Date("2025-11-22")
let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getUTCDay());

/*
newDate.toLocaleString('default',{weekday : "long"})
// console.log(newDate);
*/


