function solve(a, b) {

    let smalerNumber = Math.min(a, b);
    for (let i = smalerNumber; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            console.log(i);
            break;
        }
    }
}

solve(15, 5)
solve(2154, 458)