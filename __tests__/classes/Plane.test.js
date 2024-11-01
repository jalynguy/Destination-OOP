const Plane = require('../../classes/Plane'); 
const Person = require('../../classes/Person'); 

describe('Plane', () => {
    let plane;

    beforeEach(() => {
        plane = new Plane('Delta', 'JFK', 'Los Angeles'); 
    });

    test('should assign company, origin, and destination correctly', () => {
        expect(plane.company).toBe('Delta');
        expect(plane.origin).toBe('JFK'); 
        expect(plane.destination).toBe('Los Angeles');
    });

    test('should initialize passengers as an empty array', () => {
        expect(plane.getPassengers()).toEqual([]);
    });

    test('should add a Person to the passengers array using addPassenger', () => {
        const person = new Person('John Doe', 'New York');
        plane.addPassenger(person);
        expect(plane.getPassengers()).toEqual([person]);
    });

    test('should allow adding multiple passengers', () => {
        const person1 = new Person('Jane Doe', 'Chicago');
        const person2 = new Person('Mark Smith', 'San Francisco');
        plane.addPassenger(person1);
        plane.addPassenger(person2);
        expect(plane.getPassengers()).toEqual([person1, person2]);
    });
});
