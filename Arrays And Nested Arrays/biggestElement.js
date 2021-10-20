function solve(array) {
    const result = [];
    array.forEach(element => {
        element.sort(function (a, b) {return a - b });
        result.push(element[element.length - 1]);
    });
    result.sort(function(a, b) {return a - b});
    return result[result.length - 1]

}
// console.log(solve([[20, 50, 10], [8, 33, 145]]))
console.log(solve([[3, 5, 17, 12, 91, 5], [-1, 7, 4, 33, 6, 22], [1, 8, 99, 3, 10, 43]]))
