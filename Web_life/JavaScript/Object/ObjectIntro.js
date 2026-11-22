// let userInformation = {
//     name: 'somu',
//     IsLoggedIn: true,
//     age: 21,
//     reading: function () {
//         console.log("somu is reading");
//     },
//     sleeping: function () {
//         console.log("somu is sleeping");
//     }
// }
// console.log(userInformation);

//!example
// let userInformation = {
//     name: 'somu',
//     IsLoggedIn: true,
//     age: 21,
//     reading: function () {
//         console.log("somu is reading");
//     },
//     sleeping: function () {
//         console.log("somu is sleeping");
//     },
//     Favcolors:['red','green','blue'],
//     address:{
//         city:"pune",
//         pincode:1234,
//     }
// }
// console.log(userInformation);
// userInformation.reading()
// console.log(userInformation.Favcolors);
// console.log(userInformation.Favcolors[0]);
// console.log(userInformation.address.city);

//!ways to access the properties
//&by using dot notation
// let user={
//     name:"udhaya",
//     age:21,
//     flag:true
// }
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.flag);

//&by  using square bracket[]
// let user={
//     name:"udhaya",
//     age:21,
//     flag:true,
//     "Is Loggedin":true,
//     "6":Thiruvarur
// }
// let key="name"
//!adavantages 
//!1.dynamic access
// console.log(user["name"]);
// console.log(user[key]);
// console.log(user["age"]);
// console.log(user.key);

// //!2.if we have space in key we can access
// console.log(user["Is Loggedin"]);
// console.log(user.Is Loggedin);

// //!3.if we have number as key we can access
// console.log(user["6"]);
// console.log(user.6);

//&operations

// //~creation
// let userdata={
//     name:"udhaya",
//     age:21,}
// //~adding property
// userdata.luckyNo=6
// console.log(userdata);

// //~updating
// userdata.age=22
// console.log(userdata);

// //~deleting
// delete userdata.age
// console.log(userdata);

//&methods of object
// let userdata={
//     name:"udhaya",
//     age:21,
//     flag:true
// }

// //~1.key()-->it will return only keys
// console.log(Object.keys(userdata));

// //~2.values-->it will return only values
// console.log(Object.values(userdata));

// //~3.entries-->it will return key value in the form of array
// // console.log(Object.entries(userdata));
// let NewDataFormate=Object.entries(userdata)
// console.log(NewDataFormate);

// //~4.fromEntries-->it will convert back to key value from nested array
// console.log(Object.fromEntries(NewDataFormate));

//~5.Object.assign-->it is used to copy the properties into new object or existing object

// let user1={
//     name:"udhaya"
// }
// let person_Info={
//     age:20,
//     flag:false
// }
// let Info_user={
//     pass_code:'1234'
// }
// let FinalUserData=Object.assign(Info_user,user1,person_Info)
// // console.log(FinalUserData);
// console.log(Info_user);

//~6.Object.seal()-->prevents addition or deletion of new properties but we can modify or update existing data

// let emp_Info={
//     Full_Name:"Udhaya Mohan",
//     age:"21",
//     Pan_No:"234UJ6",
//     IsLoggedIn:true
// }
// Object.seal(emp_Info)
// console.log("After sealing the object data");
// delete emp_Info.Pan_No //!it is not possible
// emp_Info.age=22       //*it is possible
// emp_Info.reff="rani" //!it is not possible
// console.log(emp_Info);

//~7.Object.isSealed()

// let emp_Info={
//     Full_Name:"Udhaya Mohan",
//     age:"21",
//     Pan_No:"234UJ6",
//     IsLoggedIn:true
// }
// Object.seal(emp_Info)
// if(Object.isSealed(emp_Info)){
//     console.log("oo shit we will not do any change");
    
// }
// else{
//     console.log("come on we will do some change");
    
// }

//~8.Object.freeze()-->Addition,Updation,Deletion are not possible

//  emp_Info={
//     Full_Name:"Udhaya Mohan",
//     age:"21",
//     Pan_No:"234UJ6",
//     IsLoggedIn:true
// }
// Object.freeze(emp_Info)
// //!Deletion
// delete emp_Info.Full_Name
// //!Updation
// emp_Info.age=22
// //!Addition
// emp_Info.reff='rani'

// console.log(emp_Info);

//~9.Object.isFrozen

// let emp_Info={
//     Full_Name:"Udhaya Mohan",
//     age:"21",
//     Pan_No:"234UJ6",
//     IsLoggedIn:true
// }
// Object.freeze(emp_Info)
// if(Object.isFrozen(emp_Info)){
//     console.log("oo shit we will not do any change");
    
// }
// else{
//     console.log("come on we will do some change");
    
// }

//~10.Object.hasown()-->it will check whether the property present or not

let emp_Info={
    Full_Name:"Udhaya Mohan",
    age:"21",
    Pan_No:"234UJ6",
    IsLoggedIn:true
}
let result=Object.hasOwn(emp_Info,"Full_Name")
console.log(result);


//~11.Object.is()-->it will compare the value whether it is matching or not

let res=Object.is(emp_Info.age,"21")
let rani_Info={
    name:"rani",
    age:21
}
Object.is(emp_Info,rani_Info)
Object.is(emp_Info,{name:"rani",age:21})
console.log(res);

//~Object.defineProperty()
 
let Student={};
Object.defineProperty(Student,"name",{
    value:"Udhaya",
    writable:true,
    configurable:true,
    enumerable:true
});
for(let key in Student){
    console.log(key);
   
    
}
Student.name="rani";
delete Student.name;
console.log(Student.name);


//!Example 
// let user1 = {
//     name: "Udhaya",
//     age: 21,
//     city: "Thiruvarur",
//     skills: ["Java", "SQL", "HTML","Css","Js"],
//     hobbies: ["Reading", "Playing"],
//     isLoggedIn: true,
//     reading: function () 
//     {
//         console.log("Udhaya is reading");
//     },
//     sleeping: function () {
//         console.log("Udhaya is sleeping");
//     }
// }

// console.log(user1);

// let user2 = {
//     name: "Kani",
//     age: 21,
//     city: "Nagapattinam",
//     skills: ["Python", "Java", "CSS"],
//     hobbies: ["Singing", "Dancing"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("kani is reading");
//     },
//     sleeping: function () {
//         console.log("Kani is sleeping");
//     }
// }
// console.log(user2);

// let user3 = {
//     name: "Jestin",
//     age: 22,
//     city: "Kanyakumari",
//     skills: ["HTML", "CSS", "JavaScript","Java","Advance Java","Sql"],
//     hobbies: ["Drawing", "Reading"],
//     isLoggedIn: false,
//     reading: function () {
//         console.log("Jestin is reading");
//     },
//     sleeping: function () {
//         console.log("Jestin is sleeping");
//     }
// }
// console.log(user3);

// let user4 = {
//     name: "Aathi",
//     age: 21,
//     city: "Thiruvarur",
//     skills: ["Python", "SQL", "React","Html","Css","Js"],
//     hobbies: ["Cricket", "Music"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("Aathi is reading");
//     },
//     sleeping: function () {
//         console.log("Aathi is sleeping");
//     }
// }
// console.log(user4);

// let user5 = {
//     name: "Nithya",
//     age: 21,
//     city: "Thanjavur",
//     skills: ["Java", "HTML", "CSS"],
//     hobbies: ["Cooking", "Dancing"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("Nithya is reading");
//     },
//     sleeping: function () {
//         console.log("Nithya is sleeping");
//     }
// }
// console.log(user5);

// let user6 = {
//     name: "Raja",
//     age: 21,
//     city: "Ramanathapuram",
//     skills: ["Java","Python", "SQL", "JavaScript"],
//     hobbies: ["Football", "Reading"],
//     isLoggedIn: false,
//     reading: function () {
//         console.log("Raja is reading");
//     },
//     sleeping: function () {
//         console.log("Raja is sleeping");
//     }
// }
// console.log(user6);

// let user7 = {
//     name: "Sneha",
//     age: 21,
//     city: "Kanyakumari",
//     skills: ["React", "HTML", "CSS"],
//     hobbies: ["Painting", "Music"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("Sneha is reading");
//     },
//     sleeping: function () {
//         console.log("Sneha is sleeping");
//     }
// }
// console.log(user7);

// let user8 = {
//     name: "Bhavani",
//     age: 21,
//     city: "Mannargudi",
//     skills: ["Java", "Python", "SQL"],
//     hobbies: ["Cricket", "Swimming"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("Bhavani is reading");
//     },
//     sleeping: function () {
//         console.log("Bhavani is sleeping");
//     }
// }
// console.log(user8);

// let user9 = {
//     name: "Munesh",
//     age: 20,
//     city: "Thiruvarur",
//     skills: ["JavaScript", "HTML", "CSS"],
//     hobbies: ["Dancing", "Singing"],
//     isLoggedIn: false,
//     reading: function () {
//         console.log("Munesh is reading");
//     },
//     sleeping: function () {
//         console.log("Munesh is sleeping");
//     }
// }
// console.log(user9);

// let user10 = {
//     name: "Ajay",
//     age: 21,
//     city: "Kanyakumari",
//     skills: ["Java", "SQL", "React"],
//     hobbies: ["Gaming", "Music"],
//     isLoggedIn: true,
//     reading: function () {
//         console.log("Ajay is reading");
//     },
//     sleeping: function () {
//         console.log("Ajay is sleeping");
//     }
// }
// console.log(user10);



