// function solution(counter) {
//     let n = counter;
//     function increment(a) {
        
//         return n + a;
        
//     };

//     return increment;
// }

// const add5 = solution(5); // 5
// console.log(add5(2)); // n = 5 ; a = 2; return 5 + 2 == 7
// console.log(add5(3));


function joinedLogger(level, sep) {
    let l = level;
    let s = sep;

    function concat(...msg) {
        let messages = Array.from(msg);
        let result = [];
        messages.forEach((el)=> {
            if(el.level > l) {
                result.push(el.text);
            }
        })
        console.log(result.join(s));
    }
    return concat;
}

let myLog = joinedLogger(20, ';');
let messages = [{level: 20, text: 'eli'}, {level: 21, text: 'viki'}, {level: 22, text: 'tony'}]
myLog(...messages);
