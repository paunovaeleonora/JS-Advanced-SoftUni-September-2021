function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');
    let addBtn = document.getElementById('add');

    let sections = document.querySelectorAll('section');

    addBtn.addEventListener('click', addTask)

    function addTask(e) {
        e.preventDefault();
        if (task.value != '' && description.value != '' && dueDate.value != '') {
            let openSection = sections[1];
            let openSectionDiv = openSection.querySelectorAll('div')[1];

            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task.value;

            let descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = `Description: ${description.value}`;

            let dueDateParagraph = document.createElement('p');
            dueDateParagraph.textContent = `Due Date: ${dueDate.value}`;

            let buttonsDiv = document.createElement('div');
            buttonsDiv.setAttribute('class', 'flex');

            let startBtn = document.createElement('button');
            startBtn.setAttribute('class', 'green');
            startBtn.textContent = 'Start';

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'red');
            deleteBtn.textContent = 'Delete';

            buttonsDiv.appendChild(startBtn);
            buttonsDiv.appendChild(deleteBtn);

            article.appendChild(h3);
            article.appendChild(descriptionParagraph);
            article.appendChild(dueDateParagraph);
            article.appendChild(buttonsDiv);

            openSectionDiv.appendChild(article);

            startBtn.addEventListener('click', (e)=> {
                let article = e.target.parentElement.parentElement;
                let parentDiv = article.parentElement;
                parentDiv.removeChild(article);
                
                
                let btnDiv = article.querySelector('.flex');
                let buttons = article.querySelectorAll('button');
                
                btnDiv.removeChild(buttons[0]);
                btnDiv.removeChild(buttons[1]);


                let deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('class', 'red');
                deleteBtn.textContent = 'Delete';

                let finishBtn = document.createElement('button');
                finishBtn.setAttribute('class', 'orange');
                finishBtn.textContent = 'Finish';

                btnDiv.appendChild(deleteBtn);
                btnDiv.appendChild(finishBtn);

                let yellowSection = sections[2];
                let parentDivYellow = yellowSection.querySelectorAll('div')[1];
                parentDivYellow.appendChild(article);

                deleteBtn.addEventListener('click', (e)=> {
                    let article = e.target.parentElement.parentElement;
                    let parentDiv = article.parentElement;
                    parentDiv.removeChild(article);

                })

                finishBtn.addEventListener('click', (e)=> {
                    let article = e.target.parentElement.parentElement;
                    let parentDiv = article.parentElement;
                    parentDiv.removeChild(article);

                    let btnDiv = article.querySelector('.flex');
                    article.removeChild(btnDiv);

                    let greenSection = sections[3];
                    console.log(greenSection)
                    let parentDivGreen = greenSection.querySelectorAll('div')[1];
                    parentDivGreen.appendChild(article);
                    console.log(article)
                })
            })

            deleteBtn.addEventListener('click', (e)=> {
                let article = e.target.parentElement.parentElement;
                let parentDiv = article.parentElement;
                parentDiv.removeChild(article);
            })
        }
    }
}