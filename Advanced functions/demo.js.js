// const obj = {
//     name: 'Peter',
//     outer() {
//         console.log(this);
//         function inner() {
//             console.log(this)
//         };
//         inner();
//     }
// };

// obj.outer();


// const object = {
//     name: 'Peter',
//     outer() {
//         console.log(this);
//         const inner = () => console.log(this);
//         inner(); => arrow func is automticlly binded to the context of the outer func
//     }
// }

// object.outer();


// function greet() {
//     console.log(this.name);
// }
// let person = {name: 'Eli'};
// greet.call(person);

// const sharedPersonalInfo = function (...activities) {
//     let info = `Hello, my name is ${this.name} and I am a ${this.profession}.\n`;
//     info += activities.reduce((acc, curr) => {
//         let el = `---${curr}\n`;
//         return acc + el;
//     },'My hobbies are: \n').trim();
//     return info;
// }

// const firstPerson = {name: 'Peter', profession: 'Fisherman'};
// console.log(sharedPersonalInfo.call(firstPerson, 'biking', 'swiming', 'football'));

// const firstPerson = {
//     name: 'Peter',
//     prof: 'Fisherman',
//     shareInfo: function () {
//         console.log(`${this.name} works as a ${this.prof}.`);
//     }
// };

// const secondPerson = {name: 'George', prof: 'Manager'};
// firstPerson.shareInfo.apply(secondPerson);

// const x = 42;
// const getX = function () {
//     return this.x;
// }

// const modul = {x , getX };

// const unboundGetX = modul.getX;
// console.log('This is the result of unbound ' + unboundGetX());
// const boundGetX = unboundGetX.bind(modul);
// console.log('This is the result of bound ' + boundGetX());


/*** 
 * arrow functions are automatically binded
 */