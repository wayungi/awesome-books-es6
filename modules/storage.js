import UserInterface from "./ui.js";


export default class Storage {

  // add a book to local storage
  static addBook(book) {
    let books = JSON.parse(localStorage.getItem('books'))  
    if(books){
      books.push(book);
    }else{
      books = [];
      books.push(book);
    }
    books = JSON.stringify(books);
    localStorage.setItem('books', books);
    UserInterface.updateInterface(book);
  }

  static getBooks() {
    let books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  static updateStorage(booksArray){
    localStorage.setItem('books', JSON.stringify(booksArray))
  }
}