
class Restaurant {


    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {
        let current_history = [];
        Array.from(products).forEach((product) => {
            let [name, quantity, price] = product.split(' ')
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= price;
                current_history.push(`Successfully loaded ${quantity} ${name}`)
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                current_history.push(`There was not enough money to load ${quantity} ${name}`)
                this.history.push(`There was not enough money to load ${quantity} ${name}`);

            }
        });
        return current_history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`
        };
        this.menu[meal] = {
            products: {},
            price: price
        };

        Array.from(neededProducts).forEach((line) => {
            let [product, quantity] = line.split(' ');
            this.menu[meal].products[product] = Number(quantity);
        });
        let numberOfMeals = Object.keys(this.menu).length;
        if (numberOfMeals == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${numberOfMeals} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {

        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        };

        let string = [];
        for (const meal in this.menu) {
            string.push(`${meal} - \$ ${this.menu[meal].price}`);
        };
        return string.join('\n');


    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        };

        for (const product in this.menu[meal].products) {
            if (this.stockProducts[product] == undefined || this.menu[meal].products[product] > this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        };

        for (const product in this.menu[meal].products) {
            this.stockProducts[product] -= this.menu[meal].products[product];
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        
    }
}

let kitchen = new Restaurant(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu())
