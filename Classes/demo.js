class Person {
    constructor(fName, age, email) {
        this.firstName = fName;
        this.age = age;
        
        this.ctcMethod = function() {
            console.group(`I am a constructor method for ${this.firstName}.`)
        }
    };

    toString() {
        return `${this.firstName} is age: ${this.age}`;
    };
    sayHi () { // doesnt have access to instances of the class, only to other static methods in the class
        console.log(this.firstName + ' says Hi')
    }

    static cheer() {
        console.log('Woo hoo')
    };
    static compareTo(a, b) {
        return a.age - b.age;
    }
}
// const p = new Person('eli', 23);

// console.log(`${p}`); // the same as console.log(p.toString())
// console.log(p instanceof Person) // returns true if p is instance of Person

// p.sayHi();
// Person.cheer(); // access to static methods only throught classes


const person1 = new Person('Peter', 23);
const person2 = new Person('Pete', 22);
const person3 = new Person('Eli', 25);
const people = [person1, person2, person3];
people.sort(Person.compareTo); // here calling without (), i.e is a property
console.log(people)
p.ctcMethod();

