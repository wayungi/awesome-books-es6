export default class Storage {

  // add a book to local storage
  static addBook(book) {
    //console.log(localStorage.getItem('books'));
    let books = JSON.parse(localStorage.getItem('books'))  
    if(books){
      books.push(book);
    }else{
      books = [];
      books.push(book);
    }
    books = JSON.stringify(books);
    localStorage.setItem('books', books);
  }
}