//&Advance Methods
//!1.map()

// let array=[1,2,3,4,5]
// for(let i=1;i<array.length;i++)
// {
//     console.log(array[i]);

// }
// function multiply(x){
//     return x*5
// }
// let NewArray= array.map(multiply)
// console.log("Org array"+array);

// console.log("NewArray"+NewArray);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let NewArr=array.map(x=>x*5) //&arrow function
// console.log(NewArr);

// array.map((item,index,orgarray)=>{
//     console.log(item,index,orgarray);

// })

//!cube of the array
// let array = [1, 2, 3, 4, 5]
// for (let i = 1; i < array.length; i++) {
//     console.log(array[i]);

// }
// function multiply(x) {
//     return x * x * x
// }
// let NewArray = array.map(multiply)
// console.log("cube of the array" + NewArray);

// //!

// let NewArr = array.map((item,index,org) => item*item*item) //&arrow function
// console.log(NewArr);

//!2.filter()
// let data=[1,2,3,4,5,6,7,8,9]
// let newData=data.map((item)=>{
//     if(item%2==0) return item
// })
// console.log(newData);
//!Even
// let data1=[1,2,3,4,5]
// let result=data1.filter((item,index,org)=>item%2===0)
// console.log(result);
// //!Odd
// let res=data1.filter((item,index,org)=>item%2)
// console.log(res);
//!filter the name length is greater than 5
// let data2=["Udhaya","Rani","Kani"]
// let newdata1=data2.filter((item,index,org)=>{
// if(item.length>5) return item})
//     console.log(newdata1);
// //!filter out the name start with odd
// let data3=["Udhaya","Rani","Kani"]
// let newdata2=data3.filter((item,index,org)=>item[0]='R')
//     console.log(newdata2);
//!filter out empty string from the array
// let data4=["Udhaya","Rani","Kani",""]
// let newdata3=data3.filter((item,index,org)=>item!=="")
//     console.log(newdata3);
//!name which consist of a
// let data5=["Udhaya","rani","rani","jo"]  
// let newData4=data5.filter((item,index,org)=>item.includes('a'))  
// console.log(newData4);

//!filter the number which consist of 5
// let data6=[345,546,756,246]
// let newData5=data6.filter((item,index,org)=>item.toString().includes('5'))  
// console.log(newData5);

//!3.reduce()

// let data7=[1,2,3,4,5,6,7,8,9,10]
// let sum=0
// for(let i=0;i<data7.length;i++){
//     sum=sum+data7[i]
// }
// console.log(sum);

// let res=data7.reduce((sum,currnum)=>sum+currnum)
// let re=data7.reduce((acc,curv)=>acc*curv)
// let resul=data7.reduce(()=>{

// },initialvalue)
// console.log(res);
// console.log(re);

// let newdata=data7.reduce((acc,x)=>{
//     return acc+x
// },100)
// console.log(newdata);

// //!find out the sum of the all the even number in the array

let data8=[1,2,3,4,5,6,7,8,9,10]
let data9=data8.filter((item,index,org)=>item%2==0)
let res=data9.reduce((sum,currnum)=>sum+currnum)
console.log(res);

