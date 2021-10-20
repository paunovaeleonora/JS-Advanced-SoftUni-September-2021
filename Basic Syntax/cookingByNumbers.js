function solve(args) {
    let result = Number(arguments[0]);
    for (let index = 1; index < arguments.length; index++) {
        result = applyOperation(result, arguments[index]);
        console.log(result);
    }
    function applyOperation(result, op) {
        switch (op) {
            case 'chop': result /= 2;break;
            case 'dice': result = Math.sqrt(result);break;
            case 'spice': result++; break;
            case 'bake' : result *= 3;break;
            case 'fillet': result = (result * 0.8).toFixed(1);break
        }
        return result;
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')