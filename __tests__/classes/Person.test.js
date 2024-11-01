const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag'); 

describe('Person', () => {
    let person;
    
    beforeEach(() => {
        person = new Person('Jane Doe', 'New York');
    });

    test('should create an instance of the Person class', () => {
        expect(person).toBeInstanceOf(Person);
    });

    test('should assign name and destination correctly', () => {
        expect(person.name).toBe('Jane Doe');
        expect(person.destination).toBe('New York');
    });

    test('should initialize bags as an empty array', () => {
        expect(person.getBags()).toEqual([]);
    });

    test('should add a bag to the bags array', () => {
        const bag = new Bag(5, 'bag1', null); 
        person.addBag(bag);
        expect(person.getBags()).toEqual([bag]);
    });

    test('should allow adding multiple bags', () => {
        const bag1 = new Bag(5, 'bag1', null);
        const bag2 = new Bag(10, 'bag2', null);
        person.addBag(bag1);
        person.addBag(bag2);
        expect(person.getBags()).toEqual([bag1, bag2]);
    });
});
