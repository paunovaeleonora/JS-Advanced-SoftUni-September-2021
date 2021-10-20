// function tableToJson(data) {
//     let tableInfo = [];
//     let [Town, Latitude, Longitude] = splitStrings(data[0]);
//     for (let index = 1; index < data.length; index++) {
//         const table = {};
//         let [town, latitude, longitude] = splitStrings(data[index]);
//         latitude = Number(latitude).toFixed(2);
//         longitude = Number(longitude).toFixed(2);
//         table.Town = town;
//         table.Latitude = Number(latitude);
//         table.Longitude = Number(longitude);
//         tableInfo.push(table);
//     };

//     function splitStrings(row) {

//         let info = row.split('|');
//         let trimmedInfo = [];
//         info.forEach(element => {
//             if (element != "")
//             trimmedInfo.push(element.trim());
//             });
//         return trimmedInfo;

//     }
//     console.log(JSON.stringify(tableInfo));
// }

// function tableToJson(data) {
//     let towns = [];
//     let [Town, Latitude, Longitude] = splitStrings(data.shift());

//     while(data.length) {
//         let [t, lat, long] = splitStrings(data.shift());
//         lat = Number(Number(lat).toFixed(2));
//         long = Number(Number(long).toFixed(2));
//         towns.push({Town: t,Latitude: lat, Longitude: long});
//     };

//     return JSON.stringify(towns);


//     function splitStrings(row) {
//         let info = row.split("|");
//         let trimmedInfo = [];
//         info.forEach((element) => {
//             if (element != "") trimmedInfo.push(element.trim());
//         });
//         return trimmedInfo;
//     }
// }

function solve(input) {
    let [colums, ...table] = input.map(splitLine);

    function isEmptyString(x) {
        return x !== '';
    }

    function converIfNumber(x) {
        return isNaN(x) ? x: Number(Number(x).toFixed(2));
    }
    function splitLine(line) {
        return line.split('|').filter(isEmptyString).map(x=> x.trim()).map(converIfNumber);

    }

    

    return JSON.stringify(table.map(entry=> {
        return colums.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }));

}








let arr = [
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
];

let arr2 = [
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
];
console.log(solve(arr))
// tableToJson(arr2);
