function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    function onMove(ev) {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        const output = document.getElementById('result');
        output.textContent = `${offset}%`;

        // gradient.removeEventListener('mousemove', onMove);

    }
}