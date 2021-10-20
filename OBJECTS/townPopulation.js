function cityRecord (data) {
    const cityRecord = {};
    for (let index = 0; index < data.length; index++) {
        let [town, population] = data[index].split(' <-> ');
        population = Number(population);

        if (cityRecord[town] != undefined) {population += cityRecord[town];}
        cityRecord[town] = population;
    }
    for (let town in cityRecord) {
        console.log(`${town} : ${cityRecord[town]}`);
        }   
}

cityRecord([
    'Sofia <-> 120000',
    'Montana <-> 2000',
    'New York <-> 10000000'
])