// function storeCatalogue(array) {
//     let sortedArray = array.sort();
//     let letter = sortedArray[0][0];

//     console.log(letter);
//     while(sortedArray.length) {
//         let row = sortedArray.shift();
//         if (row[0] !== letter) {
//             letter = row[0];
//             console.log(letter);
//         }
//         let [product, price] = row.split(' : ');
//         price = Number(price);
//         console.log(`  ${product}: ${price}`);

//     }
// }
function storeCatalogue(array) {
    const dictionary = {};
    let sortedArray = array.sort();
    
    while (array.length) {
        let [name, price] = sortedArray.shift().split(' : ');
        price = Number(price);
        const firstLetter = name[0];

        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }
        dictionary[firstLetter].push({ name, price });

    }
    let result = [];
    // for (const letter in dictionary) {
    //     // result.push(letter);
    //     // dictionary[letter].forEach(element => {
    //     //     result.push(`  ${element.name}: ${element.price}`)
    //     // });
    //     let values = dictionary[letter].map(entry => `  ${entry.name}: ${entry.price}`);
    //     let string = `${letter}\n${values.join('\n')}`;
    //     result.push(string);
    // }
    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
        .sort((a, b) => (a.name).localeCompare(b.name))
        .map(product=> `  ${product.name}: ${product.price}`)
        .join('\n')

        let string = `${entry[0]}\n${values}`;
        result.push(string);
    })

    return result.join('\n');
}





// data = ['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 30',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'];

// storeCatalogue(data);
data2 = ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
console.log(storeCatalogue(data2))