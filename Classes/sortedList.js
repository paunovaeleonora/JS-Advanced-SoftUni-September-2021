class List {
    constructor() {
        this.list = []
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a -b);
        this.size++;
    }


    remove(index) {
        this.outOfBoundIndex(index)
        this.list.splice(index, 1);
        this.size--;
    }


    get(index) {
        this.outOfBoundIndex(index);
        return this.list[index];
    }

    outOfBoundIndex(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('No such index in list.')
        }
    }
}

let list = new List();
list.add(5);
list.add(4);
list.add(7);
list.add(1);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list)