//&call stack have two phases 1.creation phase 2.execution phase
//&1.creation phase-->memory allocation and declaration
//&2.execution phase-->it is only for execution

//var data   //*Declaration
//data='somu //*initialization 

//!ex-1
// 

//!
// console.log(data);
// // printFun()     //&we will get error because function is now undefined()
// var printFun=function print(){
// let name='rani'
// console.log(data);
// console.log(name);
// }
// var data="somu"
// console.log(data);
// printFun()

//!Global scope
// console.log(data);
// function print(){
//     let name='rani'
//     console.log(data);
//     console.log(name); //&-->Global scope-->it is defined outside the function or a block

//     }
// var data="somu"
// console.log(data);
// print()

// //!Function scope
// console.log(data);
// function print(){
// var name='rani'    //&function scope
//     console.log(data);
//     }
// print()
// console.log(name);
// var data="somu"
// console.log(data);

//!block scope --->inside the block let and const will be block scope but var we can access outside
let flag=true
if(flag){
    // var data=100
    let data=100
    console.log("Value of data is"+data);
    }
else{
    // var data=200
    let data=200
    console.log("Value of data is"+data);
    }    
    console.log(data);
    

//!ex
let x=10;        //&updated to 20
function print(){
    x=20
    console.log(x);
    }
print()
console.log(x);

//!internal
// var data;
// console.log(data);

// data="somu"
// console.log(data);

//!lexical scope
let data1='somu'
function outerFunction(){
    let data2='rani'
    function innerFunction(){
        let data3="Raja"
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
    innerFunction()
}
outerFunction()
    



