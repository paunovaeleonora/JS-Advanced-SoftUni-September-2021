class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    
    valueOf() {
        return this.value;

    }

    toString() {
        let hexString = this.value.toString(16);
        return `0x${hexString.toUpperCase()}`;

    }

    plus(number){
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }

    minus(n) {
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;

// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString() === '0xF');
// console.log(FF.parse('AAA'));




// let FF = new Hex(255);
// console.log(FF.valueOf(), '=> 255');
// console.log(FF.toString() + '=> 0xFF');
// console.log(FF.valueOf() -1  == 254);

// let a = new Hex(10);
// let b = new Hex(5);
let c = new Hex(155);

// console.log(a.plus(c).toString(),'=>', '0xA5');
// console.log(a.minus(b).toString());
// // console.log(a.minus(b).toString(),'=>', "0x5");
let n = 15;
console.log(Number(n.valueOf()));
console.log(typeof(c))