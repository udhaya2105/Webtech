//&Array
let data=[1,2,3,4] //!homogenous 
console.log(data);

let data1=["udhaya",21,true] //!heterogenous 
// console.log(data1);
// console.log(typeof data1);
// console.log(data[1]);
data1[1]=90                //!mutable
console.log(data1);

//!length
console.log(data1.length);

//!function
let data2=["Udhaya",21,true,function(){console.log("Hello i am inside array as item")}]
console.log(data2[4]);
data2[3]()

//!constractor
let array=new Array(10,20,30,40,50)
console.log(array);

//!
let array1=new Array(10) //!paasing single value it will be consider as length of an array
console.log(array1);
console.log(array1.length);

//!static methods
//!Array.from
let data3="Udhaya"
console.log(Array.from(data3));

//!function
let data4=[1,2,3,4,5]
console.log(Array.from(data4,(num)=>num*5));

//!convert string into array add zero
let data5="javascript"
let data6=(Array.from(data5,(num)=>num+0));
console.log(data6.toString().replaceAll(",",""));

//!Array.isArray
let data7=[1,2,3,4]
// console.log(Array.isArray(data7));
if(Array.isArray(data7)){
    console.log("Data received in the form of Array")
    }
else{
    console.log("Data not received in the form of Array")
}    

//!Array.of()
console.log(Array.of(1,2,3,4,5,6));
console.log(Array.of(10)); //!it will consider as array only not length




