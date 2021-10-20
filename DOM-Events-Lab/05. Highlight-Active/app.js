function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for(let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    };

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');
        // ev.target.parentNode.className = 'focused';
    };

    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focused');
        // ev.target.parentNode.className = '';
    };
}