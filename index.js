let myLibrary = []

function Book(name, author, pages){
    this.name = name
    this.author = author
    this.pages = pages
}

Book.prototype.hasRead = function(){
    this.hasRead = prompt("Have you read this book yet? Y/N")
}

function addBookToLibrary(obj){
    if(myLibrary.some((book) => book.name === obj.name)) return false;
    return myLibrary.push(obj)
}

function removeBookFromLibrary(obj){
    myLibrary = myLibrary.filter((book) => book.name !== obj)
}


function newForm() {
    
}


const book = new Book("Harry Potter", "J.K. Rowlings", 245)
const book2 = new Book("The Hobbit", "Tolkien", 340)

addBookToLibrary(book)
addBookToLibrary(book2)

console.table(myLibrary)

const newBook = document.querySelector("#new_button")
newBook.addEventListener("click",()=>{
    
});  
