function calorieObject(array) {
    let calories = {};
    for (let index = 0; index < array.length; index += 2) {
        calories[array[index]] = Number(array[index +1]);
    }
    return calories;
}
data = ['Yoghurt', '48', 'Rise', '138','Apple', '52'];
console.log(calorieObject(data));