let my_set = new Set();

my_set.add(20);
my_set.add(10);
my_set.add("dcode");
my_set.add({
    name:"ajay",
    age:15
})
my_set.add(76.89);

console.log(my_set.size);
console.log(my_set.has(76));

/*if (my_set.has(20)!=my_set.size){
    console.log("good start")
}else{
    console.log("not  good start")
}*/
for(let items of my_set){
    console.log(items);
}

//converting sets to aaray
const myArray=Array.from(my_set);
console.log(myArray);

