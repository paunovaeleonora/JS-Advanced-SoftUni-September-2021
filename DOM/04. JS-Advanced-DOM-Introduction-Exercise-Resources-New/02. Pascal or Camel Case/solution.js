function solve() {
    const text = document.getElementById('text').value;
    const naming = document.getElementById("naming-convention").value;
    const splitted = text.split(' ');
    const resultContainer = document.getElementById('result');
    let resultString = '';
    if (naming == "Pascal Case") {
        for (let i = 0; i < splitted.length; i++) {
            resultString += splitted[i][0].toUpperCase() + splitted[i].slice(1).toLowerCase();
        }

    } else if (naming == "Camel Case") {
        resultString += splitted[0][0].toLowerCase() + splitted[0].slice(1).toLowerCase();
        for (let i = 1; i < splitted.length; i++) {
            resultString += splitted[i][0].toUpperCase() + splitted[i].slice(1).toLowerCase();
        }
    } else {
        resultString = 'Error!';
    }
    resultContainer.textContent = resultString;


}