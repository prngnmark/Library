const body = document.querySelector(".body");
const submitBtn = document.querySelector(".submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const form = document.querySelector("#form");

const myLibrary = [
    {
        title: "dakfldsnfdafafafafd",
        author: "ndkalf",
        pages: 300,
        read: "Read"
    },
    {
        title: "dkalf",
        author: "dknfal",
        pages: 200,
        read: "Not Read"
    },
    {
        title: "kdfnls",
        author: "dkfnalf",
        pages: 1000,
        read: "Read"
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(newBook);
    makeBookDiv(newBook);
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

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity() == true) {
        addBookToLibrary()
    }
})

displayBook(myLibrary);
