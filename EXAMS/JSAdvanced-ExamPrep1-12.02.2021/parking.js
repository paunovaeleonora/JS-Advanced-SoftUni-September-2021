class Parking {


    constructor(c) {
        this.capacity = Number(c);
        this.vehicles = [];

    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.');
        }else {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            });
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }

    removeCar(carNumber){
        let isFound = false;
        let result;
        this.vehicles.forEach((car) => {
            if (car.carNumber == carNumber) {
                if (car.payed) {
                    isFound = true;
                    let i = this.vehicles.indexOf(car);
                    this.vehicles.splice(i, 1);
                    result = `${carNumber} left the parking lot.`
                }else{
                    throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
                }
            }
        });
        if (!isFound) {
            throw new Error(`The car, you're looking for, is not found.`);
        };
        return result;
        
    }

    pay(carNumber) {
        let isFound = false;
        let result;
        this.vehicles.forEach((car) => {
            if (car.carNumber == carNumber) {
                if (car.payed) {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`); 
                }else {
                    isFound = true;
                    car.payed = true;
                    result = `${carNumber}'s driver successfully payed for his stay.`
                }
            }
        });
        if(!isFound) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        return result;
        

    }

    getStatistics(carNumber){
        if(carNumber) {
            this.vehicles.forEach((car) => {
                if(car.carNumber == carNumber) {
                    if(car.payed) {
                        return `${car.carModel} == ${car.carNumber} - Has payed`;
                    }else {
                        return `${car.carModel} == ${car.carNumber} - Not payed`;
                    } 
                }
            });
        }else {
            let result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`];
            
            this.vehicles.sort(function(a, b) {
                
                return (a.carModel < b.carModel) ? -1 : (a.carModel > b.carModel) ? 1 : 0;
            });

            this.vehicles.forEach((vehicle) => {
                if(vehicle.payed) {
                    result.push(`${vehicle.carModel} == ${vehicle.carNumber} - Has payed`);
                }else {
                    result.push(`${vehicle.carModel} == ${vehicle.carNumber} - Not payed`);
                }
            });
            return result.join('\n');
        }
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Megane t600", "TX3691CA"));
console.log(parking.addCar("BMW t600", "TX3691CA"));
console.log(parking.addCar("Alpha t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());

