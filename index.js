import { DateTime } from "./luxon.js";


// events: add book, remove book, display book

const formSubmit = document.querySelector('.submitBtn');
const { forms } = document;
const bookList = document.querySelector('.book-list');
const listBooks = document.querySelector('.list');
const newBook = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

const contactSection = document.querySelector('.contact-info');
const addBooksSection = document.querySelector('.add-books');
const listBksSection = document.querySelector('.list-books');

let bookStore = [];

class UserInterface {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = new Date().valueOf();
  }

  static updateBrowser(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-holder');

    // add book title
    const titleP = document.createElement('p');
    titleP.textContent = `"${book.title}" by \xa0`;
    // add author
    const authorP = document.createElement('p');
    authorP.textContent = ` ${book.author}`;
    // add hidden id field

    const paraHolder = document.createElement('div');
    paraHolder.appendChild(titleP);
    paraHolder.appendChild(authorP);
    paraHolder.classList.add('group-paragraph');

    const bookId = document.createElement('p');
    bookId.setAttribute('type', 'hidden');
    bookId.setAttribute('value', book.id);
    //  create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.classList.add('deleteBtn');
    // const line = document.createElement('hr');
    bookDiv.appendChild(paraHolder);
    bookDiv.appendChild(bookId);
    bookDiv.appendChild(deleteBtn);
    // bookDiv.appendChild(line);
    bookList.appendChild(bookDiv);
  }

  static displayBooks() {
    const books = localStorage.getItem('books');
    if (books) {
      bookStore = JSON.parse(books);
      bookStore.forEach((book) => UserInterface.updateBrowser(book));
    } else {
      localStorage.setItem('books', JSON.stringify(bookStore));
    }
  }

  static addBook(book) {
    if (book.title !== '' || book.author !== '') {
      bookStore.push(book);
      localStorage.setItem('books', JSON.stringify(bookStore));
      UserInterface.updateBrowser(book);
    }
  }
}

// display books on page load and on refresh
document.addEventListener('DOMContentLoaded', UserInterface.displayBooks());

// Add a book on form submission
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const form = forms['book-form'];
  const fields = form.elements;
  const title = fields.title.value;
  const author = fields.author.value;
  // clear form fields
  fields.title.value = '';
  fields.author.value = '';
  // add book to bookStore
  const book = new UserInterface(title, author);
  UserInterface.addBook(book);
});

// remove element from bookstore on click
bookList.addEventListener('click', (e) => {
  // check if clicked element is delete button
  const targetElement = e.target.classList[0];
  if (targetElement === 'deleteBtn') {
    // get book id
    const bookId = +e.target.parentNode.childNodes[1].getAttribute('value');
    // remove book from browser display
    bookList.removeChild(e.target.parentNode);
    // remove book from bookstore array
    bookStore.forEach((book, index) => {
      if (book.id === bookId) {
        bookStore.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(bookStore));
  }
});

contact.addEventListener('click', () => {
  contact.classList.add('active');
  newBook.classList.remove('active');
  listBooks.classList.remove('active');
  contactSection.classList.remove('hide');
  addBooksSection.classList.add('hide');
  listBksSection.classList.add('hide');
});

newBook.addEventListener('click', () => {
  newBook.classList.add('active');
  contact.classList.remove('active');
  listBooks.classList.remove('active');
  contactSection.classList.add('hide');
  addBooksSection.classList.remove('hide');
  listBksSection.classList.add('hide');
});

listBooks.addEventListener('click', () => {
  listBooks.classList.add('active');
  contact.classList.remove('active');
  newBook.classList.remove('active');
  contactSection.classList.add('hide');
  addBooksSection.classList.add('hide');
  listBksSection.classList.remove('hide');
});
