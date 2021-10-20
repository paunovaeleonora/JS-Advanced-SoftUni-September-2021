// function rectangle(width, height, color) {
//     const rect = {};
//     rect.width = Number(width);
//     rect.height = Number(height);
//     let colorToUpper = color[0].toLocaleUpperCase() + color.slice(1).toLocaleLowerCase();

//     rect.color = String(colorToUpper);
//     rect.calcArea = function() {
//         return rect.width * rect.height;
//     };
//     return rect;
// }

function solve(width, height, color) {
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    function calcArea() {
        return this.width * this.height;
    }

    
    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }

}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// let a = 'eli';
// let newA = a[0].toLocaleUpperCase() + a.slice(1);

// console.log(a);
// console.log(newA);
