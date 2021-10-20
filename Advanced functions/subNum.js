function subRange(arr, start, end) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    if (start < 0) {
        start = 0;
    }
    
    let sum = 0;
    for(let i=start; i<= end; i++) {
        sum += Number(arr[i]);
        // Number(string) => NaN
        // ako kastnem do number i resultata e NaN, kogato sumirame,
        // resultata shte e NaN
        // opitvaiki se da indeksirame neshto koeto ne e masiv vrashat NaN
    }
    return sum;
}

console.log(subRange([10, 20, 30, 40, 50, 60], 1, 3));
console.log(subRange([10, 20, 30, 40, 50, 60], 3, 300))
console.log(subRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subRange([10, 'twenty', 30, 40], 0, 2));
console.log(subRange([], 1, 2));
console.log(subRange('text', 0, 2));