class Book {
    constructor(title, author, isbn, available = true) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.available = available;
    }
  //To borrow Book
    borrowBook() {
      if (this.available) {
        this.available = false;
        return console.log(
          `${this.title} by ${this.author} with code ${this.isbn} has been borrowed`
        );
      } else {
        return console.log(
          `${this.title} by ${this.author} with code ${this.isbn} is not available `
        );
      }
    }
  // To return Book
    returnBook() {
      this.available = true;
      return console.log(
        `${this.title} by ${this.author} with code ${this.isbn} has been returned and is now available`
      );
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
   //To add book to library
    addBook(book) {
      this.books.push(book);
      console.log(
        `A new book titled "${book.title}" by author ${book.author} has been added.`
      );
    }
  //  To remove book from the library using the isbn
    removeBook(isbn) {
      this.books = this.books.filter((book) => book.isbn !== isbn);
      console.log(`Book with ISBN ${isbn} has been removed.`);
    }
   
    // To find book by title
    findBookByTitle(title) {
      const foundBook = this.books.filter(
        (book) => book.title.toLowerCase() === title.toLowerCase()
      );
      if (foundBook.length) {
        foundBook.forEach((book) =>
          console.log(`"${book.title}" by ${book.author} was found.`)
        );
      } else {
        console.log(`No book with the title "${title}" was found.`);
      }
    }
  }
  
  const library = new Library();
  const Book1 = new Book("Sweet Mother", "Jack Brain", 123, true);
  const Book2 = new Book("Totoise And The Hunter", "Ben Chke", 1234, true);
  
  class DigitalLibrary extends Library {
    constructor() {
      super(); // This calls the parent constructor
    }
  
    // Method to download a book
    downloadBook(isbn) {
      const book = this.books.find((book) => book.isbn === isbn); // this code first find book which matches with the isbn
      if (book) {
        if (book.available) {
          console.log(`"${book.title}" by ${book.author} is being downloaded.`);
        } else {
          console.log(
            `"${book.title}" by ${book.author} is currently not available for download.`
          );
        }
      } else {
        console.log(`No book with ISBN ${isbn} found in the library.`);
      }
    }
  }
  
  
  
  
  const digitalLibrary = new DigitalLibrary();
  
  const book1 = new Book("Sweet Mother", "Jack Brain", 123456789, true);
  const book2 = new Book("The Adventures", "Doe Black", 987654321, true);
  
  // Add book to  DigitalLibrary
  digitalLibrary.addBook(book1);
  digitalLibrary.addBook(book2);
  
  // Borrowing a book
  book1.borrowBook();
  
  // Attempting to download a book
  digitalLibrary.downloadBook(123456789);
  digitalLibrary.downloadBook(987654321);
  
  // Returning a book and trying to download again
  book1.returnBook();
  digitalLibrary.downloadBook(123456789);
  
  // When you try to modify ISBN it wouldn't work
  book1.isbn = 111111111;
  
  // T test borrow and return Book
  Book1.borrowBook();
  Book1.borrowBook();
  Book1.returnBook();
  
  // To add, remove, and search for books in the library
  library.addBook(Book1);
  library.addBook(Book2);
  library.removeBook(123456789);
  library.findBookByTitle("Sweet Mother");
  library.findBookByTitle("Totoise And The Hunter");
  