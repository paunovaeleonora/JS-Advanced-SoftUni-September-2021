function solve(...args) {
    let types = {};
    let result = ``;
    args.forEach((e) => {
        let type = typeof(e);
        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
        result += `${typeof(e)}: ${e}}\n`
        
    });
    for(let e in types) {
        result += `${e}: ${types[e]}\n`
    }
    
    
    console.log(result);
}

solve({name: 'bob'}, 3.333, 9.999);
solve('cat', 42, function () {console.log('hello world!')});
