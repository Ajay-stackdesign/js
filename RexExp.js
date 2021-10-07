let reg = /ajay/
//reg = /shyam/;
//reg = /ajay/i;
///this is a regular expression literal.
//console.log(reg)
//console.log(reg.source)

let elm = "this is ajay sahani and also ajay is  great coder";
//function to mstch expression
//1.exec() - this function will return an array for match or null for no match we can run multiple times till it found 
//let result = reg.exec(elm);
//console.log(result)
//console.log(result.input)
//console.log(result.index)
/*result = reg.exec(elm);
console.log(result);
result = reg.exec(elm);
console.log(result);*/
//2)second function - test() returns true or false
// this will only print true if the "reg"is there in the string"a"
//let result2 = reg.test(elm)
//console.log(result2)

//3) match()- It will return an array of results or null.
//let result2 --> reg.match(elm) --> this is wrong!!
//let result3 --> elm.match(reg) --> this is right!!
//let result3 = elm.match(reg);
//console.log(result3);

//4) search :it will search the string if there it will return it index else it will return -1
let result5 = elm.search(reg);
console.log(result5)

let result4 = elm.replace(reg,"geeta");
console.log(result4)



