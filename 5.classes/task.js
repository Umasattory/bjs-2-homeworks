class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  };

  set state(amount) {
    if (amount < 0) {
      this._state = 0;
    } else if (this.state > 100) {
      this._state = 100;
    } else {
      this._state = amount;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'detective';
  }
};

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  };

  findBookBy(_type, value) {
    const findBook = this.books.find(item => item[_type] === value);
    if (findBook !== undefined) {
      console.log(`Произведение по пораметру "${_type}" со значением "${value}" - Найден`)
      return findBook || null;
    }
  }

  giveBookByName(bookName) {
    const giveBook = this.books.findIndex(item => item.name === bookName);
    if (giveBook !== -1) {
      const bookInd = this.books[giveBook];
      this.books.splice(bookInd, 1);
      console.log("Читателю выдана книга '" + bookName + "'");
      return bookInd || null;
    }
  }
};

//_____________________________________Задание____________________________________________//

console.log("-----------------------------------------------------------------")
const sherlock = new PrintEditionItem("Полное собрание повести и рассказы о Шерлоке Холмсе", 2019, 1008)
console.log(sherlock.releaseDate); //2019
sherlock.state = 105; //100
console.log(sherlock.state)
sherlock.fix();
console.log(sherlock.state); //100
console.log("-----------------------------------------------------------------")
const library = new Library("Библиатека имени В.И.Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

library.findBookBy('name', 'Пикник на обочине');
library.giveBookByName('Пикник на обочине');

console.log("-----------------------------------------------------------------")
console.log(library.books)
