let regex = /aj{2}y/;//can run exactly two times
regex = /aja{0,2}y/;//a can occur exactly 0 to 2 i.e (0 or 1 or 2)times.
const str = "ajaay is a good boy";
let result = regex.exec(str);
console.log(result)