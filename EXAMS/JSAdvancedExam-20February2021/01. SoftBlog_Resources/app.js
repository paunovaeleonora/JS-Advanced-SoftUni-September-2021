function solve(e){

   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   
   let createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', createArticle);

   function createArticle(e) {
      e.preventDefault();

      
      let postSection = document.querySelector('main section');


      let newArticle = document.createElement('article');
      let heading = document.createElement('h1');
      heading.textContent = title.value;

      let categoryP = document.createElement('p');
      console.log(category.value);
      categoryP.innerHTML = `Category: <strong>${category.value}</strong>`;

      let creatorP = document.createElement('p');
      creatorP.innerHTML = `Creator: <strong>${author.value}</strong>`;

      let contentP = document.createElement('p');
      contentP.textContent = content.value;

      let buttonDiv = document.createElement('div');
      buttonDiv.classList.add('buttons');
      let deleteBtn = document.createElement('button');
      
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      let archiveBtn = document.createElement('button');
      
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      buttonDiv.appendChild(deleteBtn);
      buttonDiv.appendChild(archiveBtn);

      newArticle.appendChild(heading);
      newArticle.appendChild(categoryP);
      newArticle.appendChild(creatorP);
      newArticle.appendChild(contentP);
      newArticle.appendChild(buttonDiv);

      postSection.appendChild(newArticle);
      deleteBtn.addEventListener('click', deletePost);
      archiveBtn.addEventListener('click', archivePost);
      
   }

   function deletePost(e) {  
      let post = e.target.parentElement.parentElement;
      let parent = post.parentElement;
      parent.removeChild(post);


   }

   function archivePost(e) {
      let archive = document.querySelector('.archive-section ol');
      
      let title = e.target.parentElement.parentElement.getElementsByTagName('h1')[0];
      let parent = title.parentElement.parentElement;


      let newArchive = document.createElement('li');
      newArchive.textContent = title.textContent;
      archive.appendChild(newArchive);

      parent.removeChild(title.parentElement);
      sortList(archive);

      function sortList(list) {
         let  i, switching, b, shouldSwitch;
         
         switching = true;
         /* Make a loop that will continue until
         no switching has been done: */
         while (switching) {
           // start by saying: no switching is done:
           switching = false;
           b = list.getElementsByTagName("LI");
           // Loop through all list-items:
           for (i = 0; i < (b.length - 1); i++) {
             // start by saying there should be no switching:
             shouldSwitch = false;
             /* check if the next item should
             switch place with the current item: */
             if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
               /* if next item is alphabetically
               lower than current item, mark as a switch
               and break the loop: */
               shouldSwitch = true;
               break;
             }
           }
           if (shouldSwitch) {
             /* If a switch has been marked, make the switch
             and mark the switch as done: */
             b[i].parentNode.insertBefore(b[i + 1], b[i]);
             switching = true;
           }
         }
       }

      
      

   }
}
