// function solve(number) {
//     let numberAsString = String(number);
//     let first = numberAsString[0]
//     let isSame = true;
//     let sum = 0;
//     for (let index = 1; index < numberAsString.length; index++) {
//         if (numberAsString[index] != first) {
//             isSame = false;
//             break;
//         }
//     }
//     for (let i = 0; i < numberAsString.length; i++) {
//         sum += Number(numberAsString[i]);
//     }
//     console.log(isSame);
//     console.log(sum);
// }


function solve(num) {
    let numAsStr = String(num);
    let sum = Number(numAsStr[0]);
    let isSame = true;
    for (let index = 0; index < numAsStr.length - 1; index++) {
        const element = numAsStr[index];
        const nextElement = numAsStr[index + 1];
        sum += Number(nextElement);
        if (element !== nextElement) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
    
}
solve(22222222)
solve(236542764)

