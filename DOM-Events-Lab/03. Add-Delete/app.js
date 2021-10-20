function addItem() {
    const input = document.getElementById("newItemText");
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.textContent = "[Delete]";
    button.href = '#';
    liElement.appendChild(button);
    
    button.addEventListener('click', removeElement);

    document.getElementById('items').appendChild(liElement);
    
    input.value = '';


    function removeElement(ev) {
        ev.target.parentNode.remove();
    };


}