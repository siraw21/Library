let myLibrary = [];
const addBook=document.querySelector("#submit-button");
const newBookBtn=document.querySelector(".new-book-btn");
const form=document.querySelector(".book-form");

//Book constructor
function Book(title,author,page,statusCheck) {
  this.id=crypto.randomUUID();
  this.title=title;
  this.author=author;
  this.page=page;
  this.statusCheck=statusCheck;
}

let title,author,page,statusCheck;

newBookBtn.addEventListener("click",function(){
   form.style.display="block";
})

newBookBtn.addEventListener("dblclick",function(){
   form.style.display="none";
})

function displayCard(){
   let libraryBook=document.querySelector(".main-display");
   for(let i=0;i<myLibrary.length;i++){
      if(i+1===myLibrary.length){
         const card=document.createElement("div");
         card.className="card";
         card.setAttribute("data-id", myLibrary[i].id);
         const removeBtn=document.createElement("button");
         removeBtn.className="removeBtn";
         removeBtn.textContent="Remove";
         
         if(myLibrary[i].statusCheck){
            card.innerHTML=`<h3>${myLibrary[i].title}</h3>
                        <p>Author: ${myLibrary[i].author}</p>
                        <p>Page: ${myLibrary[i].page}</p>
                        <p>Read: has read</p>`
                        card.appendChild(removeBtn);
                        libraryBook.appendChild(card);
          } else {
            card.innerHTML=`<h3>${myLibrary[i].title}</h3>
                         <p>Author: ${myLibrary[i].author}</p>
                         <p>Page: ${myLibrary[i].page}</p>
                         <p>Read: hasn't read yet</p>`
                         card.appendChild(removeBtn);
                         libraryBook.appendChild(card);
         }                
      }
   }
}


function addBookToLibrary(title,author,page,statusCheck) {
   title=document.querySelector("#title").value ;
   author=document.querySelector("#author").value;
   page=document.querySelector("#pages").value;
   statusCheck=document.querySelector("#readStatus").checked;
   const newBook=new Book(title,author,page,statusCheck);
   myLibrary.push(newBook);
   displayCard();
}

form.addEventListener('submit',function (event){
   event.preventDefault();
   addBookToLibrary();
})


document.addEventListener("click", function(event) {
  if (event.target.classList.contains("removeBtn")) {
    let card = event.target.parentElement; 
    let id = card.getAttribute("data-id"); 
    myLibrary = myLibrary.filter(book => book.id !== id);
    card.remove();
  }
});
