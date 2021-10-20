function solve(arr) {
    let nums = arr;
    nums.sort((a, b) => a-b);
    console.log(nums[0] + ' ' + nums[1]);
}
solve([4, 7, 2, 5])