"use strict";

let myLibrary = [];
let author, title, numPages, read;
let newBook = document.querySelector(".add-to-library");
let shelf = document.querySelector(".shelf");
let allBooks = document.querySelectorAll(".books");
let form = document.querySelector(".float");
let submit = document.querySelector(".submit");

let formNoRefresh = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

submit.addEventListener("click", () => {
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  numPages = document.getElementById("num-pages").value;
  read = document.getElementById("read").checked;
  addBookToLibrary();
  form.classList.toggle("hidden");
});

newBook.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

function book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

let currentBook;
function addBookToLibrary() {
  currentBook = new book(author, title, numPages, read);
  myLibrary.push(currentBook);
  showOnShelf();
}

function showOnShelf() {
  let pushBook = document.createElement("div");
  shelf.appendChild(pushBook);
  pushBook.classList.add("book");
  //pushBook.dataset.prop = myLibrary.indexOf(book);
  let pushAuthor = document.createElement("div");
  pushAuthor.classList.add("author");
  pushAuthor.textContent = currentBook.author;
  pushBook.appendChild(pushAuthor);

  let pushTitle = document.createElement("div");
  pushTitle.classList.add("title");
  pushTitle.textContent = currentBook.title;
  pushBook.appendChild(pushTitle);

  let pushNumPages = document.createElement("div");
  pushNumPages.classList.add("numPages");
  pushNumPages.textContent = currentBook.numPages;
  pushBook.appendChild(pushNumPages);

  let pushRead = document.createElement("button");
  pushRead.classList.add("read");
  pushRead.textContent = "read";
  pushRead.addEventListener("click", () => {
    if (currentBook.read == true) {
      currentBook.read = false;
      pushRead.style.backgroundColor = "#e04f63"; // check this again
    } else {
      currentBook.read = true;
      pushRead.style.backgroundColor = "#63da63";
    }
  });
  /* pushRead.dataset.prop = myLibrary.indexOf(currentBook);
  console.log(pushRead.dataset.prop); */
  pushBook.appendChild(pushRead);
  if (currentBook.read == true) {
    pushRead.style.backgroundColor = "#63da63";
  } else {
    pushRead.style.backgroundColor = "#e04f63";
  }

  let pushRemove = document.createElement("button");
  pushRemove.classList.add("remove");
  pushRemove.textContent = "remove";
  pushRemove.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(currentBook), 1);
    shelf.removeChild(pushBook);
  });
  pushBook.appendChild(pushRemove);
}

function readColor() {
  if (currentBook.read) {
    let location =
      document.querySelector[`data-prop=${myLibrary.indexOf(currentBook)}`];
    location.classList.toggle("read-yes");
  }
}

/* user selects true or false
need to check after they press add
check if true
add toggle to correct .read button

read color for every created object
 */
