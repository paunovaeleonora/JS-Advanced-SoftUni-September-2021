function solve(array) {
    let result = [];
    for (let index = 1; index < array.length; index+=2){
        result.push(array[index] * 2);
    
    }
    console.log(result.reverse());
}

solve([10, 15, 20, 25])

