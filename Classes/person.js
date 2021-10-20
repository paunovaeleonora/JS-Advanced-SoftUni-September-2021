class Person {
    constructor(fName, laName, age, email) {
        this.firstName = fName;
        this.lastName = laName;
        this.age = age;
        this.email = email;
    };
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
}


const person = new Person('Eli', 'Paunova', 30, 'eli.apunova@gmail.com');
console.log(person.toString())

// const second = new Person("Peter", "Marinov", 18, "pesho18@abv.bg")
// second.toString();

