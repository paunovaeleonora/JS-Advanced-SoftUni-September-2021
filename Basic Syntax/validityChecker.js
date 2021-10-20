$inputCoordinates = trim(fgets(STDIN));
$inputCoordinates = explode(", ", $inputCoordinates);
list($x1, $y1, $x2, $y2) = $inputCoordinates;
let startX = 0;
let startY = 0;
printMessage($x1, $y1, $startX, $startY);
printMessage($x2, $y2, $startX, $startY);
printMessage($x1, $y1, $x2, $y2);
 
 
function isDistanceValid(x1, y1, x2, y2)
{
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (Number.isInteger(distance)) {
        return true;
    }
 
    return false;
}
 
function printMessage(x1, y1, x2, y2)
{
    if (isDistanceValid(x1, y1, x2, y2)) {
        console.log(`{${x1}}, {${y1}} to {${x2}}, {${y2}} is valid`);
    } else {
        console.log(`{${x1}}, {${y1}} to {${x2}}, {${y2}} is invalid`);
    }
}