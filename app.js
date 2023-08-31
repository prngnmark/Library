const body = document.querySelector(".body");
const submitBtn = document.querySelector(".submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const form = document.querySelector("#form");
const removeBtn = document.querySelector(".remove");

const myLibrary = [];

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
    book.classList.add('book');
    book.setAttribute('style', 'white-space: pre;');
    book.dataset.index = myLibrary.length - 1;
    body.appendChild(book);

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('bookInfo');
    book.appendChild(bookInfo);

    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const status = document.createElement('div');
    title.textContent = `Title: ${arg.title}`;
    author.textContent = `Author: ${arg.author}`;
    pages.textContent = `Pages: ${arg.pages}`;
    status.textContent = `Read: ${arg.read}`;
    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    bookInfo.appendChild(status);

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    book.appendChild(btnDiv);
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = "remove book";
    remove.addEventListener('click', () => {
        book.remove();
        myLibrary.splice(book.dataset.index, 1);
    })
    btnDiv.appendChild(remove);

    const statusChange = document.createElement('button');
    statusChange.classList.add('change');
    statusChange.innerText = "change read status";
    statusChange.addEventListener('click', () => {
        if (status.textContent == "Read: Yes") {
            status.textContent = "Read: No";
            myLibrary[book.dataset.index].read = "No"
        } else {
            status.textContent = "Read: Yes";
            myLibrary[book.dataset.index].read = "Yes"
        }
    })
    btnDiv.appendChild(statusChange);
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity() == true) {
        addBookToLibrary();
        form.reset()
    }
})
