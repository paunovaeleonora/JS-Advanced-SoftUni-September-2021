function validate() {
    const input = document.getElementById("email");
    
    let inputRegex = /(^[a-z]+@[a-z]+.[a-z]+$)/;

    input.addEventListener('change', () => {
        if (!inputRegex.test(input.value)) {
            input.classList.add('error'); 
        }else {
            input.classList.remove('error')   
        }
    });
}