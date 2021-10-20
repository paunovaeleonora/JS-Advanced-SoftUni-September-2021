function solve(array, first, second) {
    
    const indexFirst = array.indexOf(String(first));
    const indexSecond = array.indexOf(second) + 1;
    const newArray = array.slice(indexFirst, indexSecond);
    
    return newArray;
}

solve(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
'Key Lime Pie',
'Lemon Meringue Pie')