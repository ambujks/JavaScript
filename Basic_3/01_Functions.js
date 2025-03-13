function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("B");
    console.log("U");
    console.log("J");
}
// sayMyName()

/*
function addTwoNumber(number1 , number2){
    console.log(number1 + number2);
}
addTwoNumber(3,4)  //7
addTwoNumber(3,"4") //34
addTwoNumber(3,"a") //3a
addTwoNumber(3,null) //3
*/
/*
function addTwoNumber(number1 , number2){
    let result = number1 + number2
    return result
}
*/
function addTwoNumber(number1 , number2){
    return number1 + number2
}
const result = addTwoNumber(3,6)
// console.log("Result : ",result)

function loginUserMessage(username){
    if(username === undefined){               //or we can also write in this way => if(!username){}
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ambuj")) //Ambuj just logged in
// console.log(loginUserMessage("")) //just logged in
// console.log(loginUserMessage()) //Undefined just logged in

function loginUserMessage(username = "Sam"){
    if(!username){               
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ambuj"))


// New Video (20)

// ... => this rest operator

function calculateCartPrice(...num1){     
    return num1
}
console.log(calculateCartPrice(200,400,500));  //if we pass more than 1 value than it will always show us the first vlaue of we use rest operator to print all the values

function calculateCartPrice (val1 , val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,800,600));

const user = {
    username : "Ambuj",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) 
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]))