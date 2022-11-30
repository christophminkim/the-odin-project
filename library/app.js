const myLibrary = [];
let i = 1;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const fruitByTheFoot = new Book('How to eat a fruit by the foot', 'Christopher Kim', 1, false);
myLibrary.push(fruitByTheFoot);

function renderBooks() {
  const books = document.querySelector('.books-container');

  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const remove = document.createElement('button');

    book.className = 'books';
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;
    remove.textContent = 'Remove';
    remove.id = `remove-${i++}`;

    book.append(title, author, pages, read, remove);
    books.appendChild(book);

    remove.addEventListener('click', () => {
      books.removeChild(book);
    });
  }
}

function renderNewBook() {
  const books = document.querySelector('.books-container');
  const book = document.createElement('div');

  const title = document.createElement('h2');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const remove = document.createElement('button');

  book.className = 'books';
  title.textContent = myLibrary[myLibrary.length - 1].title;
  author.textContent = myLibrary[myLibrary.length - 1].author;
  pages.textContent = myLibrary[myLibrary.length - 1].pages;
  read.textContent = myLibrary[myLibrary.length - 1].read;
  remove.textContent = 'Remove';
  remove.id = `remove-${i++}`;

  book.append(title, author, pages, read, remove);
  books.appendChild(book);

  const currentRemove = document.getElementById(`remove-${i - 1}`);
  currentRemove.addEventListener('click', () => {
    books.removeChild(currentRemove.parentNode);
  });
}

function addBooks() {
  const formContainer = document.querySelector('.form-container');
  const addBook = document.querySelector('.add-book');
  const submitForm = document.querySelector('.submit-form');
  const cancelForm = document.querySelector('.cancel-form');
  const formInputTexts = document.querySelectorAll('.form-inputs > input');

  addBook.addEventListener('click', () => {
    formContainer.classList.toggle('open-form');
  });

  submitForm.addEventListener('click', () => {
    const book = {};
    formInputTexts.forEach((input) => {
      input.value !== 'read' ? (book[input.name] = input.value) : (book[input.name] = input.checked);
    });

    const newBook = new Book(book.title, book.author, book.pages, book.read);
    myLibrary.push(newBook);
    renderNewBook();

    formContainer.classList.toggle('open-form');
    formInputTexts.forEach((input) => {
      input.value = '';
      if (input.type === 'checkbox') {
        input.checked = false;
        input.value = 'read';
      }
    });
  });

  cancelForm.addEventListener('click', () => {
    formContainer.classList.toggle('open-form');

    formInputTexts.forEach((input) => {
      input.value = '';
      if (input.type === 'checkbox') {
        input.checked = false;
        input.value = 'read';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  addBooks();
});
