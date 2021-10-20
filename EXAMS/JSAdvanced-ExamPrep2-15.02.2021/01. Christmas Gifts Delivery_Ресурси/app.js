function solution() {
    
    let addGiftBtn = document.querySelector('.card button');
    let giftToAdd = document.querySelector('.card input');
    let giftsList = document.querySelector('.card ul');


    addGiftBtn.addEventListener('click', addGift);
    function addGift(e) {
        e.preventDefault();
        
        let li = document.createElement('li');
        li.setAttribute('class', 'gift');
        
        li.textContent = giftToAdd.value;

        let sendBth = document.createElement('button');
        sendBth.setAttribute('id','sendButton');
        sendBth.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';

        li.appendChild(sendBth);
        li.appendChild(discardBtn);
        giftsList.appendChild(li);
        giftToAdd.value = '';
        sortList(giftsList);

        sendBth.addEventListener('click', e => {
            e.preventDefault;
 
            let ulSentElement = document.querySelector('.container > section:nth-of-type(3) > ul');
            e.target.remove();
            btnDiscardElement.remove();
            ulSentElement.appendChild(li);
 
        });
        discardBtn.addEventListener('click', e => {
            e.preventDefault;
 
            let ulDiscardElement = document.querySelector('.container > section:nth-of-type(4) > ul');
            e.target.remove();
            btnSendElement.remove();
            ulDiscardElement.appendChild(li);
        });
        
        
        function sortList(list) {
            let  i, switching, b, shouldSwitch;
            
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
              // start by saying: no switching is done:
              switching = false;
              b = list.getElementsByTagName("LI");
              // Loop through all list-items:
              for (i = 0; i < (b.length - 1); i++) {
                // start by saying there should be no switching:
                shouldSwitch = false;
                /* check if the next item should
                switch place with the current item: */
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                  /* if next item is alphabetically
                  lower than current item, mark as a switch
                  and break the loop: */
                  shouldSwitch = true;
                  break;
                }
              }
              if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark the switch as done: */
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
              }
            }
          };
          
    }
}