class Shapes {
    areaOfRectangle(width, height) {
        if ((typeof width && typeof height) !== 'number') {
            throw new TypeError('Params must be a number.')
        }
        else if (width < 0 || height < 0){
            throw new Error('No negative numbers')
        }
        return width * height;
    }

    areaOfTriangle(base, height) {
        return (base * height) / 2
    }

    areaOfCircle(radius) {
        let pi = 3.14;
        return (pi * (radius ** 2));
    }
}

module.exports = new Shapes();