function solve(arr) {
    let nums = arr;
    nums.sort((a, b) => a-b);
    let middle = Math.floor(nums.length / 2);
    
    return nums.slice(middle);
}
console.log(solve([4, 7, 2, 5,]))
