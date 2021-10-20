function solve() {
   const button = document.getElementById('searchBtn');
   button.addEventListener('click', search);

   function search() {
      const input = document.getElementById('searchField').value;
      let inputText = input.toLowerCase();
      let tableElements = Array.from(document.querySelectorAll('tbody tr'));

      tableElements.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (text.includes(inputText)) {
            el.classList.add('select');

         } else {
            el.classList.remove('select');
         }
      })


      input.value = '';
   }
}