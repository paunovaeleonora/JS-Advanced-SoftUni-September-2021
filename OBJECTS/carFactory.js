// function carFactory(car) {
//     const model = { model: String,
//         engine: { power: Number, volume: Number },
//         carriage: { type: String,color: String},
//         wheels: [] }
    
//     model.model = car.model;
//     if (car.power <= 90) {
//         model.engine.power = 90;
//         model.engine.volume = 1800;
//     }else if (car.power > 90 && car.power <= 120) {
//         model.engine.power = 120;
//         model.engine.volume = 2400;
//     }else if (car.power > 120 && car.power <= 200) {
//         model.engine.power = 200;
//         model.engine.volume = 3500;
//     }
//     model.carriage.type = car.carriage;
//     model.carriage.color = car.color;

//     if (car.wheelsize % 2 == 0) {
//         model.wheels.push(car.wheelsize - 1);
//         model.wheels.push(car.wheelsize - 1);
//         model.wheels.push(car.wheelsize - 1);
//         model.wheels.push(car.wheelsize - 1);
//     }else {
//         model.wheels.push(car.wheelsize);
//         model.wheels.push(car.wheelsize);
//         model.wheels.push(car.wheelsize);
//         model.wheels.push(car.wheelsize);
//     }
//     return model;

// }

// data = { model: 'VW Golf II',
//     power: 90,
//     color:'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 };

// console.log(carFactory(data));

// let input = {
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// };
// console.log(carFactory(input))

// let inp = {
//     model: 'Brichka',
//     power: 65,
//     color: 'white',
//     carriage: 'hatchback',
//     wheelsize: 16
// };

// console.log(carFactory(inp));



function solve(input) {
    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800},
            { power: 120, volume: 2400},
            { power: 200, volume: 3500}
        ].sort((a, b)=> a.power - b.power);
        return engines.find(el=> el.power>= power);

    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 == 0
        ? Math.floor(wheelsize) - 1
        :Math.floor(wheelsize); 
        return Array(4).fill(wheel, 0, 4);
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}

let inp = {
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
};

console.log(solve(inp));