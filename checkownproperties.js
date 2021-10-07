var object={
    name:"ajay"
}
if(object.memory){
    console.log("available");
}else{
    console.log("not avaialable");
}
console.log(object.hasOwnProperty("name"))
console.log("name" in object)

console.log(object.hasOwnProperty("valueOf"))
console.log("name" in object)

my_set = new set();

my_set.add(20);
my_set.add(10);
my_set.add("dcode");
my_set.add({
    name:"ajay",
    age:15
})
my_set.dd(76.89);

console.log(my_set.size);
console.log(my_set.has(76));