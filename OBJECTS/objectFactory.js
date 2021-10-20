// let student = {
//     firstName : "Maria",
//     lastName : "Lopez",
//     age: 22,
//     location : {lat: 42.698, lgn: 23.322}
// }
// console.log(student);
// console.log(student.location.lat);

// let fname = 'Eli';
// let age = 31;
// let country = 'Bulgaria';
// let data = {fname, age, country};
// console.log(data);
// data.color = 'brown';
// console.log(data);

// const department = {
//     name : 'Engineering',
//     data: {
//         director: {
//             name: 'John',
//         position: 'Engineering director'
//     },
//         employees: [],
//         company: 'Quick Build'
//     }
// }
// const {data: {director}} = department;
// console.log(department);
// console.log(department.data);


// const employees = [
//     {name: 'John', position: 'worker'},
//     {name: 'Jane', position: 'secretary'}
// ];
// console.log(employees);
// console.log('\nScond\n')
// const [{name}] = employees;

// console.log(employees)


// const company = {
//     employees: ['John', 'Jane', 'Sam', 'Suzanne'],
//     name: "Quick Build",
// };

// const {employees: [emplName]} = company;

// console.log(company);
// console.log(company.employees);

// function print() {
//     console.log(`${this.name} is printing a page`);
// }

// function scan() {
//     console.log(`${this.name} is scanning a document`);
// }
// const printer = {name: 'ACME Printer', print}
// printer.print();


// function createRect(w, h) {
//     const rectangle = {w, h};
//     rectangle.getArea = () => {
//         return rectangle.w * rectangle.h;
//     };
//     return rectangle;
// }

// let rect = createRect(2, 2);
// console.log(rect.getArea);

function objectFactory(library, orders) {
    const result = [];

    for (let order of orders) {
        const current = Object.assign({}, order.template);
        for (let part of order.parts) {
            current[part] = library[part];
        }
        result.push(current);
    }
    return result;
}

const library = {
    print: function () {console.log(`${this.name} is printing a page`);},
    scan: function () {console.log(`${this.name} is scanning a document`);},
    play: function (artist, track) {console.log(`${this.name} is playing ${track} by ${artist}`);},
    };

    const orders = [
    {template: { name: 'ACME Printer'},parts: ['print']},
    {template: { name: 'Initech Scanner'},parts: ['scan']},
    {template: { name: 'ComTron Copier'},parts: ['scan', 'print']},
    {template: { name: 'BoomBox Stereo'},parts: ['play']}
    ];

    const products = objectFactory(library, orders);
    console.log(products);