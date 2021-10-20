function toggle() {
    let button = document.getElementsByClassName('button')[0]; // gets the button element
    let textToShow = document.getElementById('extra');

    if (textToShow.style.display === 'none') {
        textToShow.style.display = 'block'; // changes the style of the text in the div with id extra to hide
        button.textContent = 'Less';
    }else {
        textToShow.style.display = 'none';// changes the style of the text in the div with id extra to show
        button.textContent = 'More';
    }
}

// function toggle() {
//     
//     const button = document.querySelector(".button");
//     let text = document.getElementById("extra");

//     button.textContent = button.textContent == "More" ? "Less" : "More";
//     text.style.display = text.style.display == "none" || text.style.display == "" ?
//         text.style.display = "block" : text.style.display = "none";


// }