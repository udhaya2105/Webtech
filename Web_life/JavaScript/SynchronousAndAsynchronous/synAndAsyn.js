// //&Synchronous way of execution
// console.log("Program started");
// console.log("Program mid");
// for (let i = 0; i <= 120000; i++) {
//     console.log("Loading...");

// }
// console.log("Dealing with impdata");
// console.log("Program ended");

//&Synchronous way of execution
// console.log("Program started");
// console.log("Program mid");
// function handling() {
//     // for (let i = 0; i <= 120; i++) {
//     //     console.log("Loding...");

//     // }
//     console.log("Done with program");
// }
// clearTimeout(handling)
// setTimeout(handling, 5000) //!-->executes the function once after a specified delay
// setInterval(handling,2000)//!-->executes the function 
// console.log("Dealing with impdata");
// console.log("Program ended");

let interval=setInterval(()=>{
    console.log("program...");
    },1000)
setTimeout(()=>{
    clearInterval(interval)
},5000)    




