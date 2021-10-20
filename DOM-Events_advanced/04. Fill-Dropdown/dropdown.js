function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    document.querySelector('input[type="button"]').addEventListener('click', onClick(text, value));
    function onClick(text, value) {
        let dropDownMenu = document.getElementById('menu');
        const option = document.createElement('option');
        option.textContent = text.value;
        option.value = value.value;
        dropDownMenu.appendChild(option);
        
    };
    text.value ='';
    value.value = '';
}

