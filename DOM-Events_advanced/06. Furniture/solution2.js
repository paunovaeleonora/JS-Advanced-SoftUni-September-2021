function solve() {
    const table = document.querySelector('table.table tbody');
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy)
    const items = [];
    function generate(e) {
        const data = JSON.parse(input.value);
        for (let item of data) {
            const row = document.createElement('tr');

            row.appendChild(createCell('img', { src: item.img }));
            row.appendChild(createCell('p', {}, item.name));
            row.appendChild(createCell('p', {}, item.price));
            row.appendChild(createCell('p', {}, item.decFactor));
            // row.appendChild(createCell('input', {type: 'checkbox'}));
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            const checkCell = document.createElement('td');
            checkCell.appendChild(checkBox);
            row.appendChild(checkCell);

            items.push({
                element: row,
                isChecked,
                item
            });
            table.appendChild(row);
        }
    };

    function isChecked() {
        return checkBox.checked;
    }

    function createCell(nestedTag, props, content) {
        const cell = document.createElement('td');
        const nested = document.createElement(nestedTag);

        for (let prop in props) {
            nested[prop] = props[prop];
        }
        if (content) {
            nested.textContent = content;
        }
        cell.appendChild(nested);
        return cell;
    }

    function buy(e) {
        const boxes = items
            .filter(i => i.isChecked())
            .map(i => i.item)
            .reduce((acc, c, i, a) => {
                acc.names.push(c.name)
                acc.total += Number(c.price)
                acc.decFactor += Number(c.decFactor / a.length);
                return acc;
            }, { names: [], total: 0, decFactor: 0 });


        const result = `Bought furniture: ${boxes.names.join(', ')}
Total price: ${boxes.totalPrice.toFixed(2)}
Average decoration factor: ${boxes.decFactor}`;
        output.value = result;

    };
}
