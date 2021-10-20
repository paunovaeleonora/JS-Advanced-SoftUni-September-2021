// function deleteByEmail() {

//     let userInput = document.getElementsByName('email')[0].value;
//     let rows = Array.from(document.querySelectorAll('tbody tr'));
//     let resultText = document.getElementById('result');
//     let isFound = false;
//     rows.forEach((row) => {
//         let email = row.children[1];
//         let emailContent = email.textContent;
//         if (userInput === email.textContent) {
//             row.remove();
//             resultText.textContent = 'Deleted.';
//             isFound = true;
//         }
//     });
//     if (!isFound) {
//         resultText.textContent = 'Not found.'
//     }
// }


function deleteByEmail() {
    // select input field and read
    const input = document.querySelector('input[name="email"]');
    // get tbody children
    const rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    // repeat for every row:
    // -- select second cell
    // -- if textContent matches input value -> remove row
    for(let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            removed = true;
        }
    };
    if (removed) {
        document.getElementById('result').textContent = 'Deleted.';
    }else {
        document.getElementById('result').textContent = 'Not found.';

    }
    

    // if there is no match print 'Not found.'
    // otherwise print 'Deleted.'


}