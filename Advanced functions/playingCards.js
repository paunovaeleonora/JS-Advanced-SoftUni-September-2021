// throw lets you create custom errors
// throw new Error('message to be displayed')
// creating custom errors make them easy to handle
// use try(block of code) catch(handles the error) to handle errors
// special case => use if

// finally => executed always even if error is caught


function createCard(face, suit) {
    // \u2660 => \u -> control symbol -> tretirai vsichko sled tova kato uni code 
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit');
    };
    if (faces.includes(face) == false) {
        throw new Error('Invalid face');
    }


    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit; // read the variabes from the object
        }
    }
}

const card1 = createCard('A', 'S');
console.log(card1.toString());
