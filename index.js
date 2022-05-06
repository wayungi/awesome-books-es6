import Book from './modules/book.js';
import ui from './modules/ui.js';
import Storage from './modules/storage.js';

const formSubmit = document.querySelector('.submitBtn');
const { forms } = document;
const bookList = document.querySelector('.book-list');
const listBooks = document.querySelector('.list');
const newBook = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const contactSection = document.querySelector('.contact-info');
const addBooksSection = document.querySelector('.add-books');
const listBksSection = document.querySelector('.list-books');

// display books on page load and on refresh
document.addEventListener('DOMContentLoaded', ui.displayBooks());

// Add a book on form submission
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value
  const author = document.querySelector('.author').value
  if(title !== '' && author !== ''){
    const book = new Book(title, author);
    Storage.addBook(book);
    ui.clearForm();
  }
}); 

// remove element from bookstore on click
bookList.addEventListener('click', (e) => ui.deleteBook(e))

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
