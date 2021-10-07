// creating a map by using (new Map):method
let elm = new Map([
    ["apples",500],
    ["banana",400],
    ["grapes",300]
]);
console.log(elm.get("apples"));

//map.set() :adding a elements to a map.

elm.set("orange",400);
//repacing the value of banana by 400 to 100:
//object.set(keys,values)
elm.set("banana",100)

console.log(elm)

//map.get(is used for the value in the key.)
console.log(elm.get("banana"))

// map.size this property returrns how much elements in a map.
let list = new Map([
    ["name","ajay"],
    ["age",15],
    ["division",20]
])

console.log(list.size)

//map.delete (this method is used to delete a elements in a map )
//map.delete()
let dt = new Map([
    ["apples",13],
    ["banana",90],
    ["orange",78]
]);

dt.delete("apples")
console.log(dt)

//map.clear()the clear methods removes all the elements from the map.
let zoo = new Map([
    ["zebra",10],
    ["lions",20],
    ["horse",5]
]);
let out = zoo.clear();
console.log(out)

//map.has():this method returns true if a key exists in a map 

let gerden= new Map([
    ["roses",23],
    ["flower",24],
    ["sunflower",80]
]);
gerden.delete("roses");
console.log(gerden.has("roses"))
console.log(gerden.has("sunflower"))
console.log(gerden.has("lilly"))
console.log(typeof gerden)
console.log(gerden instanceof Map)


let building = new Map([
    ["yashodeep",1],
    ["balaram",2],
    ["shantai",4]
]);

let key=Object.keys(building);
console.log(key);




