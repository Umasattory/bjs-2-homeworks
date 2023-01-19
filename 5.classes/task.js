class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
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
//  console.log("Найдена книга " + "'" + findBook.name + "'") // Контрольная строка (не по заданию) для контроля работаспособности
      return findBook || null
    }
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(item => item.name === bookName);
    const giveBook = this.books[bookIndex];
    if (bookIndex !== -1) {
      this.books.splice(giveBook, 1);
//    console.log("Читателю выдана книга '" + bookName + "'"); // Контрольная строка (не по заданию) для контроля работаспособности
    } else {
      return null
    }
    return giveBook;
  }
};

//_____________________________________Задание____________________________________________ //


//_____________________________________Задание____________________________________________//

console.log("-----------------------------------------------------------------")
const sherlock = new PrintEditionItem("Полное собрание повести и рассказы о Шерлоке Холмсе", 2019, 1008)
console.log(sherlock.releaseDate); //2019
sherlock.state = 90;
console.log(sherlock.state)
sherlock.fix();
console.log(sherlock.state);
console.log("-----------------------------------------------------------------")
const library = new Library("Библиатека имени В.И.Ленина");
const book1 = library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
const book2 = library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
const book3 = library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
const book4 = library.addBook(new Magazine("Мурзилка", 1924, 60));

library.findBookBy('author', 'Артур Конан Дойл');
console.log("-----------------------------------------------------------------")
library.findBookBy('releaseDate', 1977);
console.log("-----------------------------------------------------------------")
library.giveBookByName('Пикник на обочине');
console.log("-----------------------------------------------------------------")
console.log(library.books);
console.log("-----------------------------------------------------------------")
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (mark < 2 && mark > 5 ) {
      console.log(`Невалидная оценка ${mark}`)
      return;
    }

    if (this.marks[0] === undefined) {
      this.marks[subject] = [mark];
    } else {
      this.marks[1].push(mark)
    }


    //this.marks[subject].push(mark)
  }
  
/*   getAverage() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i][0];
    }
    return (sum / this.marks.length);
  }
  getAverageBySubject(subjectName) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i][1] === subjectName) {
        sum += this.marks[i][0];
        arr.push(this.marks[i][0]);
      }
    }
    return (sum / arr.length);
  } */
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "Литература");
student.addMark(7, "химия");
student.addMark(5, "физика");
student.addMark(5, "Чтение");
student.addMark(5, "Алгебра");
student.addMark(6, "физика");
student.addMark(8, "физика"); // Оценка не добавится, так как больше 5
/* student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75 */
console.log(student)
console.log("-----------------------------------------------------------------")