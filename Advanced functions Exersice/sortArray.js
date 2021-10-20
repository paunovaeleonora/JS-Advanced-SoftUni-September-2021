function solve(data, command) {
    if (command == 'asc') {
        return data.sort((a, b) => a - b);
    }else {
        return data.sort((a, b) => b -a);
    }
}