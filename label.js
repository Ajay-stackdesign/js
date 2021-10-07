/*outerloop:
for(i=0;i<4;i++){
    console.log("outerloop"+i);
    innerloop:
    for(j=0;j<3;j++){
    
    if(i<=3) continue outerloop;
    console.log(j);
    }
    
}*/
var person={
        name:"ajay",
        age: 15,
    }
  
    console.log(person["name"])