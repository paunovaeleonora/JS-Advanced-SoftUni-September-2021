function magicMatrix(matrix) {
    let n = matrix.length
    let first = matrix[0].reduce(function(a, b) { return a + b});
    for (let row = 0; row < n; row++) {
        let sum = matrix[row].reduce(function(a, b) { return a + b});
        let sumCol = 0;
        for (let col = 0; col < n; col++) {
            sumCol += matrix[row][col];
        }
        if (sum != sumCol || sum != first ) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))