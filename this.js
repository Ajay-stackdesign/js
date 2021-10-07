//this is how we can compare two object//
/*let laptop={
    cpu:"i7",
    ram:4,
    brand:"dell",
    price:function(){
        console.log(this.cpu);
    }
}
let laptop1= {
    cpu:"i8",
    ram:"16",
    brand:"hp",
    price:function(){
        console.log(this.cpu)

    }
}
laptop.price();*/

/*let laptop ={
    cpu:"i6",
    ram:16,
    price:2000,

    compare:function(laptop2){
        if (laptop.cpu>laptop2.cpu){
            console.log(this.cpu);
        }else{
            console.log(laptop2.cpu);
        }
    },

    getch:function(){
        console.log(this.cpu)
    }
}

let laptop2={
    cpu:"i8",
    ram:16,
    price:2500,

 

    getch:function(){
        console.log(this.price)
    }
}

laptop.compare(laptop2);*/



function Alien(name, tech){
    this.name=name;
    this.tech=tech;

}
let alien1=Alien("reddy","java");
console.log(alien1);