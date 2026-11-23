//!Object
// let UserInfo={
//     name:"Udhaya",
//     age:21,
//     flag:true,
//     working:function(){
//         console.log("Udhaya is Working");
        
//     }
// }
// console.log(UserInfo);

//!function
// function add(a,b){
//     console.log(a+b);
    
// }
// add(10,20)
// console.log(add.name);
// console.log(add.length);

//!Passing data as a value
let data1=10
let data2=data1
console.log(data1);
console.log(data2);
console.log("Aftre update");
data2=100
console.log(data2);
console.log(data1);

//!Passing data as reference
// let Obj1={
//     name:"Udhaya",
//     age:21
// }
// Obj2=Obj1
// console.log(Obj1);
// console.log(Obj2);
// console.log("Aftre update");
// Obj2.age=22
// console.log(Obj1);
// console.log(Obj2);


//!closure

function OuterFunction(){
    console.log("OuterFunction exe Started");
    
    let ImpData=10
    function InnerFunction(){
        console.log("InnerFunction exe Started");
        
        console.log("Accessing OuterFunction value"+ImpData);
        console.log("InnerFunction exe ended");
        
        
    }
    console.log("OuterFunction exe ended");
    
    return InnerFunction
}
let result=OuterFunction()
console.log(result);






