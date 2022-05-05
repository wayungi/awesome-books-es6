const { forms } = document;


export default class UserInterface {

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

  static addBook(book) {
    const bookList = document.querySelector('.book-list');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-holder');
    // add book title
    const titleP = document.createElement('p');
    titleP.textContent = `"${book.title}" by \xa0`;
    // add author
    const authorP = document.createElement('p');
    authorP.textContent = ` ${book.author}`;

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
    bookList.appendChild(bookDiv);
    bookList.appendChild(bookDiv);
  }

  static clearForm(){
    const form = forms['book-form'];
    const fields = form.elements;
    fields.title.value = '';
    fields.author.value = '';
  }
}