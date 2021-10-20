function juices(input) {
    const flavours = {};
    const bottles = [];
    const names = new Set();

    Array.from(input).forEach((line) => {
        let [type, quantity] = line.split(' => ');
        quantity = Number(quantity);


        if (!flavours[type]) {
            flavours[type] = 0;
        }
        flavours[type] += quantity;


        if (flavours[type] >= 1000) {
            if (!bottles[type]) {
                bottles[type] = 0;
            }
            
            while (flavours[type] >= 1000) {
                flavours[type] -= 1000;
                bottles[type] += 1;
                names.add(type);
            }
        }
    });

    for (const juice of names) {
        console.log(`${juice} => ${bottles[juice]}`);
        }
    
}

// let data = ['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549']
// juices(data);


let newData= [
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

juices(newData);