// class ChristmasDinner {
//     constructor(budget) {
//         if (budget < 0) {
//             throw new Error('The budget cannot be a negative number')
//         };
//         this.budget = budget;
//         this.dishes = [];
//         this.products = [];
//         this.guests = {};

//     }
//     shopping(products) {
//         let [product, price] = products;
//         price = Number(price);
//         if (this.budget < price) {
//             throw new Error('Not enough money to buy this product');
//         } else {
//             this.budget -= price;
//             this.products.push(product);
//             return `You have successfully bought ${product}!`;
//         }

//     }

//     recipes(recipe) {

//         let products = recipe.productsList;
//         products.forEach(product => {
//             if (this.products.indexOf(product) == -1) {
//                 throw new Error('We do not have this product');
//             }
//         });
//         this.dishes.push(recipe);
//         return `${recipe.recipeName} has been successfully cooked!`

//     }

//     inviteGuests(name, dish) {
//         let isFound = false;
//         this.dishes.forEach((d) => {
//             if (d.recipeName == dish) {
//                 isFound = true;
//             }
//         })
//         if (!isFound) {
//             throw new Error("We do not have this dish");
//         }
//         for (const guest in this.guests) {
//             if (guest == name) {
//                 throw new Error('This guest has already been invited');
//             }
//         };
//         this.guests[name] = dish;
//         return `You have successfully invited ${name}!`
//     }

//     showAttendance() {
//         let result = [];
//         for (const guest in this.guests) {
//             let line = '';
//             let dish = this.guests[guest];
//             let products;
//             this.dishes.forEach(d => {
//                 if (d.recipeName == dish) {
//                     products = d.productsList;
//                 }
//             });
//             line += `${guest} will eat ${dish}, which consists of ${products.join(', ')}`
//             result.push(line);
//         }
//         return result.join('\n');
//     }

// }

// let dinner = new ChristmasDinner(300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i < 3) {
        continue;
    } else {
        for (let j = 0; j < 5; j++) {
            console.log(j);
        }
    }        
}