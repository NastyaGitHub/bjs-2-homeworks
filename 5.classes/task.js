class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  get state() {
    return this.newRightState;
  }

  set state(currentState) {
    if (currentState < 0) {
      this.newRightState = 0;
    }
    if (currentState > 100) {
      this.newRightState = 100;
    } else {
      this.newRightState = currentState;
    }
  }

  fix() {
    this.state = this.state * 1.5;
  }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.type = "magazine";
    }
};
  
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
};
  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
};
  
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
};
  
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
};

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookBy(type, value) {
    const findBook = this.books.filter((book) => (book[type] === value));
    const [first] = findBook;
    return (findBook.length === 0) ? null : first;
  }

  giveBookByName(bookName) {
    const indexMyBook = this.books.findIndex((book) => (book.name === bookName));
		if (indexMyBook === -1) return null;
		const delBooks = this.books[indexMyBook];
    delete this.books[indexMyBook];
    this.books = this.books.filter((e) => e);   
    return delBooks;
  }
}
