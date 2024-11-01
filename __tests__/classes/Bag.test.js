const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person');

describe('Bag', () => {
    let bag;

    beforeEach(() => {
        bag = new Bag(5, 'bag1', null);
    });

    test('should create an instance of the Bag class', () => {
        expect(bag).toBeInstanceOf(Bag);
    });

    test('should assign weight and id correctly', () => {
        expect(bag.weight).toBe(5);
        expect(bag.id).toBe('bag1');
    });

    test('should have an initial owner of null', () => {
        expect(bag.getOwner()).toBeNull();
    });

    test('should update owner with a Person assigned to the Bag', () => {
        const person = new Person('John Doe'); // Create an instance of Person
        bag.assignOwner(person);
        expect(bag.getOwner()).toEqual(person);
    });
});
