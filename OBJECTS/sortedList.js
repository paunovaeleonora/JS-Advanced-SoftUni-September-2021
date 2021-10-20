// function createSortedList() {
//     let specialObject = {};
//     specialObject.numbers = [];

//     specialObject.add = function(n) {
//         specialObject.numbers.push(n);
//         sorting(specialObject.numbers);
        
//     };
//     specialObject.remove = function remove(index){
//         if (index >= 0 && index < specialObject.numbers.length) {
//             specialObject.numbers.splice(index, 1);
//             sorting(specialObject.numbers);
//         }
//     };

//     specialObject.get = function get(index) {
//         return specialObject.numbers[index]; 
//     };

//     specialObject.size = specialObject.numbers.length;

//     function sorting(array) {
//         array.sort((a, b) => a - b);
//         return array;
//     }
//     return specialObject;
// }


function solve() {
    let list = [];

    function add(element) {
        list.push(element);
        this.size++;
        list.sort((a, b)=> a - b);
    }

    function remove(index) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            this.size--;
            list.sort((a, b)=> a - b);
        }

    }

    function get(index) {
        if (index >= 0 && index < list.length) {
            return list[index];
        }
    }

    return {
        size: 0,
        add,
        remove,
        get,
    }
}


let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
