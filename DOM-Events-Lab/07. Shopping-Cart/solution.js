function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];
   output.value = '';

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product'));
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

   }

   function checkout() {
      const products = new Set();
      cart.forEach((p) => products.add(p.name));
      const total = cart.reduce((a, b) => a + b.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
   }
}

// function solve() {
//    Array.from(document.querySelectorAll('.add-product')).forEach(x => x.addEventListener('click', add));
//    document.querySelector('.checkout').addEventListener('click', checkout);
//    const products = {
//       'Bread': 0.8,
//       'Milk': 1.09,
//       'Tomatoes': 0.99
//    }
//    const bought = [];
//    const textArea = document.querySelector('textarea');
//    let cost = 0;
//    let textOutput = '';

//    function add(e) {
//       const current = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
//       textOutput = `Added ${current} for ${products[current].toFixed(2)} to the cart.\n`;
//       cost += products[current];
//       textArea.value += textOutput;
//       if (!bought.includes(current)) { bought.push(current) }
//    }

//    function checkout() {
//       textOutput = `You bought ${bought.join(', ')} for ${cost.toFixed(2)}.`;
//       textArea.value += textOutput;
//       Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
//    }
// }