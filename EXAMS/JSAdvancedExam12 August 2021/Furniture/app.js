window.addEventListener('load', solve);

function solve() {

    document.getElementById('add').addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        let modelInput = document.getElementById('model');
        let yearInput = document.getElementById('year');
        let descriptionInput = document.getElementById('description');
        let price = document.getElementById('price');

        if (modelInput.value != '' && yearInput.value && Number(yearInput.value) > 0 && descriptionInput.value != '' && price.value && Number(price.value) > 0) {
            let infoTr = document.createElement('tr');
            infoTr.classList.add('info');

            let modelTd = document.createElement('td');
            modelTd.textContent = modelInput.value;
            let priceTd = document.createElement('td');
            priceTd.textContent = Number(price.value).toFixed(2);

            let buttonTd = document.createElement('td');
            let moreBtn = document.createElement('button');
            moreBtn.classList.add('moreBtn');
            moreBtn.textContent = 'More Info';
            
            let buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            buyBtn.textContent = 'Buy it';

            buttonTd.appendChild(moreBtn);
            buttonTd.appendChild(buyBtn);
            

            let hideTr = document.createElement('tr');
            hideTr.classList.add('hide');
            hideTr.style.display = 'none';

            let hideTd = document.createElement('td');
            hideTd.textContent = `Year: ${yearInput.value}`;

            let hideDescr = document.createElement('td');
            hideDescr.colSpan = '3';
            hideDescr.textContent = `Description: ${descriptionInput.value}`;

            

            infoTr.appendChild(modelTd);
            infoTr.appendChild(priceTd);
            infoTr.appendChild(buttonTd);

            hideTr.appendChild(hideTd);
            hideTr.appendChild(hideDescr);

            document.getElementById('furniture-list').appendChild(infoTr);
            document.getElementById('furniture-list').appendChild(hideTr);
            
            moreBtn.addEventListener('click', moreInfo);
            buyBtn.addEventListener('click', buy);

            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            price.value = '';
        }
    }

    function moreInfo(e) {
        let i = e.target.parentElement.parentElement.rowIndex;
        let tableRows = Array.from(document.getElementsByTagName('tr'));
        if(tableRows[i + 1].style.display == 'none') {
            tableRows[i + 1].style.display = 'contents';
            e.target.textContent = 'Less Info';
        }else {
            tableRows[i + 1].style.display = 'none';
            e.target.textContent = 'More Info';
        }

            
    }

    function buy(e) {

        let total = document.getElementsByClassName('total-price')[0];
        let elementToRemove = e.target.parentElement.parentElement;
        let i = e.target.parentElement.parentElement.rowIndex;

        let price = Number(elementToRemove.getElementsByTagName('td')[1].textContent);

        price += Number(total.textContent)

        total.textContent = price.toFixed(2);
        document.getElementById('information').deleteRow(i);

    }
}

'<trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">MoreInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>'
'<trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>'
