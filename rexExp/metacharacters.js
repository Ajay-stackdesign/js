let regex = /ajay/g;
//console.log(regex);

//let str = "asrjay is learning javascript and ahjay geeting aday by day good at javascript"
regex=/^ajar/;//^means expression will match if string starts with.
regex=/pt$/;//$ means expression will match if string ends with.
regex= /a.ay/;// matches any one character.
regex=/a*jay/; //matches o or more character.
regex = /aj?ay?t/  //?means that charatcter is optional
//regex = /a\*ay/;// if it written the same way using star then it will show else it will say null.

let str = "aay is learning javascript and aa geeting abnbhbjhbjhhbhjbhjhjbjay by day good at javascript"

let result = regex.exec(str)
console.log(result)

if (regex.test(str)){
    console.log(`the string ${str} is good when it matches ${regex.source}`);
}else{
    console.log(`the string ${str} is good and does not matches ${regex.source}`);
}