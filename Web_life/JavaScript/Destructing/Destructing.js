//&Destructing-->breaking big structure of array into smaller pieces

let colors=['red','green','blue','white','black']
// console.log(colors[2]);
// console.log(colors[4]);
// console.log(colors[0]);
let[,,,b]=colors
// let[r]=colors
// let[b]=colors
// console.log(r);
// console.log(g);
console.log(b);

let userData={
    firstname:"Udhaya",
    lastname:"Mohan",
    age:21,
    IsLoggedIn:true
}
let {firstname,IsLoggedIn,lastname}=userData
let {firstname:ln,IsLoggedIn:is,lastname:ls}=userData
console.log(userData.firstname);
console.log(firstname);
console.log(IsLoggedIn);
console.log(lastname);
console.log(ln);







