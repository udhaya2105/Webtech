//!creating promise

// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside executor function");
//     // resolve("Data is received")
//     reject("Data is not received 😓")
// })
// console.log(myPromise);

//!Handling promise
//!we have two ways to handle promise
//!1.Traditional way-->1.then() 2.catch()

// myPromise.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

//!Modern way--->(async and await)
//!To Handle success and the failure state we use try and catch()
// async function HandligMyOwnPromise() {
//     let result=await myPromise
//     console.log(result);
//     }
// HandligMyOwnPromise()

//!try and catch
// async function HandligMyOwnPromise() {
//     try{
//         let result=await myPromise
//     console.log(result);
//     }catch(err){
//         console.log(err);
        
//     }
//     }
// HandligMyOwnPromise()

//!Thumb
// let Thumb=false;
// let mypro=new Promise((resolve,reject)=>{
//     console.log("I am inside executor function");
//     if(Thumb){
//      resolve("thumb is detected")
//     }
//     else{
//     reject("fail to login😓")
//     }
// })
// async function HandligMyOwnPromise() {
//     try{
//         let result=await mypro
//     console.log(result);
//     }catch(err){
//         console.log(err);
        
//     }
//     }
// HandligMyOwnPromise()

//!cafe
function orderfood() {
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log("Food is ordered 📋 ");
        resolve()
    }, 2000);
    })

}
function preparefood() {
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log("Food is prepared 🥘🥗");
        resolve()
    }, 2000)
    })

}
function takeaway() {
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log("Food is ready to take away ");
        resolve()
    }, 2000)

    })
}

//!Traditional way using then and catch
// orderfood().then(()=>{
//     return preparefood()
// }).then(()=>{
//     return takeaway()
// }).then(()=>{
//     console.log("Enjoy");
// })

//!Modern way using try and catch-->
async function HandligMyOwnPromise() {
    await orderfood()
    await preparefood()
    await takeaway()
    console.log("Enjoy your food");
    }
HandligMyOwnPromise()
