function solve() {
  const table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const[generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy)

  function generate(e) {
    const data = JSON.parse(input.value);
    for(let item of data) {
      const row = document.createElement('tr');

      row.appendChild(createCell('img', {src: item.img}));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', {type: 'checkbox'}));
      table.appendChild(row);



      // const imgCell = document.createElement('td');
      // const nameCell = document.createElement('td')
      // const priceCell = document.createElement('td')
      // const decFactorCell = document.createElement('td')
      // const checkCell = document.createElement('td')

      // const img = document.createElement('img');
      // img.src = item.img;
      // imgCell.appendChild(img);

      // const name = document.createElement('p');
      // name.textContent = item.name;
      // nameCell.appendChild(name);

      // const price = document.createElement('p');
      // price.textContent = item.price;
      // priceCell.appendChild(price);

      // const dec = document.createElement('p');
      // dec.textContent = item.decFactor;
      // decFactorCell.appendChild(dec);

      // const check = document.createElement('input');
      // check.type = 'checkbox';
      // checkCell.appendChild(check);

      // row.appendChild(imgCell);
      // row.appendChild(nameCell);
      // row.appendChild(priceCell);
      // row.appendChild(decFactorCell);
      // row.appendChild(checkCell);

    }
  };

  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for(let prop in props) {
      nested[prop] = props[prop];
    }
    if (content) {
      nested.textContent = content;
    }
    cell.appendChild(nested);
    return cell;
  }

  function buy(e) {
    const boxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(b => b.parentElement.parentElement)
    .map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent)
    }));

    const names = [];
    let totalPrice = 0;
    let totalFactor = 0;
    

    for (let item of boxes) {
      names.push(item.name);
      totalPrice += item.price;
      totalFactor += item.decFactor;
    }
    let averFactor = totalFactor / boxes.length;

    const result = `Bought furniture: ${names.join(', ')}${'\n'}Total price: ${totalPrice.toFixed(2)}${'\n'}Average decoration factor: ${averFactor}`;
    output.value = result;

  };
}

//const b = JSON.stringify(a); object to string
//const c = JSON.parse(b); string to object