function solve(n, k) {
    let first = [1];
    while (first.length < n) {
        let nextElement = 0;
        if (first.length < k) {
            first.forEach(element => {
                nextElement += element
            });
        }
        else {
            for (let index = first.length - k; index < first.length; index++) {
                nextElement += first[index];
                
            }
        }
        first.push(nextElement);
    }
    return first;
}
console.log(solve(8, 2))