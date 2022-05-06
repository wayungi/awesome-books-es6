export default class Storage {
  // add a book to local storage
  static addBook = (book) => {
    let books = JSON.parse(localStorage.getItem('books'));
    if (books) {
      books.push(book);
    } else {
      books = [];
      books.push(book);
    }
    books = JSON.stringify(books);
    localStorage.setItem('books', books);
  }

  static getBooks = () => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  static updateStorage = (booksArray) => {
    localStorage.setItem('books', JSON.stringify(booksArray));
  }
}