// function lowestPrice(input) {
//     const products = {};

//     for (let index = 0; index < input.length; index++) {
//         let element = input[index];
//         let [town, product, price] = element.split(' | ');
//         price = Number(price);
//         if (products[product] == undefined) {
//             products[product] = {'price': price, 'town': town};
//         }else {
//             if (products[product].price > price) {
//                 products[product].price = price;
//                 products[product].town = town;
//             }
//         }
//     }

    
//     for (const key in products) {
//         let values = Object.values(products[key]);
//         console.log(`${key} -> ${values[0]} (${values[1]})`)
//     }
// }

// function solve(input) {
//     const items = {};

//     for (const row of input) {
//         let [town, product, price] = row.split(' | ');
//         price = Number(price);
        
//         if(items[product] === undefined) {
//             items[product] = {price: price, town: town};
//         }else {
//             if (items[product].price > price) {
//                 items[product].price = price;
//                 items[product].town = town;
//             }
            
//         }
//     }

//     for (const key in items) {
//         console.log(`${key} -> ${items[key].price} (${items[key].town})`)
//         }
// }





// let data = ['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000',
//     'New York | Burger | 10'];

// solve(data);

function solve(input) {
    let log = {};
    while(input.length) {
        let sale = input.shift();
        let [town, product, price] = sale.split(' | ');
        price = Number(price);

        if (!log[product]) {
            log[product] = {town, price};
        }else {
            log[product] = (log[product].price > price) ||
            (log[product] && log[product].town === town)
            ?{town, price}:
            log[product];
        }
    }
    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`);
    }
    return result.join('\n')
}


let second = ['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000]']
console.log(solve(second))