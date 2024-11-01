class Airport {
    planes = [];
    constructor(name,airportCode, planes = []){
        this.name = name;
        this.airportCode = airportCode;
        this.planes = planes;
    }
    getPlanes(){
        return this.planes;
    }
    addPlane(plane) {
        this.planes.push(plane);
    }
}


module.exports = Airport;