//!creating promise

let myPromise=new Promise((resolve,reject)=>{
    console.log("I am inside executor function");
    resolve("Data is received")
    reject("Data is not received")
})
// console.log(myPromise);

//!Handling promise
//!we have two ways to handle promise
//!1.Traditional way-->1.then() 2.catch()

myPromise.then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})