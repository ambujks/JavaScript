// singleton
// Object.create
// object literals

const mySym = Symbol("key1") //creating a symbol


const JsUser = {
    name : "Ambuj",
    "Full Name" : "Ambuj Kumar Singh",
    mySym : "mykey", //this is not a symbol
    [mySym] : "mykey1",
    age : 20,
    location : "Delhi",
    email : "ambujks2002@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email) //in some cases this not work
// console.log(JsUser.Full Name); //like in this case it not working 
// console.log(JsUser["email"]); //this is another way to acess the object
// console.log(JsUser["Full Name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ambuj2345@gmail.com" //here we are changing the email
// console.log(JsUser.email);

// Object.freeze(JsUser) //we cannot change the value 
JsUser.email = "ambuj_kkk@gmail.com" 
// console.log(JsUser.email); //it will show the email of line 29 not a email of line 33

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





