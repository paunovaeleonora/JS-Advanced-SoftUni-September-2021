function solve(array) {
    const result = [array.shift()];
    array.forEach(element => {
        let currentBiggest = result[result.length - 1];
        if (element >= currentBiggest) {
            result.push(element)
        }

    });
    return result
}

console.log(solve([1, 1, 3, 8, 4, 10, 12, 3, 2, 24]))