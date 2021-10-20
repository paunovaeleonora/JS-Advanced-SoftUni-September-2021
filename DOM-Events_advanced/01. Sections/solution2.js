function create(words) {
    const content = document.getElementById('content');

    for(let word of words) {
        const div = document.createElement('div');
        const para = document.createElement('p');

        para.textContent = word;
        para.style.display = 'none';
        div.appendChild(para);
        div.addEventListener('click', reveal); // adds event listener to each paragraph
        //* div.addEventListener('click', reveal.bind(para))
        content.appendChild(div);


        function reveal(e) {
            e.target.children[0].style.display = ''; // event.children[0] paragragh which is hidden
            //* this.style.display = '';
        }                                           // we have function reveal to each row in the loop
    }
}