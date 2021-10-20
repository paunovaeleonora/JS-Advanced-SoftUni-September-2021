class ChristmasDinner {
    constructor(b) {
        if (b < 0) {
            throw new Error("The budget cannot be a negative number");
        };

        this.budget = b;
        this.dishes = [];
        this.products = [];
        this.guests = {};

    }

    shopping(products) {
        let [product, price] = products;
        price = Number(price);

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product')
        };
        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        let checker = (arr, target) => target.every(v => arr.includes(v));

        if (checker(this.products, recipe.productsList)) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`;
        }else {
            throw new Error('We do not have this product')
        }
    }

    inviteGuests(name, dish) {
        let searchedDish = this.dishes.find(d => d.recipeName == dish);
        let searchedGuest;
        for (const g in this.guests) {
            if (g == name) {
                searchedGuest = g;
            }
        }

        if (!searchedDish) {
            throw new Error('We do not have this dish')
        }
        if (searchedGuest) {
            throw new Error('This guest has already been invited')
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        for (const g in this.guests) {
            let dish = this.guests[g];
            let products = this.dishes.find(d => d.recipeName == dish).productsList.join(', ');
            result.push(`${g} will eat ${dish}, which consists of ${products}`)
        }
        return result.join('\n');
    }
}


let dinner = new ChristmasDinner(300)
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Ivan', 'g');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
