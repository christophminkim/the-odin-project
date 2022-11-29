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
  {
    title: 'Test Four',
    author: 'Tester Choi',
    pages: 4,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
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

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', () => {
  
})

document.addEventListener('DOMContentLoaded', () => {
  addBookToLibrary();
});
