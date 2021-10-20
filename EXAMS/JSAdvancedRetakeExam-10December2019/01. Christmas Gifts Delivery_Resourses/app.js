function solution() {
    
    let input = document.querySelector('.card input');
    let ul = document.querySelector('.card ul');

    let btn = document.querySelector('.card button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        

        let li = document.createElement('li');
        li.setAttribute('class', 'gift');
        li.textContent = input.value;

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';
        

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        ul.appendChild(li);

        input.value = '';

        let allLiElements = Array.from(ul.querySelectorAll('li'));
        let sortedLiElements = allLiElements.sort((a, b) => a.innerText.localeCompare(b.innerText));

        while(ul.firstChild) {
            ul.firstChild.remove();
        }

        for (const element of sortedLiElements) {
            ul.appendChild(element);
        }


        sendBtn.addEventListener('click', (e) => {
            e.preventDefault;
 
            let ulSentElement = document.querySelector('.container > section:nth-of-type(3) > ul');
            e.target.remove();
            discardBtn.remove();
            ulSentElement.appendChild(li);
 
        })

        discardBtn.addEventListener('click', (e) => {
            e.preventDefault;
 
            let ulDiscardElement = document.querySelector('.container > section:nth-of-type(4) > ul');
            e.target.remove();
            sendBtn.remove();
            ulDiscardElement.appendChild(li);
        
        })

    })
}