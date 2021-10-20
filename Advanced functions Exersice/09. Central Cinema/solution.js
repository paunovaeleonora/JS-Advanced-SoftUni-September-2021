function solve() {
    const [name, hall, ticketPrice] = Array.from(document.querySelectorAll('#container input'));
    const addMovieButton = document.querySelector('#container button');
    const movieSection = document.querySelector('#movies ul');
    const archive = document.querySelector('#archive ul');
    const clearAllBtn = archive.parentElement.querySelector('button');
    clearAllBtn.addEventListener('click', () => {
        archive.innerHTML = '';
    })


    addMovieButton.addEventListener('click', addMovie);
    

    function addMovie(e) {
        e.preventDefault();// спирам изпълнението на default behavior of the browser; stops reload of the page;
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement('li');
            movie.innerHTML = 
            `<span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>
            <div>
                <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                <input placeholder= "Tickets Sold">
                <button>Archive</button>
            </div>`
            movieSection.appendChild(movie);
            const button = movie.querySelector('div button');
            button.addEventListener('click', addToArchive);
        }
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

    }
    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector('input');
        const ticketPrice = e.target.parentElement.querySelector('strong');
        const nameOfMovie = e.target.parentElement.parentElement.querySelector('span');
        // const lineToDelete = e.target.parentElement.

        if (inputValue.value != '' && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPrice.textContent);

            const listElement = document.createElement('li');

            listElement.innerHTML = `<span>${nameOfMovie.textContent}</span><strong>Total amount: ${income.toFixed(2)}</strong><button>Delete</button>`;

            
            const button = listElement.querySelector('button');
            button.addEventListener('click', deleteElement);
            archive.appendChild(listElement);

        }
        e.target.parentElement.parentElement.remove();



    }
    function deleteElement(e) {
        e.target.parentElement.remove();
    }
}