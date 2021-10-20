// function solve(arr) {
//     let sum = 0;
//     let inverseSum = 0;
//     let concetValues = '';
//     arr.forEach(element => {
//         sum += element;
//         inverseSum += 1/ element;
//         concetValues += String(element);
//     });
//     console.log(sum);
//     console.log(inverseSum);
//     console.log(concetValues);
// }

function solve(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1/b);
    aggregate(elements, '', (a, b) => a + b);


    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val)
    }
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);