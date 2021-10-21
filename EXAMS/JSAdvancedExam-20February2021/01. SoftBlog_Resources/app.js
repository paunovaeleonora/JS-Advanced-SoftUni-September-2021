function solve(e) {
  let creator = document.querySelector('#creator');
  let title = document.querySelector('#title');
  let category = document.querySelector('#category');
  let content = document.querySelector('#content');
  let createBtn = document.querySelector('button');

  createBtn.addEventListener('click', createArticle);

  function createArticle(e) {
    e.preventDefault();
    let siteContent = document.querySelector('.site-content section')
    let newArticle = document.createElement('article');
    let h1 = document.createElement('h1');
    h1.textContent = title.value;

    let categoryPara = document.createElement('p');
    categoryPara.innerHTML = `Category: <strong>${category.value}</strong>`;

    let creatorPara = document.createElement('p');
    creatorPara.innerHTML = `Creator: <strong>${creator.value}</strong>`;

    let contentPara = document.createElement('p');
    contentPara.textContent = content.value;


    let btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'buttons');

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';

    let archiveBtn = document.createElement('button');
    archiveBtn.classList.add('btn');
    archiveBtn.classList.add('archive');
    archiveBtn.textContent = 'Archive';
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(archiveBtn);

    newArticle.appendChild(h1);
    newArticle.appendChild(categoryPara);
    newArticle.appendChild(creatorPara);
    newArticle.appendChild(contentPara);
    newArticle.appendChild(btnDiv);
    siteContent.appendChild(newArticle);

    deleteBtn.addEventListener('click', (e) => {
      siteContent.removeChild(newArticle);

    })

    archiveBtn.addEventListener('click', (e) => {
      let archive = document.querySelector('.archive-section ol');
      let newArchive = document.createElement('li');
      newArchive.textContent = h1.textContent;
      archive.appendChild(newArchive);
 
      siteContent.removeChild(newArticle);
      sortList(archive);

      function sortList(list) {
        let i, switching, b, shouldSwitch;

        switching = true;
        while (switching) {
          switching = false;
          b = list.getElementsByTagName("LI");
          for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
          }
        }
      }
    })
  }
}