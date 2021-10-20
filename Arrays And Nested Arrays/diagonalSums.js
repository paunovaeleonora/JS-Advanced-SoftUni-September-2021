function solve(matrix) {
    
    
    let main = 0;
    for (let r = 0; r < matrix.length; r++) {
        main += matrix[r][r];
    }
    let secondary = 0;
    let step = 0;
    for (let i = matrix.length - 1; i >= 0; i--){
        secondary += matrix[step][i];
        step += 1;
    }
    return `${main} ${secondary}`
}
console.log(solve([[20, 40], [10, 60]]))
console.log(solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]))