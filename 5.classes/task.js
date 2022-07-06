class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    const currentState = this.state * 1.5;
    this.newRightState = currentState;
  }

  set newRightState(currentState) {
    if (currentState < 0) {
      this.state = 0;
    }
    if (currentState > 100) {
      this.state = 100;
    } else {
      this.state = currentState;
    }
    this.gnewRightState = this.state;
  }

  get newRightState() {
    return this.gnewRightState;
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
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "novel";
    }
  };
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  };
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "detective";
    }
  };

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      this.state = state;
      if (this.state > 30) {
        Library.prototype.push(...books)
      }
    }
  findBookBy(author, bookName, type, value,) {
    this.author = author;
    this.bookName = this.bookName;
    this.type = type;
    this.value = value;
    if (this.bookName === undefined) {
      console.log('null');
    }
  }
   giveBookByName(bookName) {
     if (this.bookName === bookName) {
       delet (...books);
     } else {
       console.log('null');
     }
   } 
  }