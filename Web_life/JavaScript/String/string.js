//&using double quoates
let name="Udhaya"
console.log(typeof name);

//&using single
let name1='Udhaya'
console.log(name1);

//&using backtick
let name2=`Udhaya`
console.log(name2);

//&string concatination
firstname="udhaya"
lastname="mohan"
console.log(`My name is "${firstname} ${lastname}`);


//!string methods
//!static method
//&1.String.fromCharCode
console.log(String.fromCharCode(65,66,67,68,69));

//&2.String.fromCodePoint
console.log(String.fromCodePoint(65));

//&3.String.raw
console.log(String.raw `hello\nworld`);

//!Instance methods
//&1.charAt()
let str='Udhaya'
console.log(str.charAt(0));

//&2.charCodeAt()
let str1='Udhaya'
console.log(str1.charCodeAt(2));

// //&3.codePointAt()
// let str2='Udhaya'
// console.log(str2.fromCodePoint(a));

//&4.concat
let str3='Udhaya'
let str4='mohan'
console.log(str3.concat('',str4));

//&5.endwith()
let str5='Udhaya'
console.log(str5.endsWith('a'));

//&6.includes()
let str6='Udhaya'
console.log(str6.includes('aya'));

//&7.indexOf()
let str7='Udhaya'
console.log(str7.indexOf('U'));

//&8.LastIndexOf
let data='Udhaya'
console.log(data.lastIndexOf("U"));

//&9.split(spera,limit)
let str8="Javascript is wonderful language"
console.log(str8.split(" "));
console.log(str8.split(""));
console.log(str8.split("",5));

//&10.toUpperCase()
let str9="Javascript is wonderful language"
console.log(str9.toUpperCase());

//&11.toLowerCase()
let str10="Javascript is wonderful language"
console.log(str10.toLowerCase());

//&12.trim()
let str11=" Javascript is wonderful language "
console.log(str11.length);
console.log(str11.trim());
console.log(str11.trim().length);
console.log(str11);

//&13.trimStart()
let str12=" Javascript is wonderful language "
console.log(str12.trimStart())
console.log(str12.trimStart().length);

//&14.trimEnd()
let str13=" Javascript is wonderful language "
console.log(str13.trimEnd())
console.log(str13.trimEnd().length);

//&15.starstWith()
let link="https://www.google.com"
console.log((link.startsWith("https")));

//&16.endsWith()
let data1="image.jpg"
console.log(data1.endsWith(".jpg"));

//&17.repeat()
let data2="Udhaya"
console.log(data2.repeat(6));

//&18.padStart()
let data3="66"
console.log(data3.padStart(10,'4'));

//&19.padEnd()
let data4="Udhaya"
console.log(data4.padEnd(10,'M'));

//&20.replace()
let data5="ramu ramu"
console.log(data5.replace("ra",'so'));

//&21.replaceAll()
let data6="ramu ramu"
console.log(data6.replaceAll("ra",'so'));

//&22.toString()
let data7=new String("hello")
console.log(data7)
console.log(typeof data7);
console.log(typeof data7.toString());

//&Slice and substring
let data8="javascript is wonderful language"

//&slice
console.log(data8.slice(4))
console.log(data8.slice(11,22));
console.log(data8.slice(-15,-17));
console.log(data8.slice(22,11));
console.log(data8.slice(-7,-15));

//&substring
// console.log(data8.substring(4))
// console.log(data8.substring(11,22));
// console.log(data8.substring(-15,-17));
// console.log(data8.substring(22,11));
// console.log(data8.substring(-7,-15))

//&toLocaleLowerCase
let str14="Javascript is wonderful language"
console.log(str14.toLocaleLowerCase())

//&toLocaleupperCase
let str15="Javascript is wonderful language"
console.log(str15.toLocaleUpperCase())

//!!without using length
// let str16="JavaScript is wonderful language"
// console.log(str16.length);
// let count=0;
// for(let i=0;i<str16.length;i++)
// {
//     count++;
// }
// console.log(count);
//!count the charaters except space without length


// let str16="JavaScript is wonderful language"
// let i=0;
// let count=0;
// while(str16.charAt(i)!=" ")
// {
//     count++;
// }
// console.log(count);

//!vowels
// let str17="JavaScript is wonderful language"
// let count1=0;
// for(let i=0;i<str17.length;i++)
// {
//     // let c=str17.charAt(i)
//     // if(c=='A'||c=='E'||c=='I'|c=='O'||c=='U'||c=='a'||c=='e'||c=='i'|c=='o'||c=='u')
//     // {
//     //     count1++;
//     // }
//     if("aeiou".includes(str17[i]))
//          {
//             count1++
//          }
// }
// console.log(count1);

//!convert the first charater to uppercase

let str18="JavaScript is wonderful language"
// let res=str18.charAt(0)
// console.log(str18.charAt(0).toUpperCase()+str18.slice(1));

// console.log(res.toUpperCase());
// console.log(str18);
// console.log(res);

//!
let res=str18.replaceAll(" ","");
console.log((res));

