function stringLength(a, b, c) {
    let totalLength = a.length + b.length + c.length;
    let averageLength = totalLength / 3;
    console.log(totalLength);
    console.log(Math.floor(averageLength));

}
stringLength('chocolate', 'ice cream', 'cake')