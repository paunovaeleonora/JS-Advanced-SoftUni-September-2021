function solve(text) {
    let re = /\w+/g;
    let words = (String(text)).match(re);
    let data = new Array;
    words.forEach(element => {
        data.push(element.toUpperCase());
    });
    console.log(data.join(', '));
}
solve('Hi, how are!you')
solve('hello')