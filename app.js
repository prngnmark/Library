const body = document.querySelector(".body");

const myLibrary = [
    {
        title: "dakfldsnf",
        author: "ndkalf",
        pages: 300,
        read: true
    },
    {
        title: "dkalf",
        author: "dknfal",
        pages: 200,
        read: false
    },
    {
        title: "kdfnls",
        author: "dkfnalf",
        pages: 1000,
        read: true
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info() = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary() {
    var title = prompt("Enter book title");
    var author = prompt("Enter book author");
    var pages = prompt("Enter number of pages the book has");
    var read = prompt("Did you read it yet? Type 'Yes' or 'No'");
    return Book(title, author, pages, read)
}

function displayBook(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        makeBookDiv(myLibrary[i])
    }
}

function makeBookDiv(arg) {
    const book = document.createElement('div');
    book.classList.add('book')
    book.setAttribute('style', 'white-space: pre;');
    book.textContent = `Title: ${arg.title}\r\nAuthor: ${arg.author}\r\nNumber of Pages: ${arg.pages}\r\nRead: ${arg.read}`;
    body.appendChild(book);
}

displayBook(myLibrary)