function extractText() {
    const data = Array.from(document.getElementById('items').children);

    const result = [];
    for (const item of data) {
        result.push(item.textContent);
        
    };

    document.getElementById('result').textContent = result.join('\n');

}