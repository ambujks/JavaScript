// const tinderUser = new Object() //single tern object
const tinderUser = {}  //non single tern object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Ambuj",
            middlename : "Kumar",
            lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname) 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //this use for find this property exit in Object or not


// Object De-Structure 

const course = {
    coursename : "JS in hindi",
    price : "free",
    courseInstructor : "Chai or code"
}

// console.log(course.courseInstructor);

const {courseInstructor : i} = course
// console.log(courseInstructor );
console.log(i);

// about API's

// in API we find data in object form like this 
// this is JSON
// {
//     "name" : "Hitesh",
//     "CourseName" : "JS in Hindi"
//     "Prize" : "free"
// }
[
    {},
    {},
    {}
]
