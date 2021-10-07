let re =/^(Mr||Mrs||Ms||Dr||Er)(\.)([a-zA-Z])$/i;

let str = "Mr.s"

let result = re.exec(str);
console.log(result);  