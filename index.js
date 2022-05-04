const listBooks = document.querySelector('.list');
const newBook = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const contactSection = document.querySelector('.contact-info');
const addBooksSection = document.querySelector('.add-books');
const listBksSection = document.querySelector('.list-books');

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
