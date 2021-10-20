// function HeroicInventory(data) {
//     let result = [];

//     for (const iterator of data) {
        
//         let [name, level, items] = iterator.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', ') : [];

//         result.push({name, level, items})
//     };
//     return JSON.stringify(result);
    
// }


// function solve(data) {
//     let result = [];
//     for (const row of data) {
//         let [name, level, items] = row.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', '): [];
//         result.push(
//             {name, level, items}
//         )
//     }
//     return JSON.stringify(result);
// }
// let a = ['Jake / 1000 / Gauss, HolidayGrenade'];
// console.log(solve(a));

function solve(input) {
    let result = [];
    while (input.length) {
        let hero = input.shift();
        let [name, level, itemsString] = hero.split(' / ');
        level = Number(level);
        const items =itemsString? itemsString.split(', '): [];

        result.push({name, level, items});
    }
    return JSON.stringify(result);

}