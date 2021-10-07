class Student{
    constructor(name,school){
        this.myName=name;
        this.mySchool=school;
    }
    biodata(){
        console.log(`hi my name is ${this.myName} and my school name is ${this.mySchool}`)
    }
}

class player extends Student{
    constructor(name,school,game){
        super(name,school)
        this.myGame=game;
    }
    player_biodata(){
        console.log(`${super.biodata()}. mh fav gav is  ${this.myGame}`)
    }
}

let obj1 = new player("ajay","sdv","volleyball");

obj1.player_biodata();