//regular expression
    //basic function
    //metacharacters symbols
    //characters sets 

    //we use squre bracket to make characaters sets;

let regex= /a[a-z]ay/;//if there is any word between a to z then it will match that word
regex = /a[^aty]jay/;// if will not match a,tand y but it will match other alphabhet,(this also means character not)
regex = /a[a-zA-Z0-9]jay[jt][0-9]/i;//we can have as many as we want character sets
//regex = /a[a-zA-Z]ja[0-9]/;//it will only match one letter a or t or y if there is not there it will say null
const str = "a9jayT0 ios going gooTd"

let result = regex.exec(str);
console.log(result)
