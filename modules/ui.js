export class UserInterface {

  static displayBooks(){
    const storedBooks = [
      {
        title:'Godzilla',
        author: 'Mark Morrison',
        id: 1651737334824
      },
      {
        title:'Magic hook',
        author: 'Peter Pan',
        id: 1651737379193
      }
    ];
    const books = storedBooks;
    books.forEach(book => UserInterface.addBook(book));
  }


}