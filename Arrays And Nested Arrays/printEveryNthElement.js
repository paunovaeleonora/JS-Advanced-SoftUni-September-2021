function solve(array, n) {
    const data = [];
    for (let index = 0; index < array.length; index += n) {
        data.push(array[index]);
    }
    return data;
}