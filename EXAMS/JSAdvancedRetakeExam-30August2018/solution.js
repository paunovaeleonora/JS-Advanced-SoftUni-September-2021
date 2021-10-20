


function addDestination() {
    let [city, country] = document.querySelectorAll('.inputData');
    let season = document.querySelector('.custom-select');
    let tableBody = document.querySelector('#destinationsList');
    if (city.value && country.value) {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.textContent = `${city.value}, ${country.value}`
        let cell2 = document.createElement('td');
        cell2.textContent = season.value[0].toUpperCase() + season.value.slice(1);

        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row)

        let summaryBox = document.getElementById(season.value.toLowerCase());
        summaryBox.value++;

        city.value = '';
        country.value = '';

    }
}