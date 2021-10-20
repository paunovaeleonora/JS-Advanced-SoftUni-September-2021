function solve(array, n) {
    for (let index = 0; index < n; index++) {
        array.unshift(array.pop())
    }
    let result = '';
    array.forEach(element => {
        result += element + " ";
    });
    return result
}

console.log(solve(['1', '2', '3', '4'], 2))
console.log(solve(['banana', 'orange', 'coconut', 'apple'], 15))