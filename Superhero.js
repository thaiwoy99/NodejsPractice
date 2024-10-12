class Superhero {
    constructor(age){
        this.name = age
    }
    getName(){
        return this.name
    }
    setName(age){
        this.name = age
    }
}
module.exports = new Superhero(24)