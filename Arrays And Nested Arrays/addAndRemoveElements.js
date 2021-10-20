function solve(array) {
    let initialNumber = 1;
    const data = [];
    array.forEach(element => {
        if (element === 'add') {
            data.push(initialNumber);
        } else {
            data.pop();
        }
        initialNumber += 1;
    });
    if (data.length === 0) {
        console.log('Empty');
    } else {
        data.forEach(element => {
            console.log(element);
        });
    }
}
solve(['remove', 'remove', 'remove'])
