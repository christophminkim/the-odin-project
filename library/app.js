const myLibrary = [
  {
    title: 'Test',
    author: 'Tester Kim',
    pages: 1,
    read: true,
  },
  {
    title: 'Test Two',
    author: 'Tester Chin',
    pages: 2,
    read: false,
  },
  {
    title: 'Test Three',
    author: 'Tester Jin',
    pages: 3,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function renderBooks() {
  const books = document.querySelector('.books-container');

  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');

    book.className = 'books';
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;

    book.append(title, author, pages, read);
    books.appendChild(book);
  }
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
    console.log(newBook);

    
  });

  cancelForm.addEventListener('click', () => {
    formContainer.classList.toggle('open-form');
    formInputTexts.forEach((input) => {
      input.value = '';
      if (input.type === 'checkbox') input.checked = false;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  addBooks();
});
