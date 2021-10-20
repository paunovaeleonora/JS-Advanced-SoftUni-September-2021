function solve(r) {
    let inputType = typeof(r);
    if (inputType === 'number') {
        let area = Math.pow(r, 2) * Math.PI;
        console.log(area.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

solve('eli')
solve(2)