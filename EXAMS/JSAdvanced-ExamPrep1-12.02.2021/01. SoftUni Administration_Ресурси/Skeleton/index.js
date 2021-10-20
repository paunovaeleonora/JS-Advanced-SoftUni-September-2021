
function solve(e) {
    let lecture = document.querySelector('form')[0];
    let date = document.querySelector('form')[1];
    let module = document.querySelector('form')[2];
    
    
    document.querySelector('form')[3].addEventListener('click', add);

    function add(e) {
        
        e.preventDefault();
        let form = e.target.parentElement.parentElement;
        if (date.value != '' && module.value != '' && module.value != 'Select module') {

            let allModules = document.querySelector('.modules');
            let newModule = document.createElement('div');
            let h3 = document.createElement('h3');
            h3.textContent = form[2].value.toUpperCase() + ' - MODULE';

            let ul = document.createElement('ul');
            let newLi = document.createElement('li');
            newLi.setAttribute('class', 'flex');
            let h4 = document.createElement('h4');
            let currentDate = date.value;
            console.log(currentDate);
            console.log(typeof(currentDate));
            let formatDate = convertDate(date.value);
            h4.textContent = `${lecture.value} - ${formatDate}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'red');
            deleteBtn.textContent = 'Del';

            newLi.appendChild(h4);
            newLi.appendChild(deleteBtn);
            ul.appendChild(newLi);
            newModule.appendChild(h3);
            newModule.appendChild(ul);

            allModules.appendChild(newModule);

            deleteBtn.addEventListener('click', (e) => {
                console.log(e);

            })
        }


    }

    function convertDate(dateValue) {
        while (dateValue.includes("-")) {
            dateValue = dateValue.replace("-", "/");
        }
        dateValue = dateValue.replace("T", " - ");
        return dateValue;
    }
};

