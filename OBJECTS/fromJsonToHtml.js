function createTable(string) {
    let arr = JSON.parse(string);
    
    let output = ["<table>"];
    output.push(makeKeyRow(arr));
    arr.forEach((object => output.push(makeValueRow(object))));
    output.push("</table>");

    function makeKeyRow(arr) {
        let heading = ["    <tr>"]
        for (const key in arr[0]) {
            heading.push(`<th>${key}</th>`);
        }
        heading.push("</tr>")
        return heading.join('');
    };

    function makeValueRow(row) {
        let result = [];
        let values = Object.values(row);
        let res = '    <tr>';
        values.forEach(element => {
            res += `<td>${element}</td>`
        });
        res += '</tr>';
        result.push(res); 
        return res;
    };
    function escapeHtml(value) {
        
    };

    console.log(output.join("\n"));
}



data = `[{"Name": "Stamat","Score":5.5}, {"Name":"Rumen","Score":6}]`;
createTable(data);

second = [{"Name":"Pesho","Score":4,"Grade":"8"},{"Name":"Gosho","Score":5,"Grade":"8"},{"Name":"Angel","Score":5.5,"Grade":"10"}];
createTable(second);