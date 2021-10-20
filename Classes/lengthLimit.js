class Stringer {
    constructor(str, l) {
        this.innerString = str;
        this.innerLength = l;
    }

    increase(length) {
        this.innerLength += length;
    }


    decrease(length) {
        if ((this.innerLength - length) < 0) {
            this.innerLength = 0;
        }else {
            this.innerLength -= length;
        }
    }
    toString() {
        if (this.innerLength == 0) {
            return '...';
        }
        if(this.innerString.length > this.innerLength) {
            
            return  this.innerString.slice(0, this.innerLength) + '...';
        }
        return this.innerString;
    }
    innerStringLength() {
        return this.innerString.length;
    }
}

let test = new Stringer('Test', 5);
console.log(test.innerStringLength())

console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString())
test.increase(4);
console.log(test.toString());