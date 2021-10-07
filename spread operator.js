var elm = [12,12,12];
var arr = [...elm];
elm[0]=15;
arr[0]= 18
console.log(arr);
console.log(elm)

let res = {name:"ajay",surname:"sahani"};
let abc = {...res};
res.name="geeta";
console.log(res);
console.log(abc)

//destructing arrays
myFrameLang=["js","node.js","react.js","express.js","django","python"];

//let [lang1,lang2,lang3,lang4,lang5,lang6]=myFrameLang;
//console.log(myFrameLang);

let[top1,,,,,top6]=myFrameLang;
console.log(`my favourit lang is ${top1} and the most fovorite lang is ${top6}`);


//object destructing :

const opertor={
    lathe:"four inch",
    milling: "vmc",
    cnc : "four inch",
    operators :{
        lathe:4,
        milling: 20,
    }
}

let {lathe,milling,cnc,operators}=opertor

console.log(`the operator on lathe is ${lathe} an the milling operator is ${milling} and 
workers are ${operators.lathe} and ${operators.milling}`);