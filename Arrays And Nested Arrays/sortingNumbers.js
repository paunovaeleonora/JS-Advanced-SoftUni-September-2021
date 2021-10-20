function solve(array) {
    const sortedNums = array.sort(function(a, b){return a - b});
    
    const result = [];
    while (sortedNums); {
        result.push(sortedNums.shift());
        result.push(sortedNums.pop());
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]))