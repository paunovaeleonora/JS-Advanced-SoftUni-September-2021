function create(words) {
   
   const mainDiv = document.getElementById("content");
   words.forEach(element => {
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = 'none';
      
      divElement.appendChild(paragraph);
      divElement.addEventListener('click', reveal);
      mainDiv.appendChild(divElement);
   });

   function reveal(e) {
      // console.log(e.target);
      e.currentTarget.children[0].style.display = '';
   }
}