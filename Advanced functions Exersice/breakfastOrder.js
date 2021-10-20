function robot() {
    const recipies = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(microelement, q) {
        storage[microelement] += q;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        const remainingStorage = {};

        for (const element in recipies[recipe]) {
            const remaining = storage[element] - recipies[recipe][element] * quantity;
            if (remaining >= 0) {
                remainingStorage[element] = remaining;
            } else {
                return `Error: not enough ${element} in stock`;
            }
        }
        Object.assign(storage, remainingStorage);// replaces storage elements with the elements in the storageREmaining
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    };

    function control(str) { // създаваме, за да извикваме всички други функции
        const [command, item, q] = str.split(' ');
        switch (command) {
            case 'restock':
                return restock(item, Number(q));
            case 'prepare':
                return prepare(item, Number(q));
            case 'report':
                return report();
        }
    }
    return control; //  връщаме референция към функцията а не самата функция
}