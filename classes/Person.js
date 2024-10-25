class Person {
    bags = [];
    constructor(name, destination, bags = []){
        this.name = name;
        this.destination = destination;
        this.bags = bags;
    }
    addBag(bag){
        this.bags.push(bag);
    }
    getBags(){
        return this.bags;
    }
}


module.exports = Person;