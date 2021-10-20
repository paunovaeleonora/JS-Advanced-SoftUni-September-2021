second = [{"Name":"Pesho","Score":4,"Grade":"8"},{"Name":"Gosho","Score":5,"Grade":"8"},{"Name":"Angel","Score":5.5,"Grade":"10"}];

let result = [];
second.forEach(element => {
    
    let values = Object.values(element);
    let res = '    <tr>';
    values.forEach(element => {
        res += `<td>${element}</td>`
    });
    res += '</tr>';
    result.push(res);
    
});

console.log(result.join('\n'));
console.log(second[0]['Name'])

