class PrintEditionItem {
    constructor(name, releaseDate, pagesCount = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

        this.userName = null;
    }

    set state(number){
        this._state = number;
      }
    get state(){
        return this._state;
      }

    fix(){
        this.state *= 1.5;
        if (this.state <= 0) {
            this.state = 0;
        } else if (this.state >= 100) {
            this.state = 100;
        }
    }   
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount = null) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }   
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount = null) {
        super(name, releaseDate, pagesCount);
        this.author = author;        
        this.state = 100;
        this.type = "book";
    }   
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount = null) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }   
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount = null) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }   
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount = null) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }   
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
        this.books.push(book);
        } else {
            console.log('у книги статус меньше 30');
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
                if (this.books[i][type] === value) {
                    return this.books[i];
                }
            }
        return null;            
    }

    giveBookByName(bookName) {

        for (let i = 0; i < this.books.length; i++) {

            if (bookName === this.books[i].name) {
                let book = this.books[i];
                this.books.splice([i],1);
                return book;
                }
        }
        return null;
    }

}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark <= 5 && mark >= 2) {
            if ([subject] in this.marks) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [];
                this.marks[subject].push(mark);
            }
        }
    }

    getAverageBySubject(subject) {
        if (subject in this.marks) {
            if (this.marks[subject].length === 0) {
                return 0;
            }
            let sum = 0;
            for (let i = 0; i < this.marks[subject].length; i++) {
                sum += this.marks[subject][i];
            }
            return sum / this.marks[subject].length;
        } else {
            return 0;
        }
    }

    getAverage() {
        
        if (this.marks.length === null) {
            console.log('marks пустой');
            return null;
        } else if (this.marks.length !== null) {
            const arrayMarks = Object.values(this.marks);
            
            let summ = 0;
            let quantity = 0;
            
            for (let i = 0; i < arrayMarks.length; i++) {
                for (let ii = 0; ii < arrayMarks[i].length; ii++) {
                    summ += arrayMarks[i][ii];
                    quantity += 1;
                }
            }
            return summ / quantity;
        }
    }
}