function solve(speed, area) {
    var dict = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let withinLimit = true;
    if (speed > dict[area]) {
        withinLimit = false;
    }
    let status = '';
    let diff = speed - dict[area];

    if (diff > 0 && diff <= 20) {
        status = 'speeding';
    }else if (diff <= 40) {
        status = 'excessive speeding';
    }else {
        status = 'reckless driving'
    }

    if (withinLimit) {
        console.log(`Driving ${speed} km/h in a ${dict[area]} zone`)
    }else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${dict[area]} - ${status}`)
    }
    

}
solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')