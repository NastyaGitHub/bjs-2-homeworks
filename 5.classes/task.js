class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
    return this.state * 1.5;
  }
    set newRightState (newRightState) {
      if ( this.state < 0) {
        this.newRightState = 0;
      } else if (this.state > 100) {
        this.newRightState = 100;
      } else {
        return this._state;
      }
    }
    get newRightState() {
      return this.newRightState;
    }
  };
  class Magazine extends PrintEditionItem {
    constructor() {
      this.type = "magazine";
    }
  };
  class Book extends PrintEditionItem {
    constructor(author) {
      this.author = author;
      this.type = "book";
    }
  };
  class NovelBook extends Book {
    constructor() {
      this.type = "novel";
    }
  };
  class FantasticBook extends Book {
    constructor() {
      this.type = "fantastic";
    }
  };
  class DetectiveBook extends Book {
    constructor() {
      this.type = "detective";
    }
    
  }
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  

  
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
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3