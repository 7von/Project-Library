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
    if(myLibrary >= 0){
        checkLibrary(obj)
    }
    else {return myLibrary.push(obj)}
}

function checkLibrary(obj){
    if(myLibrary.every(e => e === obj)){
        console.log("testing")
        return myLibrary.push(obj)
    }
    return null
}


const book = new Book("Harry Potter", "J.K. Rowlings", 245)
const book2 = new Book("The Hobbit", "Tolkien", 340)

addBookToLibrary(book)
addBookToLibrary(book2)

console.table(myLibrary)


