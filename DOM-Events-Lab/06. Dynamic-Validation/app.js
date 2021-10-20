function validate() {
    document.getElementById('email').addEventListener('change', onChande);

    function onChande(ev) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        }else {
            ev.target.classList.add('error');
        }
    }
}