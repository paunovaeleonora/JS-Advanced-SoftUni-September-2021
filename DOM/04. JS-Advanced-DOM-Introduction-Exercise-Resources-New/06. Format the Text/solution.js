function solve() {
  const input = document.getElementById("input").value;
  let splitText = input.split(".").filter((el) => el != '');

  let divOutput = document.getElementById('output');
  let output = ``;
  let paragraph = [];
  
  while(splitText.length > 0) {
    if (paragraph.length == 3) {
      output += `<p>${paragraph.join('. ')}.</p>`;
      paragraph = [];
    }
    let sentence = splitText.shift();
    let trimmedSentence = sentence.trim();
    if (trimmedSentence.length != 0) {
      paragraph.push(trimmedSentence);
    }
    
    
  }
  if (paragraph.length > 0) {
    output += `<p>${paragraph.join('. ')}.</p>`;
  };

  divOutput.innerHTML = output;

}