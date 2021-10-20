function lockedProfile() {
    Array
        .from(document.querySelectorAll('.profile button'))
        .forEach((b) => { b.addEventListener('click', onToggle); });

    function onToggle(e) { // event is the clicked button
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive) {
            const infoDiv = profile.querySelector('div');
            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';// going back to the default style in the css file;
                e.target.textContent = 'Show more';
            }

        }
    };
    ///////////////////////////////////////////////////////////////////////////////////


    const radio = Array.from(document.querySelectorAll('input[type="radio"]'));
    for (let input of radio) {
        input.addEventListener('click', onLockToggle);
    }

    function onLockToggle(e) {
        const button = e.target.parentElement.querySelector('button');

        if (e.target.value == 'lock') {
            button.disabled = true;
        }else {
            button.disabled = false;
        }
    };
}



        // const infoDiv = Array
        // .from(e.target.parentElement.querySelectorAll('div'))
        // .find(d => d.id.includes('HiddenFields'));