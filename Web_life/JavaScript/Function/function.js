// function print(){
//     console.log("Hello Javascript");
//     console.log("How are you?");
//     }
//     print()

// function goodmoring(){
//     console.log("good morning");

// }
// goodmoring()

// function goodafternoon(){
//     console.log("good afternoon");

// }
// goodafternoon()

// function goodevening(){
//     console.log("good evening");

// }
// goodevening()

// function greet(anything){
//     console.log("Wecome"+anything);
// }
// greet("rani")

// function greet(num)
// {
//     if(num>=9&&num<=12){
//         console.log("Good moring");
//         }
//     else if(num>=13&&num<=17){
//         console.log("Good Afternoon");

//     }
//     else if(num>=17&&num<=18){
//         console.log("Good evening");

//     }
//     else{
//         console.log("invalid");

//     }
// }
// greet(9)

// //&return Keyword

// function TotalMarks(m,c,p,e,t){
//     // console.log(m+c+p+e+t);
//     return m+c+p+e+t
// }
// let result=TotalMarks(60,70,80,70,90)
// console.log(result+5);

//&Anonymous Fuction

// let name=function(){
//     console.log("Hello I am Udhaya");

// }
// name()

//&Arrow function

//!1
// let addition=(a,b)=>a+b  //*if we have single line statement //*implicit return
// let addition=(a,b)=>{return a+b} //*Explicit return
// console.log(addition);

//!2
// let addition=a=>a+20  //*if we have single parameter
// console.log(addition);

//!3
// let addition=_=>20+20
// console.log(addition());


// let addition=function printadd(){
//     console.log(10+20);
//     }
// addition()

//&callBack function

//!passing function name as a arguement

// function add() {
//     console.log(10 + 20);
// }
// function task(fun) {  //*add function is stored inside fun
//     fun()
// }
// task(add)  //*add is a arguement value

//!passing whole function as a arguement

// function task(fun){  //*add function is stored inside fun
//     fun()
// }
// task(function () {         //*add function is a arguement value
//     console.log(10 + 20);
// }) 

//&HOF
// //!!

// function task(){  //*add function is stored inside fun
//     return function(){
//         console.log("Thank you");
//         }
// }
// let result=task()
// result()

// //!!

// function task(fun){  //*add function is stored inside fun
//     fun()
// }
// task(function () {         //*add function is a arguement value
//     console.log(10 + 20);
// }) 

//!calculator

// function add(a,b){
//     // console.log(a+b);
//     return a+b
//     }
// function sub(a,b){
//     // console.log(a-b);
//     return a-b
//     }
// function mul(a,b){
//     // console.log(a*b);
//     return a*b
//     }
// function div(a,b){
//     // console.log(a/b);
//     return a/b
//     }
// function calci(callback,a,b){
//     console.log(callback(a,b));
//     callback(a+b);
//     }  
// calci(add,10,20)              

//!Exp for hof and callback

function Greeting(callback,takeaway){
    console.log("Welcome to jestin cafe");
    console.log("You can order here...");
    callback(takeaway)
    }
function chickenBiryani(takeaway){
    setTimeout(()=>{console.log("Thank you for your order...");
    console.log("Your order biryani is getting ready");
    console.log("Here is your order...");
    takeaway()
    },5000)
    }    
function veg_chickenBiryani(){
    setTimeout(()=>{console.log("Thank you for your order...");
    console.log("Your order veg_biryani is getting ready");
    console.log("Here is your order...");
    takeaway()
    },5000)
    
    }   
function takeaway(){
    console.log("takeaway");
    
}    

Greeting(chickenBiryani,takeaway)


//!!!

// function Greeting(callback){
//     console.log("Welcome to jestin cafe");
//     console.log("You can order here...");
//     callback()
//     }
// function chickenBiryani(){
//     console.log("Thank you for your order...");
//     console.log("Your order biryani is getting ready");
//     console.log("Here is your order...");
//     }    
// function veg_chickenBiryani(){
//     console.log("Thank you for your order...");
//     console.log("Your order veg_biryani is getting ready");
//     console.log("Here is your order...");
//     } 
// Greeting(chickenBiryani)


