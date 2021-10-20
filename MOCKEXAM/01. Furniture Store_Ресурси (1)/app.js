window.addEventListener('load', solve);

function solve() {

    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addItem);
    function addItem(e) {
        e.preventDefault();
        if (model.value != '' && description.value != '' && year.value != '' && price.value != '' && Number(year.value) > 0 && Number(price.value) > 0) {
            let table = document.querySelector('#furniture-list');
            let row = document.createElement('tr');
            row.setAttribute('class', 'info');
            let modelCell = document.createElement('td');
            modelCell.textContent = model.value;
            let priceCell = document.createElement('td');
            priceCell.textContent = Number(price.value).toFixed(2);
            row.appendChild(modelCell);
            row.appendChild(priceCell);

            let btnCells = document.createElement('td');
            let moreBtn = document.createElement('button');
            moreBtn.setAttribute('class', 'moreBtn');
            moreBtn.textContent = 'More Info';

            let buyBtn = document.createElement('button');
            buyBtn.setAttribute('class', 'buyBtn');
            buyBtn.textContent = 'Buy it';
            btnCells.appendChild(moreBtn);
            btnCells.appendChild(buyBtn);

            let hiddenInfo = document.createElement('tr');
            hiddenInfo.setAttribute('class', 'hide');
            let yearCell = document.createElement('td');
            yearCell.textContent = `Year: ${year.value}`;

            let colspan = document.createElement('td');
            colspan.setAttribute('colspan', '3');
            colspan.textContent = `Description: ${description.value}`;
            hiddenInfo.appendChild(yearCell);
            hiddenInfo.appendChild(colspan);

            row.appendChild(btnCells);

            table.appendChild(row);
            table.appendChild(hiddenInfo)



            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';

            moreBtn.addEventListener('click', (e) => {
                if(moreBtn.textContent == 'More Info') {
                    moreBtn.textContent = 'Less Info';
                    hiddenInfo.style.display = 'contents';
                }else {
                    moreBtn.textContent = 'More Info';
                    hiddenInfo.style.display = 'none';

                }
            });

            buyBtn.addEventListener('click', (e) => {

                let totalPrice = document.querySelector('.total-price');
                let item = e.target.parentElement.parentElement.querySelectorAll('td')[1];
                let result = Number(totalPrice.textContent) + Number(item.textContent);
                totalPrice.textContent = result.toFixed(2);
                
                table.removeChild(row);
                table.removeChild(hiddenInfo);
            });
        }
    }
}
