class AsyncShapes {
    constructor(shapesArray) {
        this.shapesArray = shapesArray;
    }

    validateShape(item, callback) {
        setTimeout(function() {
            callback(this.shapesArray.includes(item))
        }.bind(this), 1000);
    }

    getShape(id, callback) {
        if (id >= this.shapesArray.length) {
            throw new Error(`There is no shape with index ${id}`)
        }
        setTimeout(function() {
            callback(this.shapesArray[id]);
        }.bind(this), 1000)
    }

    addShape(item, callback) {
        setTimeout(function() {
            callback(this.shapesArray.push(item));
        }.bind(this), 3000)
    }

    removeShape(id, callback) {
        setTimeout(function() {
            callback(this.shapesArray.splice(id, 1));
        }.bind(this), 1000)
    }
}

module.exports.AsyncShapes = AsyncShapes;