function getFibonacci() {
    let n1 = 0;
    let n2 = 1;

    function getNumber() {
        let nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextNumber;
        return n1;
    }

    return getNumber; // returns the function itself
}

let fib = getFibonacci();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())


//** CLOSURE -> декларирраме променливи в getFibonaci() , които 
// могат да се използват от getNumber() , но не могат да се достъпят 
// от глобалния скоуп.