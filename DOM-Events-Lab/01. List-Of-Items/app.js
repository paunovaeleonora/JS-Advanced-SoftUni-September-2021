// function addItem() {
//     let userInput = document.getElementById('newItemText').value;
//     let ulElements = document.getElementById('items');
    
//     let nextRow = document.createElement('li');
//     ulElements.appendChild(nextRow);
//     nextRow.innerText = userInput;
// }

function addItem() {
    // select input field and read
    const input = document.getElementById('newItemText'); 
    // create new <li> element
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    // select <ul> to append new <li> element
    document.getElementById('items').appendChild(liElement);
    // nice to have : clear input field;
    input.value = '';
}