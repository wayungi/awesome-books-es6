export default class {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = new Date().valueOf();
  }
}