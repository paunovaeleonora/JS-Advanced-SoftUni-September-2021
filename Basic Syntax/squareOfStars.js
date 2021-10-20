function solve(size=5) {
    
    for (let i = 0; i < size; i++) {
        let result = '';
        for (let ind = 0; ind < size; ind++) {
            result += '* ';
        }
        console.log(result);  
    }
}

solve();
