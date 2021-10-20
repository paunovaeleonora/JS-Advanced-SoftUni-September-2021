function carCompany(input) {
    const carBrands = {};



    input.forEach((line) => {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!carBrands[brand]) {
            carBrands[brand] = {};
        }
        if(!carBrands[brand][model]) {
            carBrands[brand][model] = 0;
        };
        carBrands[brand][model] += quantity;
    
    });

    for (const brand in carBrands) {
        console.log(brand);
        for (const model in carBrands[brand]) {
            console.log(`###${model} -> ${carBrands[brand][model]}`)
        }
    }
}

let data = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']

console.log(carCompany(data));