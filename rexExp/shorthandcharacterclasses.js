//character classes
//word character is \w is [a-z,A-z,o-9]
let regex = /\word/;//it has word chatracter -,_,alphabhet o numeric it ,means it will found a word a number after that or befor that as ypou have applied
regex = /\w+ord/;//here + means numbers of alphabhet or numbers 
regex = /\Wis/;//capital w means non-word character
regex = /\W+is/;//one or more than one non character word
regex = /\d999/;//this is digit it will match only digit
let str = "0jhfhsksdgkjsdgkjsdhgkdgh98t___u8w8wetuord *&%$#is always  8999999"

let result = regex.exec(str);
console.log(result)