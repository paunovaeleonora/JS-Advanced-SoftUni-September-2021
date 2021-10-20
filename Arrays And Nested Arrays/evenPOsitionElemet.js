function solve(arr) {
    let elementsEvenIndex = new Array;
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            elementsEvenIndex.push(arr[index]);
        }
    }
    return elementsEvenIndex.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']))
console.log(solve(['5', '10']))