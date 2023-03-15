class PrintEditionItem {
    constructor(name, releaseDate, pagesCount = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
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

//let bbb = new PrintEditionItem("www", 2000, 10)
//bbb.state = 50;

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

// let B_book = new Book( "Иван Бунин","Тёмные аллеи", 1901, 300)

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount = null) {
        super(author, name, releaseDate, pagesCount);
 //       this.author = author;        
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
// let D_book = new DetectiveBook( "bunin","www", 2010, 1010)

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }



    findBookBy(type, value) {
        // У меня в консоли вроди всё находит
        let searchType = type;
        let searchValue = value;

        for (let i = 0; i < this.books.length; i++) {
            if (searchType in this.books[i]) {
//              console.log('свойство есть');
                if (searchValue === this.books[i][searchType]) {
                    console.log('-= свойство РАВНО значению, книга найдена =-');
                    console.log(this.books[i]);
                } else {
//                  console.log('------------------------------------');
                    return null;
                }
            } else {
                console.log('свойство нет');
                return null;                
            }
        }
		
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if  (bookName === this.books[i].name) {
                console.log('книга нашлась');
                return this.books[i];
            } else {
                console.log('книга не нашлась');
            }
        }
        
    }




    
}