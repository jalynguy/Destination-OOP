const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane'); // Assume Plane class is defined

describe('Airport', () => {
    let airport;

    beforeEach(() => {
        airport = new Airport('John F. Kennedy International Airport', 'JFK'); // Create an instance of Airport
    });

    test('should assign name and airportCode correctly', () => {
        expect(airport.name).toBe('John F. Kennedy International Airport');
        expect(airport.airportCode).toBe('JFK');
    });

    test('should initialize planes as an empty array', () => {
        expect(airport.getPlanes()).toEqual([]);
    });

    test('should add Plane objects to the planes array using addPlane', () => {
        const plane = new Plane('Delta', 'JFK', 'Los Angeles'); // Create a Plane instance
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
    });

    test('should allow adding multiple planes', () => {
        const plane1 = new Plane('Delta', 'JFK', 'Los Angeles');
        const plane2 = new Plane('American Airlines', 'JFK', 'Chicago');
        airport.addPlane(plane1);
        airport.addPlane(plane2);
        expect(airport.getPlanes()).toEqual([plane1, plane2]);
    });
});
