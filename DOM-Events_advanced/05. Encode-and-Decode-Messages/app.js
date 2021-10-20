function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn]= Array.from(document.querySelectorAll('main div button'));
    
    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndDisplay);

    function encodeAndSend() {
        let message = document.querySelector('main div textarea').value;
        let encodedMessage = '';
        for(i=0; i<message.length; i++) {
            let n = message.charCodeAt(i) + 1;
            encodedMessage += String.fromCharCode(n);
        };
        
        Array.from(document.querySelectorAll('main div textarea'))[1].value = encodedMessage;
        document.querySelector('main div textarea').value = '';
        
    };

    function decodeAndDisplay() {
        let receivedMessage = Array.from(document.querySelectorAll('main div textarea'))[1].value;
        let decodedMessage = '';
        for(i=0; i<receivedMessage.length; i++) {
            let n = receivedMessage.charCodeAt(i) - 1;
            decodedMessage += String.fromCharCode(n);
        };
        Array.from(document.querySelectorAll('main div textarea'))[1].value = decodedMessage;
    }

}